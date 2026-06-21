

(function() {
  'use strict';

  const Animations = {

    config: {
      revealElements: '.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate',
      staggerContainers: '.reveal-stagger, .stagger-children',
      counters: '.counter',
      parallaxElements: '.parallax',
      animationThreshold: 100, // pixels from viewport
      staggerDelay: 100 // ms between staggered items
    },

    // Initialize
    init() {
      this.setupRevealAnimations();
      this.setupCounters();
      this.setupParallax();
      this.setupHoverAnimations();
    },

    // ============================================
    // Scroll Reveal Animations
    // ============================================
    setupRevealAnimations() {
      const reveals = document.querySelectorAll(this.config.revealElements);
      const staggers = document.querySelectorAll(this.config.staggerContainers);

      if (!reveals.length && !staggers.length) return;

      // Add base styles
      this.injectRevealStyles();

      // Check if IntersectionObserver is supported
      if ('IntersectionObserver' in window) {
        // Reveal elements
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              // Optional: unobserve after animation
              // revealObserver.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(el => revealObserver.observe(el));

        // Stagger containers
        const staggerObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              staggerObserver.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1
        });

        staggers.forEach(el => staggerObserver.observe(el));
      } else {
        // Fallback: show all elements immediately
        reveals.forEach(el => el.classList.add('active'));
        staggers.forEach(el => el.classList.add('active'));
      }
    },

    // ============================================
    // Counter Animations
    // ============================================
    setupCounters() {
      const counters = document.querySelectorAll(this.config.counters);
      
      if (!counters.length) return;

      if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.5
        });

        counters.forEach(counter => {
          // Store final value as data attribute
          counter.dataset.target = counter.textContent.replace(/[^0-9]/g, '');
          counter.textContent = '0';
          counterObserver.observe(counter);
        });
      } else {
        // Fallback: show final values
        counters.forEach(counter => {
          counter.textContent = counter.dataset.target;
        });
      }
    },

    animateCounter(element) {
      const target = parseInt(element.dataset.target);
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          element.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target;
        }
      };

      updateCounter();
    },

    // ============================================
    // Parallax Effects
    // ============================================
    setupParallax() {
      const parallaxElements = document.querySelectorAll(this.config.parallaxElements);
      
      if (!parallaxElements.length) return;

      // Check if device supports hover (no parallax on touch)
      if (window.matchMedia('(hover: none)').matches) return;

      let ticking = false;

      const updateParallax = () => {
        parallaxElements.forEach(el => {
          const bg = el.querySelector('.parallax-bg');
          if (!bg) return;

          const rect = el.getBoundingClientRect();
          const scrollY = window.scrollY;
          const speed = el.dataset.parallaxSpeed || 0.5;

          // Only animate if in viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = (scrollY - el.offsetTop) * speed;
            bg.style.transform = `translateY(${yPos}px)`;
          }
        });

        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      });
    },

    // ============================================
    // Hover Animations
    // ============================================
    setupHoverAnimations() {
      // Add 3D tilt effect to cards
      const tiltCards = document.querySelectorAll('.tilt-effect');
      
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;
          
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
      });

      // Magnetic button effect
      const magneticBtns = document.querySelectorAll('.magnetic-effect');
      
      magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate(0, 0)';
        });
      });
    },

    // ============================================
    // Reveal Styles
    // ============================================
    injectRevealStyles() {
      if (document.getElementById('animations-reveal-styles')) return;

      const styles = document.createElement('style');
      styles.id = 'animations-reveal-styles';
      styles.textContent = `
        /* Counter animation styles */
        .counter {
          display: inline-block;
          font-variant-numeric: tabular-nums;
        }

        /* Parallax container */
        .parallax {
          position: relative;
          overflow: hidden;
        }

        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          will-change: transform;
          z-index: -1;
        }

        /* Tilt effect */
        .tilt-effect {
          transition: transform 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }

        /* Magnetic effect */
        .magnetic-effect {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .reveal,
          .reveal-up,
          .reveal-down,
          .reveal-left,
          .reveal-right,
          .reveal-scale,
          .reveal-rotate,
          .reveal-stagger,
          .reveal-stagger > *,
          .stagger-children,
          .stagger-children > * {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .counter::before {
            display: none;
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
    Animations.init();
  });

  // Expose to global scope
  window.Animations = Animations;

})();
