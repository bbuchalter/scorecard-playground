// Scorecard Computation Module
// Pure functions for calculating scores

(function() {
// Helper functions
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const fmt = (x, d = 4) => Number.isFinite(x) ? x.toFixed(d) : "NaN";
const fmt2 = (x) => Number.isFinite(x) ? x.toFixed(2) : "NaN";

/**
 * Compute SLO score
 * @param {Array} slos - Array of SLO objects: {name, ebPct, tier}
 * @param {Object} config - SLO configuration with tierWeights, method, params, pointBudget
 * @param {Object} normMethods - Normalization method definitions
 * @returns {Object} - {S, score, items, denom, numer}
 */
function computeSloScore(slos, config, normMethods) {
  const { tierWeights, method, params, pointBudget } = config;
  const normMethod = normMethods[method];

  // Build per-SLO values with penalty-based normalization
  const items = slos.map(slo => {
    const ebPct = Number(slo.ebPct);
    const negativeAmount = Math.max(0, -ebPct);
    const s = ebPct >= 0 ? 1.0 : normMethod.calc(negativeAmount, params[method]);
    const w = Math.max(0, Number(tierWeights[slo.tier] ?? 1.0));
    const ws = w * s;
    return { ...slo, ebPct, negativeAmount, s, w, ws };
  });

  // Weighted average
  const denom = items.reduce((acc, it) => acc + it.w, 0);
  const numer = items.reduce((acc, it) => acc + it.ws, 0);
  const S = (denom > 0 && items.length > 0) ? (numer / denom) : 1.0;

  const score = pointBudget * clamp(S, 0, 1);

  return { S, score, items, denom, numer };
}

/**
 * Compute Vulnerability score
 * @param {Array} images - Array of image objects: {name, critical, high, medium, low}
 * @param {Object} config - Vuln configuration with weights, method, params, budget
 * @param {Object} normMethods - Normalization method definitions
 * @returns {Object} - {S, score, items, denom, numer, severityTotals}
 */
function computeVulnScore(images, config, normMethods) {
  const { weights, method, params, budget } = config;
  const calcFn = normMethods[method].calc;
  const severities = ["critical", "high", "medium", "low"];

  // Aggregate vulnerabilities by severity across ALL images
  const severityTotals = {};
  severities.forEach(sev => {
    severityTotals[sev] = images.reduce((sum, img) => sum + (img[sev] || 0), 0);
  });

  // Normalize each severity's total count, then compute weighted average
  const items = severities.map(sev => {
    const count = severityTotals[sev];
    const w = weights[sev];
    const s = calcFn(count, params[method]);
    return {
      name: sev.charAt(0).toUpperCase() + sev.slice(1),
      severity: sev,
      count,
      w,
      s,
      ws: w * s
    };
  });

  const denom = items.reduce((sum, it) => sum + it.w, 0);
  const numer = items.reduce((sum, it) => sum + it.ws, 0);
  const S = denom > 0 ? numer / denom : 1.0;

  const score = budget * clamp(S, 0, 1);

  return { S, score, items, denom, numer, severityTotals };
}

/**
 * Compute Bug score
 * @param {Array} tickets - Array of ticket objects: {name, priority}
 * @param {Object} config - Bug configuration with weights, method, params, budget
 * @param {Object} normMethods - Normalization method definitions
 * @returns {Object} - {S, score, items, denom, numer, counts}
 */
function computeBugScore(tickets, config, normMethods) {
  const { weights, method, params, budget } = config;
  const priorities = ["p0", "p1", "p2"];
  const calcFn = normMethods[method].calc;

  // Count tickets by priority
  const counts = { p0: 0, p1: 0, p2: 0 };
  tickets.forEach(ticket => {
    if (counts.hasOwnProperty(ticket.priority)) {
      counts[ticket.priority]++;
    }
  });

  const items = priorities.map(prio => {
    const count = counts[prio];
    const w = weights[prio] || 1;
    const s = calcFn(count, params[method]);
    return {
      name: prio.toUpperCase(),
      prio,
      count,
      w,
      s,
      ws: w * s
    };
  });

  const denom = items.reduce((sum, it) => sum + it.w, 0);
  const numer = items.reduce((sum, it) => sum + it.ws, 0);
  const S = denom > 0 ? numer / denom : 1.0;

  const score = budget * clamp(S, 0, 1);

  return { S, score, items, denom, numer, counts };
}

/**
 * Compute Postmortem score
 * @param {Array} problems - Array of problem objects: {incident, severity, problemType, description}
 * @param {Object} config - PM configuration with severityWeights, typeWeights, method, params, budget
 * @param {Object} normMethods - Normalization method definitions
 * @returns {Object} - {S, score, items, denom, numer, weightedTotals, rawCounts}
 */
function computePmScore(problems, config, normMethods) {
  const { severityWeights, typeWeights, method, params, budget } = config;
  const calcFn = normMethods[method].calc;
  const problemTypes = ["metadata", "actions", "postmortem"];

  // Aggregate problems by type, weighted by severity
  const weightedTotals = { metadata: 0, actions: 0, postmortem: 0 };
  const rawCounts = { metadata: 0, actions: 0, postmortem: 0 };

  problems.forEach(problem => {
    const type = problem.problemType;
    if (weightedTotals.hasOwnProperty(type)) {
      const sevWeight = severityWeights[problem.severity] || 1;
      weightedTotals[type] += sevWeight;
      rawCounts[type]++;
    }
  });

  // Normalize each type's weighted total using selected method
  const items = problemTypes.map(type => {
    const weightedCount = weightedTotals[type];
    const rawCount = rawCounts[type];
    const w = typeWeights[type];
    const s = calcFn(weightedCount, params[method]);
    return {
      name: type === "metadata" ? "Missing metadata" :
            type === "actions" ? "Incomplete actions" :
            "Incomplete postmortem",
      type,
      rawCount,
      weightedCount,
      w,
      s,
      ws: w * s
    };
  });

  const denom = items.reduce((sum, it) => sum + it.w, 0);
  const numer = items.reduce((sum, it) => sum + it.ws, 0);
  const S = denom > 0 ? numer / denom : 1.0;

  const score = budget * clamp(S, 0, 1);

  return { S, score, items, denom, numer, weightedTotals, rawCounts };
}

/**
 * Compute overall score from all categories
 * @param {Object} metrics - {slos, images, tickets, problems}
 * @param {Object} config - Full configuration {slo, vuln, bug, pm}
 * @param {Object} normMethods - Normalization method definitions
 * @returns {Object} - {sloResult, vulnResult, bugResult, pmResult, totalScore, totalMax, percentage, grade}
 */
function computeOverallScore(metrics, config, normMethods) {
  const sloResult = computeSloScore(metrics.slos || [], config.slo, normMethods);
  const vulnResult = computeVulnScore(metrics.images || [], config.vuln, normMethods);
  const bugResult = computeBugScore(metrics.tickets || [], config.bug, normMethods);
  const pmResult = computePmScore(metrics.problems || [], config.pm, normMethods);

  const totalScore = sloResult.score + vulnResult.score + bugResult.score + pmResult.score;
  const totalMax = config.slo.pointBudget + config.vuln.budget + config.bug.budget + config.pm.budget;
  const percentage = totalMax > 0 ? totalScore / totalMax : 0;
  const grade = getLetterGrade(percentage * 100);

  return {
    sloResult,
    vulnResult,
    bugResult,
    pmResult,
    totalScore,
    totalMax,
    percentage,
    grade
  };
}

/**
 * Get letter grade from score (0-100)
 */
function getLetterGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

/**
 * Get score class for styling (5-tier: excellent, good, fair, at-risk, critical)
 */
function getScoreClass(score) {
  if (score >= 90) return 'excellent';
  if (score >= 80) return 'good';
  if (score >= 70) return 'fair';
  if (score >= 60) return 'at-risk';
  return 'critical';
}

/**
 * Get simplified score class for styling (3-tier: good, warn, bad)
 * Works with either percentage (0-1) or score (0-100)
 */
function getScoreClassSimple(value) {
  // Convert percentage to score if needed
  const score = value <= 1 ? value * 100 : value;
  if (score >= 80) return 'good';
  if (score >= 60) return 'warn';
  return 'bad';
}

/**
 * Get score color
 */
function getScoreColor(score) {
  const className = getScoreClass(score);
  const colors = {
    'excellent': '#6ee7b7',
    'good': '#5eead4',
    'fair': '#fde68a',
    'at-risk': '#fb923c',
    'critical': '#fb7185'
  };
  return colors[className];
}

/**
 * Calculate improvement opportunities for individual items
 * @param {Object} teamData - {slos, images, tickets, problems}
 * @param {Object} config - Full configuration {slo, vuln, bug, pm}
 * @param {Object} normMethods - Normalization method definitions
 * @param {string} teamLabel - Label to show for the team (optional)
 * @param {Array} teamPath - Path array for the team (optional), e.g. ['Applications', 'Backend API', 'Auth Service']
 * @returns {Array} - Array of {category, categoryColor, name, team, teamPath, opportunity, itemId} sorted by opportunity desc
 */
function calculateOpportunities(teamData, config, normMethods, teamLabel = '', teamPath = null) {
  const opportunities = [];
  
  // SLOs: Calculate opportunity for each SLO with negative EB%
  if (teamData.slos && teamData.slos.length > 0) {
    const sloResult = computeSloScore(teamData.slos, config.slo, normMethods);
    const currentSloScore = sloResult.score;
    
    teamData.slos.forEach((slo, idx) => {
      if (slo.ebPct < 0) {
        // Calculate what score would be if this SLO was fixed (EB% = 0)
        const fixedSlos = teamData.slos.map((s, i) => 
          i === idx ? { ...s, ebPct: 0 } : s
        );
        const fixedResult = computeSloScore(fixedSlos, config.slo, normMethods);
        const opportunity = fixedResult.score - currentSloScore;
        
        if (opportunity > 0.01) {
          opportunities.push({
            category: 'SLOs',
            categoryColor: '#93c5fd',
            name: slo.name,
            team: teamLabel,
            teamPath: teamPath,
            opportunity: opportunity,
            itemId: `slo-${idx}`
          });
        }
      }
    });
  }
  
  // Vulns: Calculate opportunity for each image
  if (teamData.images && teamData.images.length > 0) {
    const vulnResult = computeVulnScore(teamData.images, config.vuln, normMethods);
    const currentVulnScore = vulnResult.score;
    
    teamData.images.forEach((image, idx) => {
      const totalVulns = (image.critical || 0) + (image.high || 0) + (image.medium || 0) + (image.low || 0);
      if (totalVulns > 0) {
        // Calculate what score would be if this image had no vulns
        const fixedImages = teamData.images.map((img, i) =>
          i === idx ? { ...img, critical: 0, high: 0, medium: 0, low: 0 } : img
        );
        const fixedResult = computeVulnScore(fixedImages, config.vuln, normMethods);
        const opportunity = fixedResult.score - currentVulnScore;
        
        if (opportunity > 0.01) {
          opportunities.push({
            category: 'Vulns',
            categoryColor: '#fb7185',
            name: image.name,
            team: teamLabel,
            teamPath: teamPath,
            opportunity: opportunity,
            itemId: `vuln-${idx}`
          });
        }
      }
    });
  }
  
  // Bugs: Calculate opportunity for each ticket
  if (teamData.tickets && teamData.tickets.length > 0) {
    const bugResult = computeBugScore(teamData.tickets, config.bug, normMethods);
    const currentBugScore = bugResult.score;
    
    teamData.tickets.forEach((ticket, idx) => {
      // Calculate what score would be if this ticket was fixed
      const fixedTickets = teamData.tickets.filter((_, i) => i !== idx);
      const fixedResult = computeBugScore(fixedTickets, config.bug, normMethods);
      const opportunity = fixedResult.score - currentBugScore;
      
      if (opportunity > 0.01) {
        opportunities.push({
          category: 'Bugs',
          categoryColor: '#fde68a',
          name: ticket.name,
          team: teamLabel,
          teamPath: teamPath,
          opportunity: opportunity,
          itemId: `bug-${idx}`
        });
      }
    });
  }
  
  // Postmortems: Calculate opportunity for each problem
  if (teamData.problems && teamData.problems.length > 0) {
    const pmResult = computePmScore(teamData.problems, config.pm, normMethods);
    const currentPmScore = pmResult.score;
    
    teamData.problems.forEach((problem, idx) => {
      // Calculate what score would be if this problem was fixed
      const fixedProblems = teamData.problems.filter((_, i) => i !== idx);
      const fixedResult = computePmScore(fixedProblems, config.pm, normMethods);
      const opportunity = fixedResult.score - currentPmScore;
      
      if (opportunity > 0.01) {
        opportunities.push({
          category: 'Postmortems',
          categoryColor: '#c4b5fd',
          name: problem.incident + ': ' + problem.description,
          team: teamLabel,
          teamPath: teamPath,
          opportunity: opportunity,
          itemId: `pm-${idx}`
        });
      }
    });
  }
  
  // Sort by opportunity descending
  opportunities.sort((a, b) => b.opportunity - a.opportunity);
  
  return opportunities;
}

/**
 * Calculate opportunities across multiple teams
 * @param {Array} teams - Array of {data: teamData, label: string, path: Array (optional)}
 * @param {Object} config - Full configuration {slo, vuln, bug, pm}
 * @param {Object} normMethods - Normalization method definitions
 * @param {number} limit - Maximum number of opportunities to return (default 10)
 * @returns {Array} - Array of opportunities sorted by score improvement
 */
function calculateOpportunitiesForTeams(teams, config, normMethods, limit = 10) {
  const allOpportunities = [];
  
  teams.forEach(team => {
    const teamOpportunities = calculateOpportunities(team.data, config, normMethods, team.label, team.path || null);
    allOpportunities.push(...teamOpportunities);
  });
  
  // Sort by opportunity descending
  allOpportunities.sort((a, b) => b.opportunity - a.opportunity);
  
  return allOpportunities.slice(0, limit);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    computeSloScore,
    computeVulnScore,
    computeBugScore,
    computePmScore,
    computeOverallScore,
    calculateOpportunities,
    calculateOpportunitiesForTeams,
    getLetterGrade,
    getScoreClass,
    getScoreClassSimple,
    getScoreColor,
    clamp,
    fmt,
    fmt2
  };
}

// Also expose globally for direct script tag usage
if (typeof window !== 'undefined') {
  window.ScorecardCompute = {
    computeSloScore,
    computeVulnScore,
    computeBugScore,
    computePmScore,
    computeOverallScore,
    calculateOpportunities,
    calculateOpportunitiesForTeams,
    getLetterGrade,
    getScoreClass,
    getScoreClassSimple,
    getScoreColor,
    clamp,
    fmt,
    fmt2
  };
}
})();
