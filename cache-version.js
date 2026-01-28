// Cache Version Module
// Manages localStorage cache invalidation based on version bumps
// Also handles versioned script loading - bump CACHE_VERSION to bust all caches

(function() {
  // ==========================================
  // BUMP THIS VERSION TO CLEAR ALL CACHES
  // (localStorage AND browser script caches)
  // ==========================================
  const CACHE_VERSION = '1.0.5';
  
  const VERSION_KEY = 'scorecard-cache-version';
  
  // Keys that will be cleared on version bump
  const CACHE_KEYS = [
    'scorecard-config',
    'scorecard-mock-data',
    'selectedTeamPath'
  ];

  /**
   * Check if cache needs to be invalidated and clear if necessary
   * @returns {boolean} true if cache was cleared
   */
  function checkAndInvalidateCache() {
    try {
      const storedVersion = localStorage.getItem(VERSION_KEY);
      
      if (storedVersion !== CACHE_VERSION) {
        console.log(`Cache version mismatch: ${storedVersion} → ${CACHE_VERSION}. Clearing cached data.`);
        clearCache();
        localStorage.setItem(VERSION_KEY, CACHE_VERSION);
        return true;
      }
      
      return false;
    } catch (e) {
      console.warn('Could not check cache version:', e);
      return false;
    }
  }

  /**
   * Clear all scorecard-related localStorage keys
   */
  function clearCache() {
    CACHE_KEYS.forEach(key => {
      try {
        localStorage.removeItem(key);
        console.log(`Cleared localStorage key: ${key}`);
      } catch (e) {
        console.warn(`Could not clear ${key}:`, e);
      }
    });
  }

  /**
   * Get the current cache version
   * @returns {string} Current version
   */
  function getVersion() {
    return CACHE_VERSION;
  }

  /**
   * Get the stored cache version
   * @returns {string|null} Stored version or null if not set
   */
  function getStoredVersion() {
    try {
      return localStorage.getItem(VERSION_KEY);
    } catch (e) {
      return null;
    }
  }

  /**
   * Load scripts with the current cache version appended as query string.
   * Uses document.write for synchronous loading during page parse.
   * @param {string[]} scripts - Array of script paths to load
   */
  function loadScripts(scripts) {
    scripts.forEach(src => {
      document.write(`<script src="${src}?v=${CACHE_VERSION}"><\/script>`);
    });
  }

  // Run cache check immediately when script loads
  checkAndInvalidateCache();

  // Export for use in other modules
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      CACHE_VERSION,
      checkAndInvalidateCache,
      clearCache,
      getVersion,
      getStoredVersion,
      loadScripts
    };
  }

  // Also expose globally for direct script tag usage
  if (typeof window !== 'undefined') {
    window.CacheVersion = {
      version: CACHE_VERSION,
      checkAndInvalidateCache,
      clearCache,
      getVersion,
      getStoredVersion,
      loadScripts
    };
  }
})();
