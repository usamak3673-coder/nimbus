/* =========================================================
   NIMBUS — SAAS LANDING PAGE SCRIPTS
   Vanilla JS only — no frameworks/dependencies
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. MOBILE NAVIGATION TOGGLE ---------- */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isActive = nav.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isActive);
    });

    // Close mobile menu when a nav link is clicked
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. SMOOTH SCROLLING FOR ANCHOR LINKS ---------- */
  var headerHeight = document.querySelector('.site-header')
    ? document.querySelector('.site-header').offsetHeight
    : 0;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 1;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  /* ---------- 3. STICKY HEADER SHADOW ON SCROLL ---------- */
  var header = document.getElementById('header');

  function handleHeaderScroll() {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 20px rgba(20, 19, 43, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  if (header) {
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();
  }

  /* ---------- 4. SCROLL REVEAL ANIMATIONS ---------- */
  var animatedEls = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window && animatedEls.length) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger items inside the same grid slightly for a nicer effect
          var delay = entry.target.dataset.delay || 0;
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    animatedEls.forEach(function (el, index) {
      // Add a small stagger based on position within its parent
      el.dataset.delay = (index % 4) * 80;
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately if IntersectionObserver isn't supported
    animatedEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- 5. BACK TO TOP BUTTON ---------- */
  var backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  }

  /* ---------- 6. CONTACT FORM SUBMISSION (DEMO) ---------- */
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic front-end only demo behaviour.
      // Replace this with a real fetch() call to your backend or form service.
      formSuccess.classList.add('show');
      contactForm.reset();

      setTimeout(function () {
        formSuccess.classList.remove('show');
      }, 5000);
    });
  }

  /* ---------- 7. NEWSLETTER FORM (DEMO) ---------- */
  var newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        input.value = '';
        input.placeholder = 'Thanks for subscribing!';
        setTimeout(function () {
          input.placeholder = 'Your email address';
        }, 3000);
      }
    });
  }

});
