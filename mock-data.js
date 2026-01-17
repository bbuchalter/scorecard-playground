// Mock Data Module
// Auto-generated realistic data for all teams in the organization

const MOCK_DATA_KEY = "scorecard-mock-data";

// Organization hierarchy - matches dashboard.html
// Each leaf team has fixed ownership information
const organizationHierarchy = {
  'Applications': {
    name: 'Applications',
    teams: {
      'Frontend': { 
        name: 'Frontend',
        ownership: { engineeringManager: 'Sarah Chen', productManager: 'Michael Rodriguez', reliabilityDRI: 'Alex Kim' }
      },
      'Backend API': {
        name: 'Backend API',
        subTeams: {
          'API Gateway': { 
            name: 'API Gateway',
            ownership: { engineeringManager: 'David Patel', productManager: 'Emily Wong', reliabilityDRI: 'James Liu' }
          },
          'Auth Service': { 
            name: 'Auth Service',
            ownership: { engineeringManager: 'Maria Garcia', productManager: 'Chris Taylor', reliabilityDRI: 'Jordan Lee' }
          },
          'Payment Service': { 
            name: 'Payment Service',
            ownership: { engineeringManager: 'Robert Singh', productManager: 'Amanda Martinez', reliabilityDRI: 'Casey Brown' }
          }
        }
      },
      'Mobile Apps': { 
        name: 'Mobile Apps',
        ownership: { engineeringManager: 'Jennifer Williams', productManager: 'Daniel Kim', reliabilityDRI: 'Taylor Johnson' }
      },
      'Search & Discovery': { 
        name: 'Search & Discovery',
        ownership: { engineeringManager: 'Wei Zhang', productManager: 'Sofia Hernandez', reliabilityDRI: 'Morgan Davis' }
      }
    }
  },
  'Infrastructure': {
    name: 'Infrastructure',
    teams: {
      'Cloud Platform': {
        name: 'Cloud Platform',
        subTeams: {
          'AWS Infrastructure': { 
            name: 'AWS Infrastructure',
            ownership: { engineeringManager: 'Raj Kumar', productManager: 'Nicole Anderson', reliabilityDRI: 'Drew Thompson' }
          },
          'GCP Infrastructure': { 
            name: 'GCP Infrastructure',
            ownership: { engineeringManager: 'Yuki Tanaka', productManager: 'Carlos Santos', reliabilityDRI: 'Riley Moore' }
          },
          'Azure Infrastructure': { 
            name: 'Azure Infrastructure',
            ownership: { engineeringManager: 'Omar Ali', productManager: 'Priya Sharma', reliabilityDRI: 'Quinn Wilson' }
          }
        }
      },
      'Networking': { 
        name: 'Networking',
        ownership: { engineeringManager: 'Fatima Ibrahim', productManager: 'Andrew Scott', reliabilityDRI: 'Jamie Clark' }
      },
      'Security': { 
        name: 'Security',
        ownership: { engineeringManager: 'Thomas Wright', productManager: 'Rachel Green', reliabilityDRI: 'Avery Hall' }
      },
      'Database': { 
        name: 'Database',
        ownership: { engineeringManager: 'Lisa Wang', productManager: 'Matthew Baker', reliabilityDRI: 'Cameron Young' }
      },
      'Observability': { 
        name: 'Observability',
        ownership: { engineeringManager: 'William Nguyen', productManager: 'Karen Adams', reliabilityDRI: 'Hayden King' }
      }
    }
  },
  'Growth': {
    name: 'Growth',
    teams: {
      'Marketing Automation': { 
        name: 'Marketing Automation',
        ownership: { engineeringManager: 'Susan Lee', productManager: 'Daniel Miller', reliabilityDRI: 'Blake Robinson' }
      },
      'Analytics': { 
        name: 'Analytics',
        ownership: { engineeringManager: 'James Chen', productManager: 'Emily Davis', reliabilityDRI: 'Skyler White' }
      },
      'A/B Testing': { 
        name: 'A/B Testing',
        ownership: { engineeringManager: 'Linda Martinez', productManager: 'Robert Johnson', reliabilityDRI: 'Reese Garcia' }
      },
      'User Acquisition': { 
        name: 'User Acquisition',
        ownership: { engineeringManager: 'Charles Kim', productManager: 'Patricia Brown', reliabilityDRI: 'Parker Lewis' }
      }
    }
  },
  'Platform': {
    name: 'Platform',
    teams: {
      'API Gateway': { 
        name: 'API Gateway',
        ownership: { engineeringManager: 'Michael Thompson', productManager: 'Sarah Williams', reliabilityDRI: 'Jesse Martin' }
      },
      'Authentication': { 
        name: 'Authentication',
        ownership: { engineeringManager: 'Jennifer Lopez', productManager: 'David Anderson', reliabilityDRI: 'Robin Taylor' }
      },
      'Billing': { 
        name: 'Billing',
        ownership: { engineeringManager: 'Christopher Moore', productManager: 'Amanda Jackson', reliabilityDRI: 'Shannon Harris' }
      },
      'Notifications': { 
        name: 'Notifications',
        ownership: { engineeringManager: 'Elizabeth White', productManager: 'Ryan Thomas', reliabilityDRI: 'Kelly Martin' }
      }
    }
  },
  'Data Engineering': {
    name: 'Data Engineering',
    teams: {
      'ETL Pipeline': { 
        name: 'ETL Pipeline',
        ownership: { engineeringManager: 'Richard Garcia', productManager: 'Michelle Lee', reliabilityDRI: 'Dana Wilson' }
      },
      'Data Warehouse': { 
        name: 'Data Warehouse',
        ownership: { engineeringManager: 'Barbara Rodriguez', productManager: 'Steven Clark', reliabilityDRI: 'Pat Young' }
      },
      'ML Platform': { 
        name: 'ML Platform',
        ownership: { engineeringManager: 'Joseph Martinez', productManager: 'Laura Walker', reliabilityDRI: 'Chris Allen' }
      },
      'Data Quality': { 
        name: 'Data Quality',
        ownership: { engineeringManager: 'Nancy Hernandez', productManager: 'Kevin King', reliabilityDRI: 'Sam Wright' }
      }
    }
  },
  'Mobile': {
    name: 'Mobile',
    teams: {
      'iOS': { 
        name: 'iOS',
        ownership: { engineeringManager: 'Mark Scott', productManager: 'Stephanie Green', reliabilityDRI: 'Morgan Baker' }
      },
      'Android': { 
        name: 'Android',
        ownership: { engineeringManager: 'Sandra Adams', productManager: 'Brian Nelson', reliabilityDRI: 'Taylor Hill' }
      },
      'React Native': { 
        name: 'React Native',
        ownership: { engineeringManager: 'Paul Mitchell', productManager: 'Donna Campbell', reliabilityDRI: 'Jordan Roberts' }
      },
      'Mobile Backend': { 
        name: 'Mobile Backend',
        ownership: { engineeringManager: 'Betty Turner', productManager: 'George Phillips', reliabilityDRI: 'Alex Evans' }
      }
    }
  }
};

