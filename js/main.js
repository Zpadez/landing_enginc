/* =====================================================
   ENGINC — UI Interactions (Vanilla JS)
   Basado en el main.js original de la plantilla
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Sticky navbar on scroll ---------- */
  const navbar = document.querySelector('.navbar-nexora');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ---------- Mobile menu toggle animation ---------- */
  const toggler = document.querySelector('.navbar-toggler-custom');
  const navCollapse = document.getElementById('mainNav');

  if (toggler && navCollapse) {
    navCollapse.addEventListener('show.bs.collapse', () => toggler.classList.add('active'));
    navCollapse.addEventListener('hide.bs.collapse', () => toggler.classList.remove('active'));

    // Close menu on link click (mobile)
    navCollapse.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 90;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- Scroll reveal (lightweight IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
      observer.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Back to top button ---------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Bootstrap form validation UI ---------- */
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          const original = btn.innerHTML;
          btn.innerHTML = 'Enviando...';
          btn.disabled = true;
          setTimeout(() => {
            btn.innerHTML = 'Mensaje enviado ✓';
            setTimeout(() => {
              btn.innerHTML = original;
              btn.disabled = false;
              form.reset();
              form.classList.remove('was-validated');
            }, 2200);
          }, 1000);
        }
      }
      form.classList.add('was-validated');
    }, false);
  });

  /* ---------- Set active nav link based on current page ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nexora .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  /* ---------- Carousels con flechas ◀ ▶ (masterclasses, ebooks, cursos, testimonios, chips) ---------- */
  const TOLERANCE = 4; // px de margen para considerar "llegó al final"

  const setArrowState = (btn, disabled) => {
    if (!btn) return;
    btn.style.visibility = disabled ? 'hidden' : '';
    btn.style.pointerEvents = disabled ? 'none' : '';
    btn.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  };

  const getStep = (track) => {
    const card = track.querySelector(':scope > *');
    if (!card) return 260;
    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  // Agrupa cada track con sus flechas prev/next (pueden repetirse selectores)
  const trackSelectors = new Set();
  document.querySelectorAll('[data-scroll-target]').forEach(btn => {
    trackSelectors.add(btn.getAttribute('data-scroll-target'));
  });

  trackSelectors.forEach(selector => {
    const track = document.querySelector(selector);
    if (!track) return;

    const buttons = document.querySelectorAll(`[data-scroll-target="${selector}"]`);
    const prevBtn = Array.from(buttons).find(b => parseInt(b.getAttribute('data-dir'), 10) < 0);
    const nextBtn = Array.from(buttons).find(b => parseInt(b.getAttribute('data-dir'), 10) > 0);

    const updateState = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const hasOverflow = maxScroll > TOLERANCE;
      // Si el contenido ya entra completo (p. ej. la fila de chips en desktop),
      // las flechas se dejan visibles pero inertes en vez de no responder en silencio.
      setArrowState(prevBtn, !hasOverflow);
      setArrowState(nextBtn, !hasOverflow);
    };

    const goTo = (dir) => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= TOLERANCE) return; // nada que desplazar
      const step = getStep(track);
      let target;
      if (dir > 0) {
        target = track.scrollLeft >= maxScroll - TOLERANCE
          ? 0
          : Math.min(track.scrollLeft + step, maxScroll);
      } else {
        target = track.scrollLeft <= TOLERANCE
          ? maxScroll
          : Math.max(track.scrollLeft - step, 0);
      }
      track.scrollTo({ left: target, behavior: 'smooth' });
    };

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(1));

    track.addEventListener('scroll', updateState);
    window.addEventListener('resize', updateState);
    window.addEventListener('load', updateState);
    updateState();
  });

});
