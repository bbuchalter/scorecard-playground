// Scorecard Configuration Module
// Global configuration for scoring all teams across the organization

(function() {
const SCORECARD_CONFIG_KEY = "scorecard-config";

// Normalization method definitions (shared across all categories)
const normMethods = {
  exponential: {
    name: "Exponential decay",
    calc: (count, params) => Math.pow(params.decay, count),
    formula: (params) => `sᵢ = ${params.decay}^count`,
    examples: (params) => {
      const d = params.decay;
      return `0 → 1.00, 1 → ${(Math.pow(d, 1)).toFixed(2)}, 3 → ${(Math.pow(d, 3)).toFixed(2)}, 5 → ${(Math.pow(d, 5)).toFixed(2)}, 10 → ${(Math.pow(d, 10)).toFixed(2)}`;
    }
  },
  linear: {
    name: "Linear threshold",
    calc: (count, params) => Math.max(0, 1 - count / params.threshold),
    formula: (params) => `sᵢ = max(0, 1 - count / ${params.threshold})`,
    examples: (params) => {
      const t = params.threshold;
      return `0 → 1.00, ${Math.floor(t / 2)} → ${(0.5).toFixed(2)}, ${t} → 0.00, ${t + 5} → 0.00`;
    }
  },
  inverse: {
    name: "Inverse (hyperbolic)",
    calc: (count, params) => 1 / (1 + params.k * count),
    formula: (params) => `sᵢ = 1 / (1 + ${params.k} × count)`,
    examples: (params) => {
      const k = params.k;
      const f = c => 1 / (1 + k * c);
      return `0 → 1.00, 1 → ${f(1).toFixed(2)}, 3 → ${f(3).toFixed(2)}, 5 → ${f(5).toFixed(2)}, 10 → ${f(10).toFixed(2)}`;
    }
  },
  logarithmic: {
    name: "Logarithmic",
    calc: (count, params) => Math.max(0, 1 - Math.log(1 + count) / Math.log(1 + params.maxExpected)),
    formula: (params) => `sᵢ = max(0, 1 - log(1+count) / log(1+${params.maxExpected}))`,
    examples: (params) => {
      const m = params.maxExpected;
      const f = c => Math.max(0, 1 - Math.log(1 + c) / Math.log(1 + m));
      return `0 → 1.00, 1 → ${f(1).toFixed(2)}, 5 → ${f(5).toFixed(2)}, ${m} → 0.00`;
    }
  },
  sigmoid: {
    name: "Sigmoid (S-curve)",
    calc: (count, params) => 1 / (1 + Math.exp(params.steepness * (count - params.midpoint))),
    formula: (params) => `sᵢ = 1 / (1 + e^(${params.steepness} × (count - ${params.midpoint})))`,
    examples: (params) => {
      const f = c => 1 / (1 + Math.exp(params.steepness * (c - params.midpoint)));
      return `0 → ${f(0).toFixed(2)}, ${params.midpoint} → 0.50, ${params.midpoint * 2} → ${f(params.midpoint * 2).toFixed(2)}`;
    }
  },
  bucket: {
    name: "Bucket / Step function",
    calc: (count, params) => {
      const buckets = params.buckets; // [[threshold, score], ...]
      let score = 1.0;
      for (const [thresh, s] of buckets) {
        if (count >= thresh) score = s;
      }
      return score;
    },
    formula: (params) => `Step function with ${params.buckets.length} buckets`,
    examples: (params) => {
      return params.buckets.map(([t, s]) => `${t}+ → ${s.toFixed(2)}`).join(", ");
    }
  }
};

// Default configuration
const defaultConfig = () => ({
  slo: {
    pointBudget: 35,
    tierWeights: { p0: 2.0, p1: 1.0, p2: 0.5 },
    method: "exponential",
    params: {
      exponential: { decay: 0.85 },
      linear: { threshold: 10 },
      inverse: { k: 1.0 },
      logarithmic: { maxExpected: 20 },
      sigmoid: { midpoint: 5, steepness: 1.0 },
      bucket: { buckets: [[0, 1.0], [1, 0.8], [3, 0.5], [6, 0.2], [11, 0.0]] }
    }
  },
  vuln: {
    budget: 30,
    weights: { critical: 4.0, high: 2.0, medium: 1.0, low: 0.5 },
    method: "exponential",
    params: {
      exponential: { decay: 0.85 },
      linear: { threshold: 10 },
      inverse: { k: 1.0 },
      logarithmic: { maxExpected: 20 },
      sigmoid: { midpoint: 5, steepness: 1.0 },
      bucket: { buckets: [[0, 1.0], [1, 0.8], [3, 0.5], [6, 0.2], [11, 0.0]] }
    }
  },
  bug: {
    budget: 20,
    weights: { p0: 4.0, p1: 2.0, p2: 1.0 },
    method: "exponential",
    params: {
      exponential: { decay: 0.85 },
      linear: { threshold: 10 },
      inverse: { k: 1.0 },
      logarithmic: { maxExpected: 20 },
      sigmoid: { midpoint: 5, steepness: 1.0 },
      bucket: { buckets: [[0, 1.0], [1, 0.8], [3, 0.5], [6, 0.2], [11, 0.0]] }
    }
  },
  pm: {
    budget: 15,
    severityWeights: { sev1: 4.0, sev2: 2.0, sev3: 1.0, sev4: 0.5 },
    typeWeights: { postmortem: 3.0, actions: 2.0, metadata: 1.0 },
    method: "exponential",
    params: {
      exponential: { decay: 0.85 },
      linear: { threshold: 10 },
      inverse: { k: 1.0 },
      logarithmic: { maxExpected: 20 },
      sigmoid: { midpoint: 5, steepness: 1.0 },
      bucket: { buckets: [[0, 1.0], [1, 0.8], [3, 0.5], [6, 0.2], [11, 0.0]] }
    }
  }
});

// Load configuration from localStorage
function loadConfig() {
  try {
    const saved = localStorage.getItem(SCORECARD_CONFIG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with defaults to handle any new fields
      const defaults = defaultConfig();
      return {
        slo: { ...defaults.slo, ...parsed.slo },
        vuln: { ...defaults.vuln, ...parsed.vuln },
        bug: { ...defaults.bug, ...parsed.bug },
        pm: { ...defaults.pm, ...parsed.pm }
      };
    }
  } catch (e) {
    console.warn("Could not load config from localStorage:", e);
  }
  return defaultConfig();
}

// Save configuration to localStorage
function saveConfig(config) {
  try {
    localStorage.setItem(SCORECARD_CONFIG_KEY, JSON.stringify(config));
    return true;
  } catch (e) {
    console.error("Could not save config to localStorage:", e);
    return false;
  }
}

// Reset configuration to defaults
function resetConfig() {
  const config = defaultConfig();
  saveConfig(config);
  return config;
}

// Get configuration for a specific category
function getCategoryConfig(category) {
  const config = loadConfig();
  return config[category];
}

// Update configuration for a specific category
function updateCategoryConfig(category, updates) {
  const config = loadConfig();
  config[category] = { ...config[category], ...updates };
  saveConfig(config);
  return config;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    normMethods,
    defaultConfig,
    loadConfig,
    saveConfig,
    resetConfig,
    getCategoryConfig,
    updateCategoryConfig
  };
}

// Also expose globally for direct script tag usage
if (typeof window !== 'undefined') {
  window.ScorecardConfig = {
    normMethods,
    defaultConfig,
    loadConfig,
    saveConfig,
    resetConfig,
    getCategoryConfig,
    updateCategoryConfig
  };
}
})();
