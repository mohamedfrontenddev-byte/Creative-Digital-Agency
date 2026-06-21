

(function() {
  'use strict';

  const Portfolio = {
    // Configuration
    config: {
      filterButtons: '.portfolio-filters button',
      portfolioItems: '.portfolio-grid .portfolio-item',
      modal: '.portfolio-modal',
      modalContent: '.modal-content'
    },

    // Initialize
    init() {
      this.cacheElements();
      if (this.filterButtons.length) {
        this.setupFilters();
      }
      if (this.portfolioItems.length) {
        this.setupLightbox();
        this.setupLazyLoading();
      }
    },

    // Cache DOM elements
    cacheElements() {
      this.filterButtons = document.querySelectorAll(this.config.filterButtons);
      this.portfolioItems = document.querySelectorAll(this.config.portfolioItems);
      this.modal = document.querySelector(this.config.modal);
      this.modalContent = this.modal ? this.modal.querySelector('.modal-body') : null;
    },

    // ============================================
    // Portfolio Filters
    // ============================================
    setupFilters() {
      this.filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          this.handleFilterClick(button);
        });
      });
    },

    handleFilterClick(button) {
      // Update active button
      this.filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Get filter category
      const filter = button.dataset.filter;

      // Filter items
      this.filterItems(filter);
    },

    filterItems(filter) {
      this.portfolioItems.forEach(item => {
        const categories = item.dataset.categories ? item.dataset.categories.split(' ') : [];
        
        if (filter === 'all' || categories.includes(filter)) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          item.classList.add('hidden');
          item.style.animation = '';
        }
      });

      // Update grid layout
      this.updateGridLayout();
    },

    updateGridLayout() {
      const grid = document.querySelector('.portfolio-grid');
      if (grid) {
        grid.style.display = 'none';
        // Trigger reflow
        grid.offsetHeight;
        grid.style.display = '';
      }
    },

    // ============================================
    // Lightbox Modal
    // ============================================
    setupLightbox() {
      this.portfolioItems.forEach(item => {
        const link = item.querySelector('.portfolio-link') || item.querySelector('a');
        
        if (link) {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModal(item);
          });
        }

        // Click on image to open
        const image = item.querySelector('.portfolio-image img');
        if (image) {
          image.style.cursor = 'pointer';
          image.addEventListener('click', () => {
            this.openModal(item);
          });
        }
      });

      // Close modal handlers
      this.setupModalClose();
    },

    openModal(item) {
      if (!this.modal) return;

      const title = item.dataset.title || item.querySelector('.portfolio-title')?.textContent || '';
      const category = item.dataset.category || item.querySelector('.portfolio-category')?.textContent || '';
      const description = item.dataset.description || item.querySelector('.portfolio-description')?.textContent || '';
      const imageSrc = item.dataset.image || item.querySelector('.portfolio-image img')?.src || '';
      const client = item.dataset.client || '';
      const date = item.dataset.date || '';
      const link = item.dataset.link || '#';

      // Build modal content
      const content = `
        <div class="modal-media">
          <img src="${imageSrc}" alt="${title}" loading="lazy">
        </div>
        <div class="modal-details">
          <span class="modal-category">${category}</span>
          <h3 class="modal-title">${title}</h3>
          <p class="modal-description">${description}</p>
          <div class="modal-meta">
            ${client ? `<div class="meta-item"><strong>Client:</strong> ${client}</div>` : ''}
            ${date ? `<div class="meta-item"><strong>Date:</strong> ${date}</div>` : ''}
          </div>
          <a href="${link}" class="btn btn-primary modal-link" target="_blank" rel="noopener">
            View Project <span>&rarr;</span>
          </a>
        </div>
      `;

      if (this.modalContent) {
        this.modalContent.innerHTML = content;
      }

      // Show modal
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Inject modal styles if not already
      this.injectModalStyles();
    },

    closeModal() {
      if (this.modal) {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    },

    setupModalClose() {
      if (!this.modal) return;

      // Close button
      const closeBtn = this.modal.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closeModal());
      }

      // Click outside to close
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });

      // Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('active')) {
          this.closeModal();
        }
      });
    },

    // ============================================
    // Lazy Loading for Images
    // ============================================
    setupLazyLoading() {
      const images = document.querySelectorAll('.portfolio-image img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.classList.add('loaded');
              observer.unobserve(img);
            }
          });
        });

        images.forEach(img => {
          img.classList.add('lazy');
          imageObserver.observe(img);
        });
      }
    },

    // ============================================
    // Modal Styles
    // ============================================
    injectModalStyles() {
      if (document.getElementById('portfolio-modal-styles')) return;

      const styles = document.createElement('style');
      styles.id = 'portfolio-modal-styles';
      styles.textContent = `
        .portfolio-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          padding: 20px;
        }

        .portfolio-modal.active {
          opacity: 1;
          visibility: visible;
        }

        .portfolio-modal .modal-body {
          background: var(--bg-primary);
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }

        .portfolio-modal.active .modal-body {
          transform: scale(1);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: white;
          border: none;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .modal-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px 0 0 16px;
        }

        .modal-details {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .modal-category {
          color: var(--color-primary);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .modal-title {
          font-size: 28px;
          margin-bottom: 16px;
          color: var(--text-heading);
        }

        .modal-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .modal-meta {
          margin-bottom: 24px;
        }

        .meta-item {
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .meta-item strong {
          color: var(--text-primary);
        }

        .modal-link {
          align-self: flex-start;
        }

        /* Hidden state */
        .portfolio-item.hidden {
          display: none;
        }

        /* Lazy load state */
        .portfolio-image img.lazy {
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .portfolio-image img.loaded {
          opacity: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .portfolio-modal .modal-body {
            grid-template-columns: 1fr;
          }

          .modal-media img {
            border-radius: 16px 16px 0 0;
            max-height: 250px;
          }

          .modal-details {
            padding: 24px;
          }

          .modal-title {
            font-size: 22px;
          }
        }
      `;
      document.head.appendChild(styles);
    }
  };

  // ============================================
  // Initialize
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    Portfolio.init();
  });

  // Expose to global scope
  window.Portfolio = Portfolio;

})();
