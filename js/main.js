/**
 * FIT & PLUS - MAIN APPLICATION SCRIPT
 * Handles navigation, interactive filters, mobile drawer, toasts and smooth scrolling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScheduleInteractions();
  initMembershipButtons();
  initBackToTop();
  initParallax();
});

/**
 * Toast Notification Utility
 */
function showToast(message, type = 'red') {
  let toast = document.getElementById('fitplus-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'fitplus-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.className = `toast-notification ${type === 'lime' ? 'lime' : ''}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px]" style="color: ${type === 'lime' ? '#CCFF00' : '#E50914'}">
      ${type === 'lime' ? 'check_circle' : 'bolt'}
    </span>
    <div>
      <div class="text-[11px] text-gray-400">NOTIFICACIÓN DEL SISTEMA</div>
      <div class="text-sm font-semibold tracking-wider text-white">${message}</div>
    </div>
  `;

  // Trigger animation
  setTimeout(() => toast.classList.add('active'), 10);

  // Auto hide after 3.5s
  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

/**
 * Navbar Active States & Scroll Detection
 */
function initNavbar() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav a[data-path], .mobile-nav-links a[data-path]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
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
  });
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
      }
    });
  });
}

/**
 * Class Schedule & Station Reservation Interactions
 */
function initScheduleInteractions() {
  // Station time pills click
  const timePills = document.querySelectorAll('#cronograma span[class*="border-[#CCFF00]"], #clases span[class*="border-[#CCFF00]"]');
  timePills.forEach(pill => {
    pill.style.cursor = 'pointer';
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const time = pill.textContent.trim();
      const card = pill.closest('.group');
      const day = card?.querySelector('.font-technical-mono')?.textContent?.trim() || 'SESIÓN';
      const discipline = card?.querySelector('h3')?.textContent?.trim() || 'CLASE';
      showToast(`Estación ${discipline} (${day}) pre-seleccionada a las ${time}h`, 'lime');
    });
  });

  // Action cards reservation button click
  const reserveButtons = document.querySelectorAll('#cronograma .group, #clases .group');
  reserveButtons.forEach(card => {
    const reserveLink = card.querySelector('span:contains("RESERVAR"), .text-secondary');
    card.addEventListener('click', (e) => {
      // If not clicking a specific sub-button
      if (e.target.tagName !== 'SPAN' || !e.target.classList.contains('cursor-pointer')) {
        const title = card.querySelector('h3')?.textContent?.trim();
        if (title) {
          showToast(`Abriendo reserva para: ${title}`, 'lime');
        }
      }
    });
  });
}

/**
 * Membership Plan Selection Handling
 */
function initMembershipButtons() {
  const planButtons = document.querySelectorAll('#tarifas button, [data-path="tarifas"]');
  planButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const planCard = btn.closest('.bg-\\[\\#111418\\]');
      const planName = planCard?.querySelector('h3')?.textContent?.trim() || 'FIT & PLUS PRO';
      showToast(`Has seleccionado el plan: ${planName}. Redirigiendo a registro seguro...`, 'red');
    });
  });
}

/**
 * Back to Top Floating Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Parallax Background Movement on Scroll (Mobile & Desktop)
 */
function initParallax() {
  const section = document.getElementById('horarios');
  const layer = section?.querySelector('.parallax-layer');
  if (!section || !layer) return;

  let ticking = false;

  function update() {
    const rect = section.getBoundingClientRect();
    const winHeight = window.innerHeight;

    // Check if section is visible in or near viewport
    if (rect.bottom > -100 && rect.top < winHeight + 100) {
      // Progress from 0 (section entering from bottom) to 1 (section exiting at top)
      const totalDist = winHeight + rect.height;
      const currentDist = winHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));
      
      // Smooth travel range: layer has 50% extra height (top: -25%, height: 150%)
      const maxOffset = 120;
      const yOffset = (progress - 0.5) * (maxOffset * 2);

      layer.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0)`;
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', update, { passive: true });
  update();
}