// Default ownership for teams without explicit ownership data
const defaultOwnership = {
  engineeringManager: 'TBD',
  productManager: 'TBD',
  reliabilityDRI: 'TBD'
};

// Sample SLO names
const sloNames = [
  "API availability", "Checkout latency", "Login success rate", "Payment processing time",
  "Search response time", "Order completion rate", "Page load time", "Database query latency",
  "Cache hit rate", "Error rate", "Webhook delivery", "Email delivery rate",
  "File upload success", "Session creation time", "Report generation time",
  "Data sync latency", "Notification delivery", "Authentication latency",
  "Image processing time", "Video transcoding rate", "Batch job success rate",
  "Queue processing time", "CDN response time", "Mobile app crash rate"
];

// Sample container image names
const imageNames = [
  "api-server", "worker", "frontend", "backend", "gateway",
  "scheduler", "cache", "database", "auth-service", "payment-service",
  "notification-service", "analytics", "search", "cdn-origin", "proxy"
];

// Generate realistic raw data for a team based on target score
function generateTeamData(targetScore) {
  // Reverse engineer from target score (0-100) to realistic raw data
  // Higher target score = fewer/better metrics
  
  const data = {
    slos: [],
    images: [],
    tickets: [],
    problems: []
  };

  // Generate 3-8 SLOs
  const numSlos = 3 + Math.floor(Math.random() * 6);
  const usedSlos = new Set();
  for (let i = 0; i < numSlos; i++) {
    let name;
    do {
      name = sloNames[Math.floor(Math.random() * sloNames.length)];
    } while (usedSlos.has(name));
    usedSlos.add(name);

    // Higher target score => more positive error budgets
    const ebPct = targetScore >= 80 ? 
      Math.floor(Math.random() * 50) + 50 :  // 50-100 for good teams
      targetScore >= 60 ?
      Math.floor(Math.random() * 80) - 20 :  // -20 to 60 for medium teams
      Math.floor(Math.random() * 60) - 40;   // -40 to 20 for struggling teams

    const tier = ['p0', 'p1', 'p2'][Math.floor(Math.random() * 3)];
    data.slos.push({ name, ebPct, tier });
  }

  // Generate 2-4 container images with vulnerabilities
  const numImages = 2 + Math.floor(Math.random() * 3);
  const usedImages = new Set();
  for (let i = 0; i < numImages; i++) {
    let name;
    do {
      name = imageNames[Math.floor(Math.random() * imageNames.length)];
    } while (usedImages.has(name));
    usedImages.add(name);

    // Higher target score => fewer vulnerabilities
    const multiplier = targetScore >= 80 ? 0.3 : targetScore >= 60 ? 0.7 : 1.2;
    data.images.push({
      name,
      critical: Math.floor(Math.random() * 3 * multiplier),
      high: Math.floor(Math.random() * 6 * multiplier),
      medium: Math.floor(Math.random() * 15 * multiplier),
      low: Math.floor(Math.random() * 40 * multiplier)
    });
  }

  // Generate 5-15 bug tickets
  const numBugs = 5 + Math.floor(Math.random() * 11);
  for (let i = 0; i < numBugs; i++) {
    const name = `BUG-${1000 + Math.floor(Math.random() * 9000)}`;
    // Weight distribution based on target score
    const rand = Math.random();
    let priority;
    if (targetScore >= 80) {
      priority = rand < 0.1 ? 'p0' : rand < 0.3 ? 'p1' : 'p2';
    } else if (targetScore >= 60) {
      priority = rand < 0.15 ? 'p0' : rand < 0.4 ? 'p1' : 'p2';
    } else {
      priority = rand < 0.25 ? 'p0' : rand < 0.5 ? 'p1' : 'p2';
    }
    data.tickets.push({ name, priority });
  }

  // Generate 2-6 postmortem problems
  const numProblems = 2 + Math.floor(Math.random() * 5);
  const problemDescriptions = {
    metadata: ["No timeline documented", "Impact scope unclear", "Detection time not recorded"],
    actions: ["Action items not assigned", "Missing due dates", "Follow-up incomplete"],
    postmortem: ["Not completed within SLA", "Missing root cause", "No lessons learned"]
  };

  for (let i = 0; i < numProblems; i++) {
    const incident = `ALERT-${1000 + Math.floor(Math.random() * 9000)}`;
    const severities = ['sev1', 'sev2', 'sev3', 'sev4'];
    const severity = severities[Math.floor(Math.random() * severities.length)];
    const problemTypes = ['metadata', 'actions', 'postmortem'];
    const problemType = problemTypes[Math.floor(Math.random() * problemTypes.length)];
    const descriptions = problemDescriptions[problemType];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];

    data.problems.push({ incident, severity, problemType, description });
  }

  return data;
}

