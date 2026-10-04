/**
 * FIT & PLUS - MAIN APPLICATION SCRIPT
 * Handles navigation, mobile drawer, smooth scrolling and smartphone video mockup.
 * Optimized with requestAnimationFrame and passive scroll listeners for maximum FPS.
 */

function initApp() {
  try { initNavbar(); } catch (e) { /* silent init */ }
  try { initMobileMenu(); } catch (e) { /* silent init */ }
  try { initSmoothScroll(); } catch (e) { /* silent init */ }
  try { initBackToTop(); } catch (e) { /* silent init */ }
  try { initParallax(); } catch (e) { /* silent init */ }
  try { initPhoneVideos(); } catch (e) { /* silent init */ }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Navbar Active States & Scroll Detection (Throttled with requestAnimationFrame)
 */
function initNavbar() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav a[data-path], .mobile-nav-links a[data-path]');
  const sections = document.querySelectorAll('section[id]');
  if (!header && !navLinks.length) return;

  let ticking = false;

  function updateNavbar() {
    // Header shadow on scroll
    if (window.scrollY > 50) {
      header?.classList.add('shadow-lg', 'bg-[#0B0D0F]/95');
    } else {
      header?.classList.remove('shadow-lg');
    }

    // Active link highlighting based on section in view
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href')?.replace('#', '');
        if (href === current) {
          link.classList.add('text-on-surface', 'border-b-2', 'border-primary-container');
          link.classList.remove('text-secondary');
        } else if (href) {
          link.classList.remove('text-on-surface', 'border-b-2', 'border-primary-container');
          link.classList.add('text-secondary');
        }
      });
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const links = drawer?.querySelectorAll('a');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('closed');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    drawer.classList.add('closed');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  links?.forEach(link => link.addEventListener('click', closeMenu));
}

/**
 * Smooth Anchor Scrolling with Header Offset
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        try {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } catch (err) {
          // Fallback if selector is malformed
        }
      }
    });
  });
}

/**
 * Back to Top Floating Button (Throttled with requestAnimationFrame)
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  let ticking = false;

  function updateBackToTop() {
    if (window.scrollY > 600) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateBackToTop);
      ticking = true;
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Parallax Background Handling
 */
function initParallax() {
  // Pure native CSS background-attachment: fixed on desktop handles parallax effortlessly.
}

/**
 * Smartphone Mockup Video Controller
 * Plays video only when user clicks/taps play, with interactive overlay and auto-pause
 */
function initPhoneVideos() {
  const wrappers = document.querySelectorAll('.phone-mockup-wrapper');
  wrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    const overlay = wrapper.querySelector('.phone-play-overlay');
    if (!video || !overlay) return;

    function startPlayback() {
      // Pause any other playing phone videos
      document.querySelectorAll('.phone-mockup-wrapper video').forEach(v => {
        if (v !== video && !v.paused) v.pause();
      });

      video.play().catch(err => {
        console.warn('Playback error:', err);
      });
      overlay.classList.add('opacity-0', 'pointer-events-none');
    }

    function pausePlayback() {
      video.pause();
      overlay.classList.remove('opacity-0', 'pointer-events-none');
    }

    // Click on overlay -> start
    overlay.addEventListener('click', (e) => {
      e.stopPropagation();
      startPlayback();
    });

    // Toggle play/pause by clicking video
    video.addEventListener('click', () => {
      if (video.paused) {
        startPlayback();
      } else {
        pausePlayback();
      }
    });

    // Native event syncing
    video.addEventListener('pause', () => {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
    });

    video.addEventListener('ended', () => {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
    });

    video.addEventListener('play', () => {
      overlay.classList.add('opacity-0', 'pointer-events-none');
    });
  });
}
