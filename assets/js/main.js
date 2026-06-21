

(function () {
  "use strict";

  /* ============================================
     DOM ELEMENTS
  ============================================ */

  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  const navOverlay = document.querySelector(".nav-overlay");
  const mobileClose = document.querySelector(".mobile-nav-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
  const scrollTopBtn = document.querySelector(".scroll-top");
  const loadingScreen = document.querySelector(".loading-screen");

  /* ============================================
     LOADING SCREEN
  ============================================ */

  function hideLoadingScreen() {
    if (loadingScreen) {
      loadingScreen.classList.add("loaded");
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 100);
    }
  }

  window.addEventListener("load", () => {
    setTimeout(hideLoadingScreen, 200);
  });

  setTimeout(hideLoadingScreen, 1500);

  /* ============================================
     NAVBAR SCROLL EFFECT
  ============================================ */

  function handleNavbarScroll() {
    const scrollY = window.scrollY;
    const threshold = 50;

    if (scrollY > threshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();

  /* ============================================
     MOBILE NAVIGATION DRAWER
  ============================================ */

  function openMobileMenu() {
    mobileDrawer.classList.add("active");
    navOverlay.classList.add("active");
    hamburger.classList.add("active");
    navbar.classList.add("menu-open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove("active");
    navOverlay.classList.remove("active");
    hamburger.classList.remove("active");
    navbar.classList.remove("menu-open");
    document.body.style.overflow = "";
  }

  function toggleMobileMenu() {
    if (mobileDrawer.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  // Close button
  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileMenu);
  }

  // Overlay click
  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileMenu);
  }

  // Link clicks
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // Prevent body scroll when menu is open
  mobileDrawer.addEventListener("touchmove", (e) => {
    if (mobileDrawer.classList.contains("active")) {
      e.stopPropagation();
    }
  });

  /* ============================================
     SCROLL TO TOP BUTTON
  ============================================ */

  function handleScrollTop() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScrollTop);

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* ============================================
     SMOOTH SCROLL
  ============================================ */

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  /* ============================================
     FORM HANDLING
  ============================================ */

  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      let isValid = true;
      const inputs = this.querySelectorAll("input[required], textarea[required]");

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (isValid) {
        console.log("Form submitted:", data);
        showNotification("Thank you! Your message has been sent.", "success");
        this.reset();
      } else {
        showNotification("Please fill in all required fields.", "error");
      }
    });
  });

  /* ============================================
     NOTIFICATION SYSTEM
  ============================================ */

  function showNotification(message, type = "info") {
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;

    notification.innerHTML = `
      <span class="notification-icon">
        ${type === "success" ? "&#10003;" : type === "error" ? "&#10007;" : "&#9432;"}
      </span>
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 16px 20px;
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 9999;
      max-width: 400px;
      animation: slideIn 0.3s ease;
    `;

    if (type === "success") {
      notification.style.background = "#10b981";
    } else if (type === "error") {
      notification.style.background = "#ef4444";
    } else {
      notification.style.background = "#3b82f6";
    }

    document.body.appendChild(notification);

    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      notification.remove();
    });

    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  /* ============================================
     NEWSLETTER FORM
  ============================================ */

  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email && isValidEmail(email)) {
        console.log("Newsletter subscription:", email);
        showNotification("Thank you for subscribing!", "success");
        emailInput.value = "";
      } else {
        showNotification("Please enter a valid email address.", "error");
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ============================================
     DOM READY
  ============================================ */

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
    handleNavbarScroll();
    handleScrollTop();
  });

  /* ============================================
     GLOBAL FUNCTIONS
  ============================================ */

  window.AgencyTheme = {
    openMobileMenu,
    closeMobileMenu,
    showNotification,
    scrollToTop: () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  };

})();