// Generate mock data for all leaf teams in the organization
function generateAllMockData() {
  const mockData = {};

  // Target scores from current dashboard.html to maintain visual consistency
  const targetScores = {
    'Applications': {
      'Frontend': 80,
      'Backend API': {
        'API Gateway': 75,
        'Auth Service': 64,
        'Payment Service': 76
      },
      'Mobile Apps': 73,
      'Search & Discovery': 77
    },
    'Infrastructure': {
      'Cloud Platform': {
        'AWS Infrastructure': 68,
        'GCP Infrastructure': 61,
        'Azure Infrastructure': 64
      },
      'Networking': 72,
      'Security': 82,
      'Database': 61,
      'Observability': 68
    },
    'Growth': {
      'Marketing Automation': 75,
      'Analytics': 80,
      'A/B Testing': 78,
      'User Acquisition': 79
    },
    'Platform': {
      'API Gateway': 75,
      'Authentication': 82,
      'Billing': 74,
      'Notifications': 76
    },
    'Data Engineering': {
      'ETL Pipeline': 80,
      'Data Warehouse': 81,
      'ML Platform': 83,
      'Data Quality': 77
    },
    'Mobile': {
      'iOS': 77,
      'Android': 78,
      'React Native': 76,
      'Mobile Backend': 81
    }
  };

  // Generate data for each team
  Object.keys(organizationHierarchy).forEach(groupKey => {
    const group = organizationHierarchy[groupKey];
    mockData[groupKey] = { teams: {} };

    Object.keys(group.teams).forEach(teamKey => {
      const team = group.teams[teamKey];
      
      if (team.subTeams) {
        mockData[groupKey].teams[teamKey] = { subTeams: {} };
        Object.keys(team.subTeams).forEach(subTeamKey => {
          const targetScore = targetScores[groupKey][teamKey][subTeamKey];
          mockData[groupKey].teams[teamKey].subTeams[subTeamKey] = generateTeamData(targetScore);
        });
      } else {
        const targetScore = targetScores[groupKey][teamKey];
        mockData[groupKey].teams[teamKey] = generateTeamData(targetScore);
      }
    });
  });

  return mockData;
}

