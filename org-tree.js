// Organization Tree Module
// Provides generic tree traversal and manipulation for org hierarchy

(function() {

/**
 * Build a unified organization tree from mock data and hierarchy
 * @param {Object} mockData - Mock data structure
 * @param {Object} hierarchy - Organization hierarchy structure
 * @param {Object} config - Scorecard configuration
 * @param {Object} normMethods - Normalization methods
 * @param {Object} compute - Compute module
 * @returns {OrgNode} - Root node of the organization tree
 */
function buildOrgTree(mockData, hierarchy, config, normMethods, compute, rootOwnership) {
  // Create root R&D node
  const rootNode = {
    name: 'R&D',
    path: [],
    level: 0,
    isLeaf: false,
    children: [],
    metrics: null,
    rawData: null,
    ownership: rootOwnership || null
  };

  // Build children (groups)
  Object.keys(hierarchy).forEach(groupKey => {
    const groupHierarchy = hierarchy[groupKey];
    const groupMockData = mockData[groupKey];
    
    const groupNode = {
      name: groupHierarchy.name,
      path: [groupKey],
      level: 1,
      isLeaf: false,
      children: [],
      metrics: null,
      rawData: null,
      ownership: groupHierarchy.ownership || null
    };

    // Build group's children (teams)
    Object.keys(groupHierarchy.teams).forEach(teamKey => {
      const teamHierarchy = groupHierarchy.teams[teamKey];
      const teamMockData = groupMockData.teams[teamKey];

      if (teamMockData.subTeams) {
        // Team with sub-teams
        const teamNode = {
          name: teamKey,
          path: [groupKey, teamKey],
          level: 2,
          isLeaf: false,
          children: [],
          metrics: null,
          rawData: null,
          ownership: teamHierarchy.ownership || null
        };

        // Build team's children (sub-teams)
        Object.keys(teamMockData.subTeams).forEach(subTeamKey => {
          const subTeamData = teamMockData.subTeams[subTeamKey];
          // Get ownership from hierarchy
          const subTeamHierarchy = teamHierarchy.subTeams && teamHierarchy.subTeams[subTeamKey];
          const ownership = (subTeamHierarchy && subTeamHierarchy.ownership) || null;
          const metrics = computeTeamMetrics(subTeamData, config, normMethods, compute);
          
          const subTeamNode = {
            name: subTeamKey,
            path: [groupKey, teamKey, subTeamKey],
            level: 3,
            isLeaf: true,
            children: [],
            metrics: metrics,
            rawData: subTeamData,
            ownership: ownership
          };
          
          teamNode.children.push(subTeamNode);
        });

        groupNode.children.push(teamNode);
      } else {
        // Leaf team (no sub-teams)
        // Get ownership from hierarchy
        const ownership = teamHierarchy.ownership || null;
        const metrics = computeTeamMetrics(teamMockData, config, normMethods, compute);
        
        const teamNode = {
          name: teamKey,
          path: [groupKey, teamKey],
          level: 2,
          isLeaf: true,
          children: [],
          metrics: metrics,
          rawData: teamMockData,
          ownership: ownership
        };
        
        groupNode.children.push(teamNode);
      }
    });

    rootNode.children.push(groupNode);
  });

  // Compute aggregated metrics for all non-leaf nodes
  aggregateMetrics(rootNode);

  return rootNode;
}

/**
 * Compute metrics for a team from raw data
 * @param {Object} teamData - Raw team data (slos, images, tickets, problems)
 * @param {Object} config - Scorecard configuration
 * @param {Object} normMethods - Normalization methods
 * @param {Object} compute - Compute module
 * @returns {Object} - Metrics object with scores and trends
 */
function computeTeamMetrics(teamData, config, normMethods, compute) {
  const sloResult = compute.computeSloScore(teamData.slos || [], config.slo, normMethods);
  const vulnResult = compute.computeVulnScore(teamData.images || [], config.vuln, normMethods);
  const bugResult = compute.computeBugScore(teamData.tickets || [], config.bug, normMethods);
  const pmResult = compute.computePmScore(teamData.problems || [], config.pm, normMethods);

  return {
    slos: { 
      score: Math.round(sloResult.S * 100), 
      trend: [85, 86, 87, Math.round(sloResult.S * 100)] 
    },
    vulns: { 
      score: Math.round(vulnResult.S * 100), 
      trend: [72, 74, 75, Math.round(vulnResult.S * 100)] 
    },
    bugs: { 
      score: Math.round(bugResult.S * 100), 
      trend: [78, 79, 80, Math.round(bugResult.S * 100)] 
    },
    postmortems: { 
      score: Math.round(pmResult.S * 100), 
      trend: [58, 55, 53, Math.round(pmResult.S * 100)] 
    }
  };
}

/**
 * Recursively aggregate metrics up the tree
 * Non-leaf nodes get metrics by averaging their children
 * @param {OrgNode} node - Node to aggregate metrics for
 */
function aggregateMetrics(node) {
  if (node.isLeaf) {
    // Leaf nodes already have metrics computed
    return;
  }

  // First, ensure all children have metrics
  node.children.forEach(child => aggregateMetrics(child));

  // Get all leaf descendants
  const leaves = getAllLeafNodes(node);
  
  if (leaves.length === 0) {
    // No leaves, set default metrics
    node.metrics = {
      slos: { score: 0, trend: [0, 0, 0, 0] },
      vulns: { score: 0, trend: [0, 0, 0, 0] },
      bugs: { score: 0, trend: [0, 0, 0, 0] },
      postmortems: { score: 0, trend: [0, 0, 0, 0] }
    };
    return;
  }

  // Aggregate metrics from all leaf nodes
  const metricsSum = {
    slos: 0,
    vulns: 0,
    bugs: 0,
    postmortems: 0
  };
  const trendSum = {
    slos: [0, 0, 0, 0],
    vulns: [0, 0, 0, 0],
    bugs: [0, 0, 0, 0],
    postmortems: [0, 0, 0, 0]
  };

  leaves.forEach(leaf => {
    metricsSum.slos += leaf.metrics.slos.score;
    metricsSum.vulns += leaf.metrics.vulns.score;
    metricsSum.bugs += leaf.metrics.bugs.score;
    metricsSum.postmortems += leaf.metrics.postmortems.score;

    for (let i = 0; i < 4; i++) {
      trendSum.slos[i] += leaf.metrics.slos.trend[i];
      trendSum.vulns[i] += leaf.metrics.vulns.trend[i];
      trendSum.bugs[i] += leaf.metrics.bugs.trend[i];
      trendSum.postmortems[i] += leaf.metrics.postmortems.trend[i];
    }
  });

  const count = leaves.length;
  node.metrics = {
    slos: {
      score: Math.round(metricsSum.slos / count),
      trend: trendSum.slos.map(t => Math.round(t / count))
    },
    vulns: {
      score: Math.round(metricsSum.vulns / count),
      trend: trendSum.vulns.map(t => Math.round(t / count))
    },
    bugs: {
      score: Math.round(metricsSum.bugs / count),
      trend: trendSum.bugs.map(t => Math.round(t / count))
    },
    postmortems: {
      score: Math.round(metricsSum.postmortems / count),
      trend: trendSum.postmortems.map(t => Math.round(t / count))
    }
  };
}

/**
 * Get a node by path
 * @param {OrgNode} tree - Root node or any starting node
 * @param {Array<string>} path - Path to find (e.g., ['Applications', 'Backend API'])
 * @returns {OrgNode|null} - Found node or null
 */
function getNodeByPath(tree, path) {
  if (path.length === 0) {
    return tree;
  }

  // Match paths by comparing them
  if (arraysEqual(tree.path, path)) {
    return tree;
  }

  // Search children
  for (const child of tree.children) {
    const found = getNodeByPath(child, path);
    if (found) {
      return found;
    }
  }

  return null;
}

/**
 * Get all leaf nodes (teams with no children) from a node
 * @param {OrgNode} node - Starting node
 * @returns {Array<OrgNode>} - Array of leaf nodes
 */
function getAllLeafNodes(node) {
  if (node.isLeaf) {
    return [node];
  }

  const leaves = [];
  node.children.forEach(child => {
    leaves.push(...getAllLeafNodes(child));
  });
  return leaves;
}

/**
 * Get direct children of a node
 * @param {OrgNode} node - Node to get children from
 * @returns {Array<OrgNode>} - Array of child nodes
 */
function getChildren(node) {
  return node.children || [];
}

/**
 * Check if a node is a leaf
 * @param {OrgNode} node - Node to check
 * @returns {boolean} - True if leaf node
 */
function isLeaf(node) {
  return node.isLeaf;
}

/**
 * Calculate average score across all metrics for a node
 * @param {OrgNode} node - Node to calculate average for
 * @returns {number} - Average score (0-100)
 */
function calculateAverageScore(node) {
  if (!node.metrics) {
    return 0;
  }
  
  const scores = [
    node.metrics.slos.score,
    node.metrics.vulns.score,
    node.metrics.bugs.score,
    node.metrics.postmortems.score
  ];
  
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

/**
 * Calculate average trend across all metrics for a node
 * @param {OrgNode} node - Node to calculate trend for
 * @returns {Array<number>} - Average trend values
 */
function calculateAverageTrend(node) {
  if (!node.metrics) {
    return [0, 0, 0, 0];
  }
  
  const trend = [];
  for (let i = 0; i < 4; i++) {
    const periodAvg = Math.round(
      (node.metrics.slos.trend[i] + 
       node.metrics.vulns.trend[i] + 
       node.metrics.bugs.trend[i] + 
       node.metrics.postmortems.trend[i]) / 4
    );
    trend.push(periodAvg);
  }
  return trend;
}

/**
 * Get ownership info for a node
 * Returns the node's own ownership
 * @param {OrgNode} node - Node to get ownership for
 * @returns {Object|null} - Ownership object or null
 */
function getNodeOwnership(node) {
  return node.ownership || null;
}

/**
 * Get label for child level based on parent level
 * @param {number} level - Parent node level
 * @returns {string} - Label for children ("Group", "Team", "Sub-Team")
 */
function getChildLevelLabel(level) {
  const labels = ['Group', 'Team', 'Sub-Team', 'Unit'];
  return labels[level] || 'Item';
}

/**
 * Helper: Check if two arrays are equal
 */
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    buildOrgTree,
    getNodeByPath,
    getAllLeafNodes,
    getChildren,
    isLeaf,
    aggregateMetrics,
    calculateAverageScore,
    calculateAverageTrend,
    getNodeOwnership,
    getChildLevelLabel
  };
}

// Also expose globally for direct script tag usage
if (typeof window !== 'undefined') {
  window.OrgTree = {
    buildOrgTree,
    getNodeByPath,
    getAllLeafNodes,
    getChildren,
    isLeaf,
    aggregateMetrics,
    calculateAverageScore,
    calculateAverageTrend,
    getNodeOwnership,
    getChildLevelLabel
  };
}

})();
