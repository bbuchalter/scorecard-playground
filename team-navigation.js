// Team Navigation Module
// Unified team selection logic with URL state and localStorage persistence

(function() {
  const STORAGE_KEY = 'selectedTeamPath';
  const URL_PARAM = 'team';

  /**
   * Get the current team path from URL
   * @returns {Array|null} Team path array or null if not in URL
   */
  function getPathFromUrl() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const teamParam = urlParams.get(URL_PARAM);
      if (teamParam) {
        const path = JSON.parse(decodeURIComponent(teamParam));
        if (Array.isArray(path)) {
          return path;
        }
      }
    } catch (e) {
      // Invalid JSON, ignore
    }
    return null;
  }

  /**
   * Get the current team path from localStorage
   * @returns {Array|null} Team path array or null if not stored
   */
  function getPathFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const path = JSON.parse(saved);
        if (Array.isArray(path)) {
          return path;
        }
      }
    } catch (e) {
      // Invalid JSON or storage error, ignore
    }
    return null;
  }

  /**
   * Get the initial team path (URL takes precedence, then localStorage)
   * @returns {Array} Team path array (empty array if nothing found)
   */
  function getInitialPath() {
    return getPathFromUrl() || getPathFromStorage() || [];
  }

  /**
   * Save team path to localStorage
   * @param {Array} path - Team path array
   */
  function saveToStorage(path) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(path));
    } catch (e) {
      // Ignore storage errors
    }
  }

  /**
   * Update the URL with the team path
   * @param {Array} path - Team path array
   * @param {boolean} pushState - Whether to push (true) or replace (false) history state
   */
  function updateUrl(path, pushState = true) {
    const url = new URL(window.location);
    
    if (path && path.length > 0) {
      url.searchParams.set(URL_PARAM, JSON.stringify(path));
    } else {
      url.searchParams.delete(URL_PARAM);
    }
    
    if (pushState) {
      history.pushState({ teamPath: path }, '', url);
    } else {
      history.replaceState({ teamPath: path }, '', url);
    }
  }

  /**
   * Navigate to a team path (updates URL, localStorage, and triggers callback)
   * @param {Array} path - Team path array
   * @param {Function} onNavigate - Callback function called with the path
   * @param {boolean} pushState - Whether to push history state (default true)
   */
  function navigateTo(path, onNavigate, pushState = true) {
    updateUrl(path, pushState);
    saveToStorage(path);
    if (onNavigate) {
      onNavigate(path);
    }
  }

  /**
   * Initialize team navigation with popstate handling
   * @param {Function} onNavigate - Callback function called when navigation occurs
   * @returns {Array} Initial team path
   */
  function init(onNavigate) {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
      let path = [];
      
      if (event.state && event.state.teamPath !== undefined) {
        path = event.state.teamPath;
      } else {
        // Parse from URL if no state
        path = getPathFromUrl() || [];
      }
      
      saveToStorage(path);
      if (onNavigate) {
        onNavigate(path);
      }
    });

    // Get initial path and set up initial state
    const initialPath = getInitialPath();
    
    // Save to storage and set initial history state
    saveToStorage(initialPath);
    updateUrl(initialPath, false);
    
    return initialPath;
  }

  /**
   * Find team index in a teams array by path
   * @param {Array} teams - Array of team objects with path property
   * @param {Array} targetPath - Path to find
   * @returns {number} Index or -1 if not found
   */
  function findTeamIndex(teams, targetPath) {
    if (!targetPath || targetPath.length === 0) return -1;
    
    return teams.findIndex(team => {
      if (!team.path || team.path.length !== targetPath.length) return false;
      return team.path.every((segment, i) => segment === targetPath[i]);
    });
  }

  // Export for use in other modules
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      getPathFromUrl,
      getPathFromStorage,
      getInitialPath,
      saveToStorage,
      updateUrl,
      navigateTo,
      init,
      findTeamIndex
    };
  }

  // Also expose globally for direct script tag usage
  if (typeof window !== 'undefined') {
    window.TeamNavigation = {
      getPathFromUrl,
      getPathFromStorage,
      getInitialPath,
      saveToStorage,
      updateUrl,
      navigateTo,
      init,
      findTeamIndex
    };
  }
})();