// Load mock data from localStorage
function loadMockData() {
  try {
    const saved = localStorage.getItem(MOCK_DATA_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Could not load mock data from localStorage:", e);
  }
  // Fall back to generated defaults
  const defaultData = generateAllMockData();
  saveMockData(defaultData);
  return defaultData;
}

// Save mock data to localStorage
function saveMockData(data) {
  try {
    localStorage.setItem(MOCK_DATA_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Could not save mock data to localStorage:", e);
    return false;
  }
}

// Reset mock data to freshly generated defaults
function resetMockData() {
  const data = generateAllMockData();
  saveMockData(data);
  return data;
}

// Get mock data for a specific team by path
// path: ['Applications', 'Backend API', 'API Gateway'] or ['Growth', 'Analytics']
function getMockDataForTeam(path) {
  const mockData = loadMockData();
  
  if (path.length === 2) {
    // Group > Team
    const [group, team] = path;
    return mockData[group]?.teams[team];
  } else if (path.length === 3) {
    // Group > Team > SubTeam
    const [group, team, subTeam] = path;
    return mockData[group]?.teams[team]?.subTeams[subTeam];
  }
  
  return null;
}

// Update mock data for a specific team
function updateMockDataForTeam(path, data) {
  const mockData = loadMockData();
  
  if (path.length === 2) {
    const [group, team] = path;
    if (mockData[group]?.teams) {
      mockData[group].teams[team] = data;
    }
  } else if (path.length === 3) {
    const [group, team, subTeam] = path;
    if (mockData[group]?.teams[team]?.subTeams) {
      mockData[group].teams[team].subTeams[subTeam] = data;
    }
  }
  
  saveMockData(mockData);
  return mockData;
}

// Get list of all teams (for team selector)
function getAllTeamPaths() {
  const paths = [];
  
  Object.keys(organizationHierarchy).forEach(groupKey => {
    const group = organizationHierarchy[groupKey];
    
    Object.keys(group.teams).forEach(teamKey => {
      const team = group.teams[teamKey];
      
      if (team.subTeams) {
        Object.keys(team.subTeams).forEach(subTeamKey => {
          paths.push({
            path: [groupKey, teamKey, subTeamKey],
            label: `${groupKey} › ${teamKey} › ${subTeamKey}`
          });
        });
      } else {
        paths.push({
          path: [groupKey, teamKey],
          label: `${groupKey} › ${teamKey}`
        });
      }
    });
  });
  
  return paths;
}

// Get ownership for a team from its data or return default
function getOrGenerateOwnership(teamData) {
  if (teamData && teamData.ownership) {
    return teamData.ownership;
  }
  return defaultOwnership;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    organizationHierarchy,
    generateTeamData,
    generateAllMockData,
    loadMockData,
    saveMockData,
    resetMockData,
    getMockDataForTeam,
    updateMockDataForTeam,
    getAllTeamPaths,
    getOrGenerateOwnership
  };
}

// Also expose globally for direct script tag usage
if (typeof window !== 'undefined') {
  window.MockData = {
    organizationHierarchy,
    generateTeamData,
    generateAllMockData,
    loadMockData,
    saveMockData,
    resetMockData,
    getMockDataForTeam,
    updateMockDataForTeam,
    getAllTeamPaths,
    getOrGenerateOwnership
  };
}
