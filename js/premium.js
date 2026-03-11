/* =====================================================
   🇭🇹 République d'Haïti — Premium JS v2
   Particles · Navbar · Progress · Back-to-top · Tilt
   ===================================================== */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════
     1. HERO CANVAS — Star / Particle Field
     ══════════════════════════════════════════════════ */
  function initHeroCanvas() {
    var canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var animationId;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createParticle() {
      var size = random(0.4, 2.2);
      var isGold = Math.random() < 0.28;
      return {
        x:         random(0, canvas.width),
        y:         random(0, canvas.height),
        size:      size,
        baseSize:  size,
        speedX:    random(-0.15, 0.15),
        speedY:    random(-0.25, -0.06),
        opacity:   random(0.15, 0.75),
        baseOpacity: random(0.15, 0.75),
        twinkleSpeed: random(0.005, 0.025),
        twinkleOffset: random(0, Math.PI * 2),
        isGold:    isGold,
        hue:       isGold ? random(38, 52) : random(200, 240),
        sat:       isGold ? random(65, 85) : random(40, 70),
        lum:       isGold ? random(60, 80) : random(75, 95),
      };
    }

    function initParticles() {
      particles = [];
      var count = Math.floor((canvas.width * canvas.height) / 6000);
      count = Math.min(Math.max(count, 60), 220);
      for (var i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    var tick = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        /* Twinkle */
        p.opacity = p.baseOpacity * (0.6 + 0.4 * Math.sin(tick * p.twinkleSpeed + p.twinkleOffset));

        /* Move */
        p.x += p.speedX;
        p.y += p.speedY;

        /* Wrap around */
        if (p.y < -5)           { p.y = canvas.height + 5; p.x = random(0, canvas.width); }
        if (p.x < -5)           { p.x = canvas.width + 5; }
        if (p.x > canvas.width + 5) { p.x = -5; }

        /* Draw */
        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (p.isGold && p.size > 1.4) {
          /* Gold particles: soft glow */
          var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
          grd.addColorStop(0, 'hsla(' + p.hue + ',' + p.sat + '%,' + p.lum + '%,1)');
          grd.addColorStop(0.4, 'hsla(' + p.hue + ',' + p.sat + '%,' + p.lum + '%,0.5)');
          grd.addColorStop(1, 'hsla(' + p.hue + ',' + p.sat + '%,' + p.lum + '%,0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        } else {
          /* White/blue star */
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = 'hsl(' + p.hue + ',' + p.sat + '%,' + p.lum + '%)';
          ctx.fill();
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleResize() {
      resize();
      initParticles();
    }

    resize();
    initParticles();
    draw();

    /* Pause when tab hidden */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        draw();
      }
    });

    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════
     2. NAVBAR SCROLL SHRINK
     ══════════════════════════════════════════════════ */
  function initNavbarScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var scrollThreshold = 80;

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY || window.pageYOffset;

      /* Add / remove .scrolled for shrink effect */
      if (scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════
     3. SCROLL PROGRESS BAR
     ══════════════════════════════════════════════════ */
  function initScrollProgress() {
    var bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress  = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress.toFixed(2) + '%';
    }, { passive: true });
  }

  /* ══════════════════════════════════════════════════
     4. BACK TO TOP BUTTON
     ══════════════════════════════════════════════════ */
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;

    var showThreshold = 500;

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > showThreshold) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ══════════════════════════════════════════════════
     5. STAGGERED CARD ENTRANCE ANIMATION
     ══════════════════════════════════════════════════ */
  function initStaggeredReveal() {
    if (!('IntersectionObserver' in window)) return;

    /* Each visible grid is revealed as a group with staggered delay */
    var grids = document.querySelectorAll(
      '.cards-grid, .feature-grid, .enjeux-grid, .vodou-nations, .destination-grid, .persons-grid'
    );

    var gridObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var items = entry.target.querySelectorAll(
          '.card, .feature-card, .enjeu-card, .destination-card, .person-card, .nation-card'
        );

        items.forEach(function (item, index) {
          item.style.opacity    = '0';
          item.style.transform  = 'translateY(28px)';
          item.style.transition = 'opacity 0.55s cubic-bezier(0.4,0,0.2,1) ' +
                                   (index * 80) + 'ms, ' +
                                   'transform 0.55s cubic-bezier(0.4,0,0.2,1) ' +
                                   (index * 80) + 'ms';

          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              item.style.opacity   = '1';
              item.style.transform = 'translateY(0)';
            });
          });
        });

        gridObserver.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

    grids.forEach(function (grid) {
      gridObserver.observe(grid);
    });

    /* Stats items */
    var statsObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var items = entry.target.querySelectorAll('.stat-item');
        items.forEach(function (item, i) {
          item.style.opacity    = '0';
          item.style.transform  = 'translateY(20px)';
          item.style.transition = 'opacity 0.5s ease ' + (i * 120) + 'ms, transform 0.5s ease ' + (i * 120) + 'ms';
          setTimeout(function () {
            item.style.opacity   = '1';
            item.style.transform = 'translateY(0)';
          }, 10 + i * 120);
        });
        statsObs.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    var statsGrid = document.querySelector('.stats-strip .stats-grid');
    if (statsGrid) {
      statsGrid.querySelectorAll('.stat-item').forEach(function (item) {
        item.style.opacity = '0';
      });
      statsObs.observe(statsGrid);
    }
  }

  /* ══════════════════════════════════════════════════
     6. CARD TILT EFFECT (subtle 3-D)
     ══════════════════════════════════════════════════ */
  function initCardTilt() {
    /* Only on desktop (hover-capable devices) */
    if (window.matchMedia('(hover: none)').matches) return;

    var cards = document.querySelectorAll('.card, .feature-card, .destination-card');
    var MAX_TILT = 5; /* degrees */

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect  = card.getBoundingClientRect();
        var x     = e.clientX - rect.left;
        var y     = e.clientY - rect.top;
        var cx    = rect.width  / 2;
        var cy    = rect.height / 2;
        var rotX  = ((y - cy) / cy) * -MAX_TILT;
        var rotY  = ((x - cx) / cx) *  MAX_TILT;

        card.style.transform = 'translateY(-7px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        card.style.transition = 'transform 0.1s ease';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1)';
      });
    });
  }

  /* ══════════════════════════════════════════════════
     7. QUOTE BLOCK REVEAL
     ══════════════════════════════════════════════════ */
  function initQuoteReveal() {
    if (!('IntersectionObserver' in window)) return;

    var quote = document.querySelector('.quote-block');
    if (!quote) return;

    var quoteText = quote.querySelector('.quote-text');
    var quoteAuthor = quote.querySelector('.quote-author');
    if (!quoteText) return;

    quoteText.style.opacity = '0';
    quoteText.style.transform = 'translateY(20px)';

    if (quoteAuthor) {
      quoteAuthor.style.opacity = '0';
      quoteAuthor.style.transform = 'translateY(12px)';
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        quoteText.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        quoteText.style.opacity   = '1';
        quoteText.style.transform = 'translateY(0)';

        if (quoteAuthor) {
          quoteAuthor.style.transition = 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s';
          quoteAuthor.style.opacity   = '1';
          quoteAuthor.style.transform = 'translateY(0)';
        }

        obs.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    obs.observe(quote);
  }

  /* ══════════════════════════════════════════════════
     8. SECTION LABEL ORNAMENT
     ══════════════════════════════════════════════════ */
  function initSectionOrnaments() {
    /* Add a decorative gold line below each .section-label */
    var labels = document.querySelectorAll('.section-label.text-center');
    labels.forEach(function (label) {
      if (label.querySelector('.label-line')) return;
      var line = document.createElement('span');
      line.className = 'label-line';
      line.setAttribute('aria-hidden', 'true');
      label.parentNode.insertBefore(line, label.nextSibling);
    });
  }

  /* ══════════════════════════════════════════════════
     INIT
     ══════════════════════════════════════════════════ */
  function init() {
    initHeroCanvas();
    initNavbarScroll();
    initScrollProgress();
    initBackToTop();
    initStaggeredReveal();
    initCardTilt();
    initQuoteReveal();
    initSectionOrnaments();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
