// Mock Data Module
// Auto-generated realistic data for all teams in the organization

const MOCK_DATA_KEY = "scorecard-mock-data";

// =============================================================================
// DEFAULT MOCK DATA
// =============================================================================
// To use custom default data instead of randomly generated data:
// 1. Export your data from the Data Editor using "Export All Data"
// 2. Paste the JSON contents below, replacing `null`
// 3. When localStorage is empty or reset, this data will be used as the default
//
// Example:
//   const DEFAULT_MOCK_DATA = { "Applications": { "teams": { ... } }, ... };
//
// Set to `null` to use randomly generated data instead.
// =============================================================================
const DEFAULT_MOCK_DATA = {
  "Applications": {
    "teams": {
      "Frontend": {
        "slos": [
          {
            "name": "Video transcoding rate",
            "ebPct": 86,
            "tier": "p2"
          },
          {
            "name": "Batch job success rate",
            "ebPct": 81,
            "tier": "p2"
          },
          {
            "name": "Data sync latency",
            "ebPct": 99,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "worker",
            "critical": 0,
            "high": 1,
            "medium": 0,
            "low": 2
          },
          {
            "name": "backend",
            "critical": 0,
            "high": 0,
            "medium": 0,
            "low": 8
          },
          {
            "name": "proxy",
            "critical": 0,
            "high": 1,
            "medium": 0,
            "low": 10
          }
        ],
        "tickets": [
          {
            "name": "BUG-2016",
            "priority": "p0"
          },
          {
            "name": "BUG-8585",
            "priority": "p1"
          },
          {
            "name": "BUG-1605",
            "priority": "p0"
          },
          {
            "name": "BUG-9181",
            "priority": "p2"
          },
          {
            "name": "BUG-1232",
            "priority": "p1"
          },
          {
            "name": "BUG-3845",
            "priority": "p2"
          },
          {
            "name": "BUG-1678",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-8201",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          },
          {
            "incident": "ALERT-6121",
            "severity": "sev3",
            "problemType": "actions",
            "description": "Missing due dates"
          },
          {
            "incident": "ALERT-3596",
            "severity": "sev4",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          },
          {
            "incident": "ALERT-1972",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Missing due dates"
          }
        ]
      },
      "Backend API": {
        "subTeams": {
          "API Gateway": {
            "slos": [
              {
                "name": "File upload success",
                "ebPct": 29,
                "tier": "p1"
              },
              {
                "name": "API availability",
                "ebPct": 57,
                "tier": "p2"
              },
              {
                "name": "Queue processing time",
                "ebPct": 24,
                "tier": "p1"
              },
              {
                "name": "Database query latency",
                "ebPct": 3,
                "tier": "p1"
              },
              {
                "name": "Video transcoding rate",
                "ebPct": 23,
                "tier": "p0"
              },
              {
                "name": "Page load time",
                "ebPct": -4,
                "tier": "p0"
              },
              {
                "name": "Webhook delivery",
                "ebPct": -19,
                "tier": "p1"
              },
              {
                "name": "Report generation time",
                "ebPct": -11,
                "tier": "p0"
              }
            ],
            "images": [
              {
                "name": "worker",
                "critical": 0,
                "high": 2,
                "medium": 6,
                "low": 27
              },
              {
                "name": "analytics",
                "critical": 0,
                "high": 2,
                "medium": 0,
                "low": 10
              },
              {
                "name": "database",
                "critical": 1,
                "high": 2,
                "medium": 4,
                "low": 21
              },
              {
                "name": "cache",
                "critical": 0,
                "high": 1,
                "medium": 0,
                "low": 2
              }
            ],
            "tickets": [
              {
                "name": "BUG-4910",
                "priority": "p0"
              },
              {
                "name": "BUG-5610",
                "priority": "p2"
              },
              {
                "name": "BUG-9607",
                "priority": "p2"
              },
              {
                "name": "BUG-2130",
                "priority": "p2"
              },
              {
                "name": "BUG-9870",
                "priority": "p0"
              },
              {
                "name": "BUG-4539",
                "priority": "p2"
              },
              {
                "name": "BUG-9084",
                "priority": "p2"
              },
              {
                "name": "BUG-7697",
                "priority": "p2"
              },
              {
                "name": "BUG-8268",
                "priority": "p2"
              },
              {
                "name": "BUG-8812",
                "priority": "p2"
              },
              {
                "name": "BUG-7025",
                "priority": "p2"
              }
            ],
            "problems": [
              {
                "incident": "ALERT-6788",
                "severity": "sev1",
                "problemType": "postmortem",
                "description": "No lessons learned"
              },
              {
                "incident": "ALERT-1031",
                "severity": "sev4",
                "problemType": "actions",
                "description": "Missing due dates"
              },
              {
                "incident": "ALERT-1001",
                "severity": "sev3",
                "problemType": "metadata",
                "description": "Impact scope unclear"
              },
              {
                "incident": "ALERT-8548",
                "severity": "sev3",
                "problemType": "postmortem",
                "description": "Missing root cause"
              },
              {
                "incident": "ALERT-4684",
                "severity": "sev1",
                "problemType": "actions",
                "description": "Missing due dates"
              },
              {
                "incident": "ALERT-3496",
                "severity": "sev3",
                "problemType": "postmortem",
                "description": "No lessons learned"
              }
            ]
          },
          "Auth Service": {
            "slos": [
              {
                "name": "Database query latency",
                "ebPct": 37,
                "tier": "p1"
              },
              {
                "name": "Webhook delivery",
                "ebPct": -7,
                "tier": "p2"
              },
              {
                "name": "Email delivery rate",
                "ebPct": 57,
                "tier": "p2"
              },
              {
                "name": "File upload success",
                "ebPct": 41,
                "tier": "p0"
              },
              {
                "name": "CDN response time",
                "ebPct": -6,
                "tier": "p0"
              },
              {
                "name": "Notification delivery",
                "ebPct": -4,
                "tier": "p0"
              }
            ],
            "images": [
              {
                "name": "payment-service",
                "critical": 0,
                "high": 0,
                "medium": 2,
                "low": 11
              },
              {
                "name": "gateway",
                "critical": 0,
                "high": 2,
                "medium": 8,
                "low": 1
              }
            ],
            "tickets": [
              {
                "name": "BUG-4330",
                "priority": "p2"
              },
              {
                "name": "BUG-1681",
                "priority": "p2"
              },
              {
                "name": "BUG-4815",
                "priority": "p0"
              },
              {
                "name": "BUG-4604",
                "priority": "p2"
              },
              {
                "name": "BUG-8960",
                "priority": "p2"
              },
              {
                "name": "BUG-9102",
                "priority": "p2"
              },
              {
                "name": "BUG-9534",
                "priority": "p2"
              },
              {
                "name": "BUG-3667",
                "priority": "p2"
              },
              {
                "name": "BUG-5246",
                "priority": "p2"
              },
              {
                "name": "BUG-1737",
                "priority": "p1"
              },
              {
                "name": "BUG-3323",
                "priority": "p1"
              }
            ],
            "problems": [
              {
                "incident": "ALERT-5913",
                "severity": "sev1",
                "problemType": "postmortem",
                "description": "Missing root cause"
              },
              {
                "incident": "ALERT-9265",
                "severity": "sev1",
                "problemType": "postmortem",
                "description": "No lessons learned"
              },
              {
                "incident": "ALERT-3043",
                "severity": "sev4",
                "problemType": "postmortem",
                "description": "Missing root cause"
              }
            ]
          },
          "Payment Service": {
            "slos": [
              {
                "name": "Report generation time",
                "ebPct": -16,
                "tier": "p0"
              },
              {
                "name": "Payment processing time",
                "ebPct": -3,
                "tier": "p0"
              },
              {
                "name": "Error rate",
                "ebPct": 52,
                "tier": "p2"
              },
              {
                "name": "Checkout latency",
                "ebPct": -6,
                "tier": "p0"
              },
              {
                "name": "Order completion rate",
                "ebPct": -6,
                "tier": "p2"
              },
              {
                "name": "Webhook delivery",
                "ebPct": 2,
                "tier": "p1"
              }
            ],
            "images": [
              {
                "name": "gateway",
                "critical": 1,
                "high": 2,
                "medium": 3,
                "low": 20
              },
              {
                "name": "frontend",
                "critical": 1,
                "high": 1,
                "medium": 7,
                "low": 1
              }
            ],
            "tickets": [
              {
                "name": "BUG-4214",
                "priority": "p1"
              },
              {
                "name": "BUG-9600",
                "priority": "p1"
              },
              {
                "name": "BUG-3263",
                "priority": "p1"
              },
              {
                "name": "BUG-2651",
                "priority": "p2"
              },
              {
                "name": "BUG-9941",
                "priority": "p2"
              },
              {
                "name": "BUG-4582",
                "priority": "p1"
              },
              {
                "name": "BUG-5570",
                "priority": "p0"
              }
            ],
            "problems": [
              {
                "incident": "ALERT-2467",
                "severity": "sev3",
                "problemType": "metadata",
                "description": "Impact scope unclear"
              },
              {
                "incident": "ALERT-1493",
                "severity": "sev4",
                "problemType": "metadata",
                "description": "Detection time not recorded"
              },
              {
                "incident": "ALERT-2862",
                "severity": "sev4",
                "problemType": "actions",
                "description": "Action items not assigned"
              },
              {
                "incident": "ALERT-8903",
                "severity": "sev2",
                "problemType": "metadata",
                "description": "Detection time not recorded"
              }
            ]
          }
        }
      },
      "Mobile Apps": {
        "slos": [
          {
            "name": "CDN response time",
            "ebPct": -1,
            "tier": "p2"
          },
          {
            "name": "Image processing time",
            "ebPct": -15,
            "tier": "p2"
          },
          {
            "name": "Search response time",
            "ebPct": 30,
            "tier": "p0"
          },
          {
            "name": "Payment processing time",
            "ebPct": 20,
            "tier": "p0"
          },
          {
            "name": "Checkout latency",
            "ebPct": 36,
            "tier": "p2"
          }
        ],
        "images": [
          {
            "name": "proxy",
            "critical": 0,
            "high": 2,
            "medium": 5,
            "low": 23
          },
          {
            "name": "cache",
            "critical": 0,
            "high": 3,
            "medium": 1,
            "low": 1
          },
          {
            "name": "payment-service",
            "critical": 0,
            "high": 3,
            "medium": 2,
            "low": 11
          }
        ],
        "tickets": [
          {
            "name": "BUG-8446",
            "priority": "p2"
          },
          {
            "name": "BUG-9050",
            "priority": "p0"
          },
          {
            "name": "BUG-3465",
            "priority": "p1"
          },
          {
            "name": "BUG-8298",
            "priority": "p2"
          },
          {
            "name": "BUG-6100",
            "priority": "p1"
          },
          {
            "name": "BUG-8632",
            "priority": "p2"
          },
          {
            "name": "BUG-4644",
            "priority": "p2"
          },
          {
            "name": "BUG-1660",
            "priority": "p2"
          },
          {
            "name": "BUG-8168",
            "priority": "p2"
          },
          {
            "name": "BUG-5996",
            "priority": "p1"
          },
          {
            "name": "BUG-9187",
            "priority": "p1"
          },
          {
            "name": "BUG-6713",
            "priority": "p0"
          },
          {
            "name": "BUG-2245",
            "priority": "p2"
          },
          {
            "name": "BUG-9557",
            "priority": "p1"
          },
          {
            "name": "BUG-4811",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-9046",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "No timeline documented"
          },
          {
            "incident": "ALERT-6781",
            "severity": "sev1",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          },
          {
            "incident": "ALERT-5087",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "No lessons learned"
          }
        ]
      },
      "Search & Discovery": {
        "slos": [
          {
            "name": "Report generation time",
            "ebPct": -12,
            "tier": "p2"
          },
          {
            "name": "Search response time",
            "ebPct": -16,
            "tier": "p0"
          },
          {
            "name": "Checkout latency",
            "ebPct": 0,
            "tier": "p2"
          },
          {
            "name": "Video transcoding rate",
            "ebPct": 14,
            "tier": "p1"
          }
        ],
        "images": [
          {
            "name": "analytics",
            "critical": 0,
            "high": 1,
            "medium": 6,
            "low": 15
          },
          {
            "name": "search",
            "critical": 1,
            "high": 3,
            "medium": 10,
            "low": 27
          }
        ],
        "tickets": [
          {
            "name": "BUG-2876",
            "priority": "p2"
          },
          {
            "name": "BUG-5253",
            "priority": "p2"
          },
          {
            "name": "BUG-9150",
            "priority": "p0"
          },
          {
            "name": "BUG-2962",
            "priority": "p1"
          },
          {
            "name": "BUG-3930",
            "priority": "p2"
          },
          {
            "name": "BUG-9737",
            "priority": "p0"
          },
          {
            "name": "BUG-3290",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-2298",
            "severity": "sev1",
            "problemType": "actions",
            "description": "Missing due dates"
          },
          {
            "incident": "ALERT-4389",
            "severity": "sev3",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          }
        ]
      }
    }
  },
  "Infrastructure": {
    "teams": {
      "Cloud Platform": {
        "subTeams": {
          "AWS Infrastructure": {
            "slos": [
              {
                "name": "Login success rate",
                "ebPct": 9,
                "tier": "p1"
              },
              {
                "name": "Search response time",
                "ebPct": -100,
                "tier": "p0"
              },
              {
                "name": "Data sync latency",
                "ebPct": 5,
                "tier": "p2"
              },
              {
                "name": "Image processing time",
                "ebPct": 52,
                "tier": "p2"
              },
              {
                "name": "Database query latency",
                "ebPct": -11,
                "tier": "p2"
              },
              {
                "name": "Checkout latency",
                "ebPct": -100,
                "tier": "p0"
              }
            ],
            "images": [
              {
                "name": "cache",
                "critical": 1,
                "high": 4,
                "medium": 1,
                "low": 17
              },
              {
                "name": "worker",
                "critical": 0,
                "high": 1,
                "medium": 10,
                "low": 18
              }
            ],
            "tickets": [
              {
                "name": "BUG-6094",
                "priority": "p1"
              },
              {
                "name": "BUG-9344",
                "priority": "p1"
              },
              {
                "name": "BUG-1065",
                "priority": "p2"
              },
              {
                "name": "BUG-1926",
                "priority": "p2"
              },
              {
                "name": "BUG-6183",
                "priority": "p1"
              },
              {
                "name": "BUG-1952",
                "priority": "p1"
              },
              {
                "name": "BUG-9774",
                "priority": "p0"
              },
              {
                "name": "BUG-9282",
                "priority": "p2"
              },
              {
                "name": "BUG-2317",
                "priority": "p2"
              }
            ],
            "problems": [
              {
                "incident": "ALERT-1652",
                "severity": "sev1",
                "problemType": "postmortem",
                "description": "Missing root cause"
              },
              {
                "incident": "ALERT-7396",
                "severity": "sev2",
                "problemType": "actions",
                "description": "Action items not assigned"
              },
              {
                "incident": "ALERT-2848",
                "severity": "sev3",
                "problemType": "metadata",
                "description": "Impact scope unclear"
              },
              {
                "incident": "ALERT-7964",
                "severity": "sev1",
                "problemType": "metadata",
                "description": "Detection time not recorded"
              },
              {
                "incident": "ALERT-5292",
                "severity": "sev4",
                "problemType": "metadata",
                "description": "Detection time not recorded"
              }
            ]
          },
          "GCP Infrastructure": {
            "slos": [
              {
                "name": "Webhook delivery",
                "ebPct": 5,
                "tier": "p1"
              },
              {
                "name": "Mobile app crash rate",
                "ebPct": -14,
                "tier": "p2"
              },
              {
                "name": "Search response time",
                "ebPct": 8,
                "tier": "p1"
              }
            ],
            "images": [
              {
                "name": "worker",
                "critical": 1,
                "high": 0,
                "medium": 3,
                "low": 18
              },
              {
                "name": "api-server",
                "critical": 1,
                "high": 3,
                "medium": 5,
                "low": 16
              }
            ],
            "tickets": [
              {
                "name": "BUG-3169",
                "priority": "p2"
              },
              {
                "name": "BUG-1770",
                "priority": "p2"
              },
              {
                "name": "BUG-9012",
                "priority": "p1"
              },
              {
                "name": "BUG-4776",
                "priority": "p1"
              },
              {
                "name": "BUG-4549",
                "priority": "p2"
              },
              {
                "name": "BUG-9300",
                "priority": "p2"
              },
              {
                "name": "BUG-6074",
                "priority": "p2"
              },
              {
                "name": "BUG-9019",
                "priority": "p1"
              },
              {
                "name": "BUG-8797",
                "priority": "p2"
              },
              {
                "name": "BUG-7373",
                "priority": "p2"
              },
              {
                "name": "BUG-2627",
                "priority": "p1"
              }
            ],
            "problems": [
              {
                "incident": "ALERT-2381",
                "severity": "sev4",
                "problemType": "postmortem",
                "description": "Not completed within SLA"
              },
              {
                "incident": "ALERT-1353",
                "severity": "sev4",
                "problemType": "metadata",
                "description": "Detection time not recorded"
              },
              {
                "incident": "ALERT-5745",
                "severity": "sev4",
                "problemType": "postmortem",
                "description": "Missing root cause"
              },
              {
                "incident": "ALERT-6517",
                "severity": "sev2",
                "problemType": "actions",
                "description": "Follow-up incomplete"
              }
            ]
          },
          "Azure Infrastructure": {
            "slos": [
              {
                "name": "Data sync latency",
                "ebPct": 51,
                "tier": "p0"
              },
              {
                "name": "Cache hit rate",
                "ebPct": 33,
                "tier": "p2"
              },
              {
                "name": "Payment processing time",
                "ebPct": 3,
                "tier": "p0"
              },
              {
                "name": "Login success rate",
                "ebPct": -17,
                "tier": "p0"
              },
              {
                "name": "Page load time",
                "ebPct": 43,
                "tier": "p0"
              },
              {
                "name": "CDN response time",
                "ebPct": -2,
                "tier": "p2"
              },
              {
                "name": "Authentication latency",
                "ebPct": 16,
                "tier": "p0"
              },
              {
                "name": "Search response time",
                "ebPct": -20,
                "tier": "p1"
              }
            ],
            "images": [
              {
                "name": "gateway",
                "critical": 0,
                "high": 0,
                "medium": 6,
                "low": 24
              },
              {
                "name": "database",
                "critical": 0,
                "high": 1,
                "medium": 2,
                "low": 23
              },
              {
                "name": "auth-service",
                "critical": 0,
                "high": 0,
                "medium": 8,
                "low": 27
              }
            ],
            "tickets": [
              {
                "name": "BUG-3971",
                "priority": "p1"
              },
              {
                "name": "BUG-8534",
                "priority": "p1"
              },
              {
                "name": "BUG-2871",
                "priority": "p2"
              },
              {
                "name": "BUG-3354",
                "priority": "p1"
              },
              {
                "name": "BUG-1452",
                "priority": "p1"
              },
              {
                "name": "BUG-9361",
                "priority": "p1"
              },
              {
                "name": "BUG-5956",
                "priority": "p2"
              },
              {
                "name": "BUG-8098",
                "priority": "p2"
              },
              {
                "name": "BUG-7451",
                "priority": "p2"
              },
              {
                "name": "BUG-2872",
                "priority": "p2"
              },
              {
                "name": "BUG-4159",
                "priority": "p2"
              },
              {
                "name": "BUG-5761",
                "priority": "p0"
              },
              {
                "name": "BUG-4470",
                "priority": "p0"
              },
              {
                "name": "BUG-7327",
                "priority": "p1"
              }
            ],
            "problems": [
              {
                "incident": "ALERT-9430",
                "severity": "sev4",
                "problemType": "postmortem",
                "description": "Not completed within SLA"
              },
              {
                "incident": "ALERT-1260",
                "severity": "sev3",
                "problemType": "postmortem",
                "description": "Not completed within SLA"
              },
              {
                "incident": "ALERT-4569",
                "severity": "sev4",
                "problemType": "postmortem",
                "description": "Not completed within SLA"
              },
              {
                "incident": "ALERT-2189",
                "severity": "sev3",
                "problemType": "postmortem",
                "description": "Not completed within SLA"
              },
              {
                "incident": "ALERT-9230",
                "severity": "sev1",
                "problemType": "actions",
                "description": "Action items not assigned"
              },
              {
                "incident": "ALERT-5755",
                "severity": "sev4",
                "problemType": "postmortem",
                "description": "Not completed within SLA"
              }
            ]
          }
        }
      },
      "Networking": {
        "slos": [
          {
            "name": "Database query latency",
            "ebPct": 9,
            "tier": "p1"
          },
          {
            "name": "Session creation time",
            "ebPct": 12,
            "tier": "p2"
          }
        ],
        "images": [],
        "tickets": [],
        "problems": []
      },
      "Security": {
        "slos": [
          {
            "name": "Data sync latency",
            "ebPct": 80,
            "tier": "p1"
          },
          {
            "name": "Database query latency",
            "ebPct": 59,
            "tier": "p1"
          },
          {
            "name": "Video transcoding rate",
            "ebPct": 97,
            "tier": "p1"
          },
          {
            "name": "Mobile app crash rate",
            "ebPct": 55,
            "tier": "p2"
          }
        ],
        "images": [],
        "tickets": [],
        "problems": []
      },
      "Database": {
        "slos": [
          {
            "name": "Page load time",
            "ebPct": 9,
            "tier": "p0"
          },
          {
            "name": "Report generation time",
            "ebPct": 34,
            "tier": "p2"
          },
          {
            "name": "CDN response time",
            "ebPct": 11,
            "tier": "p2"
          },
          {
            "name": "Search response time",
            "ebPct": 25,
            "tier": "p0"
          },
          {
            "name": "Order completion rate",
            "ebPct": 23,
            "tier": "p2"
          }
        ],
        "images": [],
        "tickets": [],
        "problems": []
      },
      "Observability": {
        "slos": [
          {
            "name": "Mobile app crash rate",
            "ebPct": 9,
            "tier": "p1"
          },
          {
            "name": "Session creation time",
            "ebPct": 22,
            "tier": "p1"
          },
          {
            "name": "Webhook delivery",
            "ebPct": -7,
            "tier": "p0"
          },
          {
            "name": "API availability",
            "ebPct": 8,
            "tier": "p2"
          },
          {
            "name": "Page load time",
            "ebPct": 41,
            "tier": "p2"
          },
          {
            "name": "Database query latency",
            "ebPct": -20,
            "tier": "p0"
          },
          {
            "name": "Batch job success rate",
            "ebPct": 34,
            "tier": "p2"
          }
        ],
        "images": [
          {
            "name": "gateway",
            "critical": 2,
            "high": 0,
            "medium": 0,
            "low": 21
          },
          {
            "name": "cdn-origin",
            "critical": 1,
            "high": 2,
            "medium": 8,
            "low": 14
          },
          {
            "name": "frontend",
            "critical": 0,
            "high": 2,
            "medium": 6,
            "low": 17
          },
          {
            "name": "auth-service",
            "critical": 0,
            "high": 2,
            "medium": 6,
            "low": 2
          }
        ],
        "tickets": [
          {
            "name": "BUG-4623",
            "priority": "p2"
          },
          {
            "name": "BUG-8035",
            "priority": "p1"
          },
          {
            "name": "BUG-4885",
            "priority": "p1"
          },
          {
            "name": "BUG-5111",
            "priority": "p2"
          },
          {
            "name": "BUG-5179",
            "priority": "p2"
          },
          {
            "name": "BUG-3464",
            "priority": "p2"
          },
          {
            "name": "BUG-2213",
            "priority": "p0"
          },
          {
            "name": "BUG-4592",
            "priority": "p0"
          },
          {
            "name": "BUG-5323",
            "priority": "p1"
          },
          {
            "name": "BUG-8184",
            "priority": "p2"
          },
          {
            "name": "BUG-1315",
            "priority": "p2"
          },
          {
            "name": "BUG-7482",
            "priority": "p1"
          },
          {
            "name": "BUG-3469",
            "priority": "p1"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-9271",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "No timeline documented"
          },
          {
            "incident": "ALERT-5032",
            "severity": "sev4",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          },
          {
            "incident": "ALERT-2914",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "Missing root cause"
          }
        ]
      }
    }
  },
  "Growth": {
    "teams": {
      "Marketing Automation": {
        "slos": [
          {
            "name": "Session creation time",
            "ebPct": -2,
            "tier": "p2"
          },
          {
            "name": "Report generation time",
            "ebPct": 11,
            "tier": "p0"
          },
          {
            "name": "CDN response time",
            "ebPct": 45,
            "tier": "p2"
          },
          {
            "name": "Data sync latency",
            "ebPct": 1,
            "tier": "p0"
          },
          {
            "name": "Mobile app crash rate",
            "ebPct": -2,
            "tier": "p1"
          },
          {
            "name": "Checkout latency",
            "ebPct": 37,
            "tier": "p2"
          },
          {
            "name": "Order completion rate",
            "ebPct": 29,
            "tier": "p1"
          },
          {
            "name": "Image processing time",
            "ebPct": -16,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "proxy",
            "critical": 0,
            "high": 1,
            "medium": 5,
            "low": 27
          },
          {
            "name": "gateway",
            "critical": 1,
            "high": 2,
            "medium": 6,
            "low": 10
          }
        ],
        "tickets": [
          {
            "name": "BUG-5018",
            "priority": "p2"
          },
          {
            "name": "BUG-4583",
            "priority": "p2"
          },
          {
            "name": "BUG-3927",
            "priority": "p2"
          },
          {
            "name": "BUG-9503",
            "priority": "p1"
          },
          {
            "name": "BUG-1899",
            "priority": "p0"
          },
          {
            "name": "BUG-5626",
            "priority": "p2"
          },
          {
            "name": "BUG-5694",
            "priority": "p2"
          },
          {
            "name": "BUG-5335",
            "priority": "p1"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-3766",
            "severity": "sev3",
            "problemType": "metadata",
            "description": "No timeline documented"
          },
          {
            "incident": "ALERT-1963",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          },
          {
            "incident": "ALERT-3147",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-5554",
            "severity": "sev3",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-7866",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          }
        ]
      },
      "Analytics": {
        "slos": [
          {
            "name": "Payment processing time",
            "ebPct": 51,
            "tier": "p0"
          },
          {
            "name": "Mobile app crash rate",
            "ebPct": 51,
            "tier": "p2"
          },
          {
            "name": "Video transcoding rate",
            "ebPct": 62,
            "tier": "p2"
          },
          {
            "name": "Authentication latency",
            "ebPct": 63,
            "tier": "p1"
          }
        ],
        "images": [
          {
            "name": "auth-service",
            "critical": 0,
            "high": 0,
            "medium": 0,
            "low": 5
          },
          {
            "name": "proxy",
            "critical": 0,
            "high": 1,
            "medium": 1,
            "low": 7
          },
          {
            "name": "notification-service",
            "critical": 0,
            "high": 0,
            "medium": 2,
            "low": 11
          },
          {
            "name": "frontend",
            "critical": 0,
            "high": 0,
            "medium": 3,
            "low": 7
          }
        ],
        "tickets": [
          {
            "name": "BUG-7508",
            "priority": "p2"
          },
          {
            "name": "BUG-8324",
            "priority": "p2"
          },
          {
            "name": "BUG-3964",
            "priority": "p1"
          },
          {
            "name": "BUG-9750",
            "priority": "p0"
          },
          {
            "name": "BUG-6930",
            "priority": "p0"
          },
          {
            "name": "BUG-2499",
            "priority": "p2"
          },
          {
            "name": "BUG-5990",
            "priority": "p2"
          },
          {
            "name": "BUG-2351",
            "priority": "p2"
          },
          {
            "name": "BUG-6273",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-3138",
            "severity": "sev2",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-3236",
            "severity": "sev2",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-4063",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "No timeline documented"
          },
          {
            "incident": "ALERT-4271",
            "severity": "sev1",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-9553",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "Missing root cause"
          }
        ]
      },
      "A/B Testing": {
        "slos": [
          {
            "name": "CDN response time",
            "ebPct": 44,
            "tier": "p0"
          },
          {
            "name": "Login success rate",
            "ebPct": 54,
            "tier": "p1"
          },
          {
            "name": "Page load time",
            "ebPct": 19,
            "tier": "p2"
          },
          {
            "name": "Error rate",
            "ebPct": -18,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "cdn-origin",
            "critical": 0,
            "high": 2,
            "medium": 0,
            "low": 6
          },
          {
            "name": "cache",
            "critical": 0,
            "high": 0,
            "medium": 2,
            "low": 23
          },
          {
            "name": "notification-service",
            "critical": 1,
            "high": 1,
            "medium": 8,
            "low": 0
          },
          {
            "name": "worker",
            "critical": 1,
            "high": 2,
            "medium": 8,
            "low": 11
          }
        ],
        "tickets": [
          {
            "name": "BUG-4204",
            "priority": "p2"
          },
          {
            "name": "BUG-3098",
            "priority": "p2"
          },
          {
            "name": "BUG-4726",
            "priority": "p2"
          },
          {
            "name": "BUG-1878",
            "priority": "p2"
          },
          {
            "name": "BUG-6362",
            "priority": "p0"
          },
          {
            "name": "BUG-3230",
            "priority": "p2"
          },
          {
            "name": "BUG-8738",
            "priority": "p2"
          },
          {
            "name": "BUG-3068",
            "priority": "p2"
          },
          {
            "name": "BUG-3347",
            "priority": "p2"
          },
          {
            "name": "BUG-1845",
            "priority": "p1"
          },
          {
            "name": "BUG-9838",
            "priority": "p2"
          },
          {
            "name": "BUG-4907",
            "priority": "p2"
          },
          {
            "name": "BUG-6829",
            "priority": "p2"
          },
          {
            "name": "BUG-7384",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-4912",
            "severity": "sev3",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-9436",
            "severity": "sev2",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-5960",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-1829",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-8633",
            "severity": "sev1",
            "problemType": "metadata",
            "description": "No timeline documented"
          }
        ]
      },
      "User Acquisition": {
        "slos": [
          {
            "name": "Video transcoding rate",
            "ebPct": -9,
            "tier": "p0"
          },
          {
            "name": "Batch job success rate",
            "ebPct": 54,
            "tier": "p2"
          },
          {
            "name": "Notification delivery",
            "ebPct": 38,
            "tier": "p0"
          },
          {
            "name": "File upload success",
            "ebPct": 33,
            "tier": "p1"
          },
          {
            "name": "Image processing time",
            "ebPct": 35,
            "tier": "p0"
          },
          {
            "name": "Authentication latency",
            "ebPct": 34,
            "tier": "p0"
          },
          {
            "name": "API availability",
            "ebPct": -7,
            "tier": "p1"
          },
          {
            "name": "Database query latency",
            "ebPct": 29,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "worker",
            "critical": 0,
            "high": 0,
            "medium": 10,
            "low": 21
          },
          {
            "name": "frontend",
            "critical": 0,
            "high": 2,
            "medium": 2,
            "low": 10
          },
          {
            "name": "notification-service",
            "critical": 0,
            "high": 3,
            "medium": 4,
            "low": 21
          }
        ],
        "tickets": [
          {
            "name": "BUG-2246",
            "priority": "p2"
          },
          {
            "name": "BUG-3737",
            "priority": "p2"
          },
          {
            "name": "BUG-6720",
            "priority": "p2"
          },
          {
            "name": "BUG-8414",
            "priority": "p2"
          },
          {
            "name": "BUG-8887",
            "priority": "p1"
          },
          {
            "name": "BUG-6668",
            "priority": "p1"
          },
          {
            "name": "BUG-9225",
            "priority": "p2"
          },
          {
            "name": "BUG-9818",
            "priority": "p0"
          },
          {
            "name": "BUG-5469",
            "priority": "p2"
          },
          {
            "name": "BUG-1783",
            "priority": "p2"
          },
          {
            "name": "BUG-1858",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-6833",
            "severity": "sev4",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-1628",
            "severity": "sev1",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-7713",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-8979",
            "severity": "sev4",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          },
          {
            "incident": "ALERT-5749",
            "severity": "sev4",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          }
        ]
      }
    }
  },
  "Platform": {
    "teams": {
      "API Gateway": {
        "slos": [
          {
            "name": "Payment processing time",
            "ebPct": 33,
            "tier": "p1"
          },
          {
            "name": "Notification delivery",
            "ebPct": 12,
            "tier": "p2"
          },
          {
            "name": "Login success rate",
            "ebPct": -17,
            "tier": "p1"
          },
          {
            "name": "Email delivery rate",
            "ebPct": -5,
            "tier": "p1"
          },
          {
            "name": "Batch job success rate",
            "ebPct": 2,
            "tier": "p2"
          },
          {
            "name": "Data sync latency",
            "ebPct": 21,
            "tier": "p0"
          },
          {
            "name": "Error rate",
            "ebPct": 36,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "auth-service",
            "critical": 0,
            "high": 3,
            "medium": 9,
            "low": 1
          },
          {
            "name": "api-server",
            "critical": 1,
            "high": 2,
            "medium": 4,
            "low": 11
          }
        ],
        "tickets": [
          {
            "name": "BUG-5664",
            "priority": "p2"
          },
          {
            "name": "BUG-7486",
            "priority": "p2"
          },
          {
            "name": "BUG-5875",
            "priority": "p2"
          },
          {
            "name": "BUG-5014",
            "priority": "p0"
          },
          {
            "name": "BUG-3225",
            "priority": "p0"
          },
          {
            "name": "BUG-1412",
            "priority": "p2"
          },
          {
            "name": "BUG-9185",
            "priority": "p2"
          },
          {
            "name": "BUG-7192",
            "priority": "p2"
          },
          {
            "name": "BUG-3849",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-7737",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-6577",
            "severity": "sev3",
            "problemType": "actions",
            "description": "Missing due dates"
          }
        ]
      },
      "Authentication": {
        "slos": [
          {
            "name": "File upload success",
            "ebPct": 53,
            "tier": "p0"
          },
          {
            "name": "Data sync latency",
            "ebPct": 67,
            "tier": "p2"
          },
          {
            "name": "Queue processing time",
            "ebPct": 64,
            "tier": "p2"
          },
          {
            "name": "Database query latency",
            "ebPct": 78,
            "tier": "p0"
          },
          {
            "name": "Order completion rate",
            "ebPct": 68,
            "tier": "p2"
          },
          {
            "name": "Session creation time",
            "ebPct": 56,
            "tier": "p2"
          }
        ],
        "images": [
          {
            "name": "database",
            "critical": 0,
            "high": 0,
            "medium": 1,
            "low": 10
          },
          {
            "name": "auth-service",
            "critical": 0,
            "high": 0,
            "medium": 1,
            "low": 2
          },
          {
            "name": "proxy",
            "critical": 0,
            "high": 0,
            "medium": 3,
            "low": 8
          },
          {
            "name": "search",
            "critical": 0,
            "high": 0,
            "medium": 0,
            "low": 11
          }
        ],
        "tickets": [
          {
            "name": "BUG-4002",
            "priority": "p2"
          },
          {
            "name": "BUG-9634",
            "priority": "p0"
          },
          {
            "name": "BUG-7373",
            "priority": "p1"
          },
          {
            "name": "BUG-4512",
            "priority": "p2"
          },
          {
            "name": "BUG-1157",
            "priority": "p1"
          },
          {
            "name": "BUG-4622",
            "priority": "p2"
          },
          {
            "name": "BUG-4282",
            "priority": "p1"
          },
          {
            "name": "BUG-2243",
            "priority": "p2"
          },
          {
            "name": "BUG-9101",
            "priority": "p2"
          },
          {
            "name": "BUG-3396",
            "priority": "p2"
          },
          {
            "name": "BUG-3014",
            "priority": "p2"
          },
          {
            "name": "BUG-4360",
            "priority": "p2"
          },
          {
            "name": "BUG-8734",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-2986",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-7948",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          },
          {
            "incident": "ALERT-5934",
            "severity": "sev1",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-2583",
            "severity": "sev4",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-4103",
            "severity": "sev1",
            "problemType": "actions",
            "description": "Missing due dates"
          }
        ]
      },
      "Billing": {
        "slos": [
          {
            "name": "Notification delivery",
            "ebPct": 27,
            "tier": "p1"
          },
          {
            "name": "Database query latency",
            "ebPct": 26,
            "tier": "p1"
          },
          {
            "name": "CDN response time",
            "ebPct": 0,
            "tier": "p2"
          },
          {
            "name": "Error rate",
            "ebPct": 59,
            "tier": "p0"
          },
          {
            "name": "Email delivery rate",
            "ebPct": 4,
            "tier": "p0"
          },
          {
            "name": "Session creation time",
            "ebPct": 26,
            "tier": "p2"
          },
          {
            "name": "Payment processing time",
            "ebPct": 1,
            "tier": "p0"
          },
          {
            "name": "Batch job success rate",
            "ebPct": 39,
            "tier": "p2"
          }
        ],
        "images": [
          {
            "name": "search",
            "critical": 1,
            "high": 1,
            "medium": 3,
            "low": 3
          },
          {
            "name": "auth-service",
            "critical": 0,
            "high": 3,
            "medium": 10,
            "low": 24
          }
        ],
        "tickets": [
          {
            "name": "BUG-6178",
            "priority": "p2"
          },
          {
            "name": "BUG-7740",
            "priority": "p2"
          },
          {
            "name": "BUG-9714",
            "priority": "p2"
          },
          {
            "name": "BUG-7515",
            "priority": "p2"
          },
          {
            "name": "BUG-4007",
            "priority": "p2"
          },
          {
            "name": "BUG-3425",
            "priority": "p2"
          },
          {
            "name": "BUG-6884",
            "priority": "p1"
          },
          {
            "name": "BUG-5878",
            "priority": "p2"
          },
          {
            "name": "BUG-3100",
            "priority": "p2"
          },
          {
            "name": "BUG-2469",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-1734",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          },
          {
            "incident": "ALERT-9638",
            "severity": "sev3",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-5002",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-4102",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          },
          {
            "incident": "ALERT-7343",
            "severity": "sev1",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          }
        ]
      },
      "Notifications": {
        "slos": [
          {
            "name": "Report generation time",
            "ebPct": 57,
            "tier": "p1"
          },
          {
            "name": "Search response time",
            "ebPct": 34,
            "tier": "p0"
          },
          {
            "name": "CDN response time",
            "ebPct": 46,
            "tier": "p0"
          },
          {
            "name": "Data sync latency",
            "ebPct": 56,
            "tier": "p0"
          },
          {
            "name": "Checkout latency",
            "ebPct": 57,
            "tier": "p1"
          }
        ],
        "images": [
          {
            "name": "backend",
            "critical": 1,
            "high": 3,
            "medium": 9,
            "low": 19
          },
          {
            "name": "gateway",
            "critical": 1,
            "high": 1,
            "medium": 4,
            "low": 11
          }
        ],
        "tickets": [
          {
            "name": "BUG-9779",
            "priority": "p1"
          },
          {
            "name": "BUG-1256",
            "priority": "p1"
          },
          {
            "name": "BUG-8433",
            "priority": "p2"
          },
          {
            "name": "BUG-6303",
            "priority": "p2"
          },
          {
            "name": "BUG-2578",
            "priority": "p2"
          },
          {
            "name": "BUG-1550",
            "priority": "p2"
          },
          {
            "name": "BUG-3308",
            "priority": "p2"
          },
          {
            "name": "BUG-6949",
            "priority": "p2"
          },
          {
            "name": "BUG-2577",
            "priority": "p2"
          },
          {
            "name": "BUG-3549",
            "priority": "p2"
          },
          {
            "name": "BUG-3138",
            "priority": "p2"
          },
          {
            "name": "BUG-8971",
            "priority": "p1"
          },
          {
            "name": "BUG-2422",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-8992",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-5592",
            "severity": "sev2",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-4860",
            "severity": "sev1",
            "problemType": "actions",
            "description": "Missing due dates"
          },
          {
            "incident": "ALERT-7037",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          }
        ]
      }
    }
  },
  "Data Engineering": {
    "teams": {
      "ETL Pipeline": {
        "slos": [
          {
            "name": "Video transcoding rate",
            "ebPct": 84,
            "tier": "p2"
          },
          {
            "name": "Login success rate",
            "ebPct": 63,
            "tier": "p2"
          },
          {
            "name": "Email delivery rate",
            "ebPct": 83,
            "tier": "p0"
          },
          {
            "name": "Image processing time",
            "ebPct": 67,
            "tier": "p1"
          },
          {
            "name": "Report generation time",
            "ebPct": 92,
            "tier": "p2"
          },
          {
            "name": "Page load time",
            "ebPct": 67,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "frontend",
            "critical": 0,
            "high": 0,
            "medium": 1,
            "low": 6
          },
          {
            "name": "cdn-origin",
            "critical": 0,
            "high": 0,
            "medium": 3,
            "low": 9
          }
        ],
        "tickets": [
          {
            "name": "BUG-6682",
            "priority": "p2"
          },
          {
            "name": "BUG-6117",
            "priority": "p2"
          },
          {
            "name": "BUG-3080",
            "priority": "p1"
          },
          {
            "name": "BUG-2505",
            "priority": "p2"
          },
          {
            "name": "BUG-9534",
            "priority": "p1"
          },
          {
            "name": "BUG-2248",
            "priority": "p2"
          },
          {
            "name": "BUG-4459",
            "priority": "p2"
          },
          {
            "name": "BUG-6693",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-7657",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          },
          {
            "incident": "ALERT-6507",
            "severity": "sev3",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-1744",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-3487",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          },
          {
            "incident": "ALERT-3284",
            "severity": "sev4",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          },
          {
            "incident": "ALERT-4289",
            "severity": "sev3",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          }
        ]
      },
      "Data Warehouse": {
        "slos": [
          {
            "name": "Mobile app crash rate",
            "ebPct": 69,
            "tier": "p0"
          },
          {
            "name": "API availability",
            "ebPct": 85,
            "tier": "p1"
          },
          {
            "name": "Checkout latency",
            "ebPct": 99,
            "tier": "p2"
          }
        ],
        "images": [
          {
            "name": "worker",
            "critical": 0,
            "high": 1,
            "medium": 1,
            "low": 10
          },
          {
            "name": "database",
            "critical": 0,
            "high": 0,
            "medium": 1,
            "low": 2
          },
          {
            "name": "scheduler",
            "critical": 0,
            "high": 1,
            "medium": 0,
            "low": 2
          },
          {
            "name": "auth-service",
            "critical": 0,
            "high": 1,
            "medium": 1,
            "low": 6
          }
        ],
        "tickets": [
          {
            "name": "BUG-4924",
            "priority": "p1"
          },
          {
            "name": "BUG-4028",
            "priority": "p2"
          },
          {
            "name": "BUG-2926",
            "priority": "p2"
          },
          {
            "name": "BUG-2564",
            "priority": "p0"
          },
          {
            "name": "BUG-8821",
            "priority": "p2"
          },
          {
            "name": "BUG-4739",
            "priority": "p2"
          },
          {
            "name": "BUG-5107",
            "priority": "p2"
          },
          {
            "name": "BUG-9621",
            "priority": "p1"
          },
          {
            "name": "BUG-2417",
            "priority": "p1"
          },
          {
            "name": "BUG-2204",
            "priority": "p1"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-3900",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-4244",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-9934",
            "severity": "sev1",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-3065",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          }
        ]
      },
      "ML Platform": {
        "slos": [
          {
            "name": "API availability",
            "ebPct": 59,
            "tier": "p0"
          },
          {
            "name": "Login success rate",
            "ebPct": 66,
            "tier": "p2"
          },
          {
            "name": "CDN response time",
            "ebPct": 52,
            "tier": "p0"
          },
          {
            "name": "Data sync latency",
            "ebPct": 53,
            "tier": "p2"
          },
          {
            "name": "Session creation time",
            "ebPct": 66,
            "tier": "p0"
          },
          {
            "name": "Payment processing time",
            "ebPct": 66,
            "tier": "p1"
          },
          {
            "name": "Order completion rate",
            "ebPct": 85,
            "tier": "p0"
          },
          {
            "name": "File upload success",
            "ebPct": 95,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "auth-service",
            "critical": 0,
            "high": 1,
            "medium": 0,
            "low": 7
          },
          {
            "name": "api-server",
            "critical": 0,
            "high": 0,
            "medium": 0,
            "low": 6
          },
          {
            "name": "cdn-origin",
            "critical": 0,
            "high": 0,
            "medium": 4,
            "low": 2
          },
          {
            "name": "gateway",
            "critical": 0,
            "high": 1,
            "medium": 4,
            "low": 11
          }
        ],
        "tickets": [
          {
            "name": "BUG-2601",
            "priority": "p1"
          },
          {
            "name": "BUG-2188",
            "priority": "p1"
          },
          {
            "name": "BUG-6667",
            "priority": "p0"
          },
          {
            "name": "BUG-6138",
            "priority": "p2"
          },
          {
            "name": "BUG-6817",
            "priority": "p0"
          },
          {
            "name": "BUG-7142",
            "priority": "p1"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-6773",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "No timeline documented"
          },
          {
            "incident": "ALERT-7618",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "Not completed within SLA"
          }
        ]
      },
      "Data Quality": {
        "slos": [
          {
            "name": "Session creation time",
            "ebPct": 45,
            "tier": "p1"
          },
          {
            "name": "Error rate",
            "ebPct": 18,
            "tier": "p0"
          },
          {
            "name": "API availability",
            "ebPct": 53,
            "tier": "p0"
          },
          {
            "name": "Batch job success rate",
            "ebPct": 50,
            "tier": "p0"
          },
          {
            "name": "Data sync latency",
            "ebPct": -11,
            "tier": "p1"
          }
        ],
        "images": [
          {
            "name": "proxy",
            "critical": 0,
            "high": 1,
            "medium": 9,
            "low": 16
          },
          {
            "name": "gateway",
            "critical": 0,
            "high": 1,
            "medium": 2,
            "low": 3
          },
          {
            "name": "notification-service",
            "critical": 1,
            "high": 0,
            "medium": 1,
            "low": 19
          },
          {
            "name": "backend",
            "critical": 1,
            "high": 4,
            "medium": 9,
            "low": 25
          }
        ],
        "tickets": [
          {
            "name": "BUG-1990",
            "priority": "p2"
          },
          {
            "name": "BUG-6394",
            "priority": "p2"
          },
          {
            "name": "BUG-2171",
            "priority": "p2"
          },
          {
            "name": "BUG-5281",
            "priority": "p1"
          },
          {
            "name": "BUG-6788",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-8576",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          },
          {
            "incident": "ALERT-2095",
            "severity": "sev3",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-6188",
            "severity": "sev4",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-3252",
            "severity": "sev3",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          }
        ]
      }
    }
  },
  "Mobile": {
    "teams": {
      "iOS": {
        "slos": [
          {
            "name": "Authentication latency",
            "ebPct": 42,
            "tier": "p2"
          },
          {
            "name": "Session creation time",
            "ebPct": -7,
            "tier": "p1"
          },
          {
            "name": "Login success rate",
            "ebPct": 27,
            "tier": "p0"
          },
          {
            "name": "File upload success",
            "ebPct": 18,
            "tier": "p1"
          },
          {
            "name": "Video transcoding rate",
            "ebPct": -16,
            "tier": "p1"
          },
          {
            "name": "Queue processing time",
            "ebPct": 57,
            "tier": "p0"
          },
          {
            "name": "Email delivery rate",
            "ebPct": 26,
            "tier": "p0"
          },
          {
            "name": "Report generation time",
            "ebPct": 45,
            "tier": "p2"
          }
        ],
        "images": [
          {
            "name": "worker",
            "critical": 1,
            "high": 3,
            "medium": 7,
            "low": 5
          },
          {
            "name": "frontend",
            "critical": 1,
            "high": 1,
            "medium": 6,
            "low": 25
          },
          {
            "name": "backend",
            "critical": 0,
            "high": 1,
            "medium": 7,
            "low": 9
          }
        ],
        "tickets": [
          {
            "name": "BUG-8247",
            "priority": "p1"
          },
          {
            "name": "BUG-7956",
            "priority": "p2"
          },
          {
            "name": "BUG-9477",
            "priority": "p1"
          },
          {
            "name": "BUG-7031",
            "priority": "p2"
          },
          {
            "name": "BUG-1390",
            "priority": "p1"
          },
          {
            "name": "BUG-7697",
            "priority": "p2"
          },
          {
            "name": "BUG-7698",
            "priority": "p0"
          },
          {
            "name": "BUG-4249",
            "priority": "p0"
          },
          {
            "name": "BUG-4616",
            "priority": "p2"
          },
          {
            "name": "BUG-7425",
            "priority": "p2"
          },
          {
            "name": "BUG-7362",
            "priority": "p1"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-9954",
            "severity": "sev4",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-6523",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          },
          {
            "incident": "ALERT-4957",
            "severity": "sev4",
            "problemType": "actions",
            "description": "Action items not assigned"
          }
        ]
      },
      "Android": {
        "slos": [
          {
            "name": "Authentication latency",
            "ebPct": 56,
            "tier": "p0"
          },
          {
            "name": "Login success rate",
            "ebPct": 6,
            "tier": "p0"
          },
          {
            "name": "Webhook delivery",
            "ebPct": 28,
            "tier": "p0"
          },
          {
            "name": "Error rate",
            "ebPct": 46,
            "tier": "p2"
          },
          {
            "name": "Data sync latency",
            "ebPct": 50,
            "tier": "p2"
          },
          {
            "name": "Notification delivery",
            "ebPct": -1,
            "tier": "p0"
          },
          {
            "name": "Video transcoding rate",
            "ebPct": 39,
            "tier": "p0"
          },
          {
            "name": "Database query latency",
            "ebPct": 6,
            "tier": "p1"
          }
        ],
        "images": [
          {
            "name": "scheduler",
            "critical": 1,
            "high": 1,
            "medium": 1,
            "low": 1
          },
          {
            "name": "cdn-origin",
            "critical": 1,
            "high": 1,
            "medium": 10,
            "low": 22
          },
          {
            "name": "payment-service",
            "critical": 1,
            "high": 0,
            "medium": 9,
            "low": 22
          },
          {
            "name": "cache",
            "critical": 0,
            "high": 3,
            "medium": 4,
            "low": 20
          }
        ],
        "tickets": [
          {
            "name": "BUG-6808",
            "priority": "p1"
          },
          {
            "name": "BUG-8244",
            "priority": "p1"
          },
          {
            "name": "BUG-1176",
            "priority": "p2"
          },
          {
            "name": "BUG-9524",
            "priority": "p2"
          },
          {
            "name": "BUG-7817",
            "priority": "p2"
          },
          {
            "name": "BUG-2974",
            "priority": "p0"
          },
          {
            "name": "BUG-6694",
            "priority": "p0"
          },
          {
            "name": "BUG-9326",
            "priority": "p2"
          },
          {
            "name": "BUG-1041",
            "priority": "p2"
          },
          {
            "name": "BUG-1632",
            "priority": "p2"
          },
          {
            "name": "BUG-2965",
            "priority": "p2"
          },
          {
            "name": "BUG-2211",
            "priority": "p1"
          },
          {
            "name": "BUG-9224",
            "priority": "p2"
          },
          {
            "name": "BUG-5756",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-4372",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-2047",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "No timeline documented"
          },
          {
            "incident": "ALERT-6227",
            "severity": "sev1",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-9020",
            "severity": "sev1",
            "problemType": "actions",
            "description": "Missing due dates"
          },
          {
            "incident": "ALERT-1765",
            "severity": "sev2",
            "problemType": "actions",
            "description": "Missing due dates"
          }
        ]
      },
      "React Native": {
        "slos": [
          {
            "name": "Error rate",
            "ebPct": 54,
            "tier": "p1"
          },
          {
            "name": "Queue processing time",
            "ebPct": 33,
            "tier": "p2"
          },
          {
            "name": "Report generation time",
            "ebPct": 47,
            "tier": "p1"
          },
          {
            "name": "Batch job success rate",
            "ebPct": 43,
            "tier": "p1"
          },
          {
            "name": "Payment processing time",
            "ebPct": -10,
            "tier": "p2"
          },
          {
            "name": "Search response time",
            "ebPct": -1,
            "tier": "p2"
          },
          {
            "name": "Page load time",
            "ebPct": 43,
            "tier": "p2"
          },
          {
            "name": "Login success rate",
            "ebPct": 53,
            "tier": "p0"
          }
        ],
        "images": [
          {
            "name": "api-server",
            "critical": 0,
            "high": 1,
            "medium": 9,
            "low": 11
          },
          {
            "name": "gateway",
            "critical": 0,
            "high": 1,
            "medium": 7,
            "low": 10
          },
          {
            "name": "worker",
            "critical": 1,
            "high": 3,
            "medium": 2,
            "low": 15
          },
          {
            "name": "cdn-origin",
            "critical": 0,
            "high": 1,
            "medium": 4,
            "low": 1
          }
        ],
        "tickets": [
          {
            "name": "BUG-1108",
            "priority": "p1"
          },
          {
            "name": "BUG-9179",
            "priority": "p1"
          },
          {
            "name": "BUG-7899",
            "priority": "p2"
          },
          {
            "name": "BUG-9689",
            "priority": "p2"
          },
          {
            "name": "BUG-8200",
            "priority": "p2"
          },
          {
            "name": "BUG-3155",
            "priority": "p2"
          },
          {
            "name": "BUG-1381",
            "priority": "p1"
          },
          {
            "name": "BUG-4021",
            "priority": "p0"
          },
          {
            "name": "BUG-9452",
            "priority": "p2"
          },
          {
            "name": "BUG-8376",
            "priority": "p2"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-1937",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "Missing root cause"
          },
          {
            "incident": "ALERT-3631",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-1386",
            "severity": "sev1",
            "problemType": "actions",
            "description": "Follow-up incomplete"
          },
          {
            "incident": "ALERT-9438",
            "severity": "sev1",
            "problemType": "actions",
            "description": "Action items not assigned"
          },
          {
            "incident": "ALERT-5087",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-7371",
            "severity": "sev2",
            "problemType": "postmortem",
            "description": "No lessons learned"
          }
        ]
      },
      "Mobile Backend": {
        "slos": [
          {
            "name": "Session creation time",
            "ebPct": 98,
            "tier": "p1"
          },
          {
            "name": "CDN response time",
            "ebPct": 90,
            "tier": "p2"
          },
          {
            "name": "Error rate",
            "ebPct": 73,
            "tier": "p2"
          }
        ],
        "images": [
          {
            "name": "proxy",
            "critical": 0,
            "high": 1,
            "medium": 0,
            "low": 7
          },
          {
            "name": "database",
            "critical": 0,
            "high": 1,
            "medium": 2,
            "low": 3
          },
          {
            "name": "frontend",
            "critical": 0,
            "high": 0,
            "medium": 3,
            "low": 10
          },
          {
            "name": "backend",
            "critical": 0,
            "high": 0,
            "medium": 2,
            "low": 5
          }
        ],
        "tickets": [
          {
            "name": "BUG-2273",
            "priority": "p1"
          },
          {
            "name": "BUG-2859",
            "priority": "p2"
          },
          {
            "name": "BUG-8242",
            "priority": "p2"
          },
          {
            "name": "BUG-7322",
            "priority": "p1"
          },
          {
            "name": "BUG-6898",
            "priority": "p1"
          },
          {
            "name": "BUG-7947",
            "priority": "p2"
          },
          {
            "name": "BUG-2341",
            "priority": "p1"
          },
          {
            "name": "BUG-8664",
            "priority": "p1"
          },
          {
            "name": "BUG-3603",
            "priority": "p0"
          },
          {
            "name": "BUG-2736",
            "priority": "p1"
          },
          {
            "name": "BUG-3919",
            "priority": "p2"
          },
          {
            "name": "BUG-3541",
            "priority": "p2"
          },
          {
            "name": "BUG-8158",
            "priority": "p2"
          },
          {
            "name": "BUG-9493",
            "priority": "p0"
          },
          {
            "name": "BUG-3547",
            "priority": "p1"
          }
        ],
        "problems": [
          {
            "incident": "ALERT-7984",
            "severity": "sev4",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-3217",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-3198",
            "severity": "sev2",
            "problemType": "metadata",
            "description": "Impact scope unclear"
          },
          {
            "incident": "ALERT-8784",
            "severity": "sev4",
            "problemType": "metadata",
            "description": "Detection time not recorded"
          },
          {
            "incident": "ALERT-4182",
            "severity": "sev1",
            "problemType": "postmortem",
            "description": "No lessons learned"
          },
          {
            "incident": "ALERT-1825",
            "severity": "sev2",
            "problemType": "postmortem",
            "description": "Missing root cause"
          }
        ]
      }
    }
  }
};

// Organization hierarchy - matches dashboard.html
// Each leaf team has fixed ownership information
// Root-level ownership for R&D
const rootOwnership = {
  engineeringManager: 'Victoria Sterling',
  productManager: 'Marcus Webb',
  reliabilityDRI: 'Elena Vasquez'
};

const organizationHierarchy = {
  'Applications': {
    name: 'Applications',
    ownership: { engineeringManager: 'Jonathan Blake', productManager: 'Rebecca Foster', reliabilityDRI: 'Derek Chang' },
    teams: {
      'Frontend': { 
        name: 'Frontend',
        ownership: { engineeringManager: 'Sarah Chen', productManager: 'Michael Rodriguez', reliabilityDRI: 'Alex Kim' }
      },
      'Backend API': {
        name: 'Backend API',
        ownership: { engineeringManager: 'Nathan Cross', productManager: 'Diana Reyes', reliabilityDRI: 'Adrian Cole' },
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
    ownership: { engineeringManager: 'Gregory Thornton', productManager: 'Alicia Monroe', reliabilityDRI: 'Felix Huang' },
    teams: {
      'Cloud Platform': {
        name: 'Cloud Platform',
        ownership: { engineeringManager: 'Kenneth Pearson', productManager: 'Jasmine Okonkwo', reliabilityDRI: 'Liam Fitzgerald' },
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
    ownership: { engineeringManager: 'Samantha Pierce', productManager: 'Brandon Hayes', reliabilityDRI: 'Nadia Kuznetsova' },
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
    ownership: { engineeringManager: 'Douglas Freeman', productManager: 'Cynthia Morales', reliabilityDRI: 'Ivan Petrov' },
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
    ownership: { engineeringManager: 'Howard Lin', productManager: 'Melissa Crawford', reliabilityDRI: 'Tanya Volkov' },
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
    ownership: { engineeringManager: 'Raymond Burke', productManager: 'Angela Simmons', reliabilityDRI: 'Oscar Delgado' },
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

// Get default data (either custom DEFAULT_MOCK_DATA or generated)
function getDefaultMockData() {
  if (DEFAULT_MOCK_DATA !== null) {
    // Use custom default data - deep clone to avoid mutations
    return JSON.parse(JSON.stringify(DEFAULT_MOCK_DATA));
  }
  // Fall back to randomly generated data
  return generateAllMockData();
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
  // Fall back to defaults (custom or generated)
  const defaultData = getDefaultMockData();
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

// Reset mock data to defaults (custom DEFAULT_MOCK_DATA or generated)
function resetMockData() {
  const data = getDefaultMockData();
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
    rootOwnership,
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
    rootOwnership,
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
