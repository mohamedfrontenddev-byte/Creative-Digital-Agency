

(function() {
  'use strict';

  // =================
  // Dark Mode Manager
  // ===========
  const DarkModeManager = {
    STORAGE_KEY: 'agency-theme-preference',
    THEME_ATTRIBUTE: 'data-theme',
    
    // Initialize
    init() {
      this.loadPreference();
      this.createToggleButton();
      this.setupListeners();
      this.watchSystemPreference();
    },

    // Load saved preference or detect system preference
    loadPreference() {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      
      if (saved) {
        this.setTheme(saved);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(prefersDark ? 'dark' : 'light');
      }
    },

    // Set theme
    setTheme(theme) {
      document.documentElement.setAttribute(this.THEME_ATTRIBUTE, theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
      
      // Update toggle button state
      this.updateToggleButton(theme);
      
      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    },

    // Get current theme
    getTheme() {
      return document.documentElement.getAttribute(this.THEME_ATTRIBUTE) || 'light';
    },

    // Toggle theme
    toggle() {
      const current = this.getTheme();
      const next = current === 'light' ? 'dark' : 'light';
      this.setTheme(next);
    },

    // Create toggle button
    createToggleButton() {
      // Check if button already exists
      let toggleBtn = document.querySelector('.theme-toggle');
      
      if (!toggleBtn) {
        // Create the toggle button
        toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
        toggleBtn.innerHTML = this.getToggleIcon('light');
        
        // Add styles
        this.injectStyles();
        
        // Append to body or navbar
        const navbarActions = document.querySelector('.navbar-actions');
        if (navbarActions) {
          navbarActions.insertBefore(toggleBtn, navbarActions.firstChild);
        } else {
          document.body.appendChild(toggleBtn);
        }
      }

      this.toggleBtn = toggleBtn;
      this.updateToggleButton(this.getTheme());
    },

    // Get toggle icon HTML
    getToggleIcon(theme) {
      if (theme === 'dark') {
        // Sun icon for dark mode (click to go light)
        return `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        `;
      } else {
        // Moon icon for light mode (click to go dark)
        return `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        `;
      }
    },

    // Update toggle button appearance
    updateToggleButton(theme) {
      if (this.toggleBtn) {
        this.toggleBtn.innerHTML = this.getToggleIcon(theme);
        this.toggleBtn.classList.toggle('dark', theme === 'dark');
      }
    },

    // Setup event listeners
    setupListeners() {
      if (this.toggleBtn) {
        this.toggleBtn.addEventListener('click', () => this.toggle());
      }

      // Listen for theme changes from other sources
      window.addEventListener('storage', (e) => {
        if (e.key === this.STORAGE_KEY) {
          this.setTheme(e.newValue);
        }
      });
    },

    // Watch for system preference changes
    watchSystemPreference() {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    },

    
    injectStyles() {
      if (document.getElementById('theme-toggle-styles')) return;

      const styles = document.createElement('style');
      styles.id = 'theme-toggle-styles';
      styles.textContent = `
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          background: var(--bg-tertiary);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text-primary);
        }

        .theme-toggle:hover {
          background: var(--color-primary);
          color: white;
          transform: rotate(15deg);
        }

        .theme-toggle.dark {
          background: var(--color-gray-700);
        }

        .theme-toggle svg {
          transition: transform 0.3s ease;
        }

        .theme-toggle:hover svg {
          transform: rotate(180deg);
        }

        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .theme-toggle,
          .theme-toggle:hover,
          .theme-toggle svg {
            transition: none;
          }
        }
      `;
      document.head.appendChild(styles);
    }
  };

  // ===============
  // Initialize
  // =============
  document.addEventListener('DOMContentLoaded', () => {
    DarkModeManager.init();
  });

  
  window.DarkModeManager = DarkModeManager;

})();
