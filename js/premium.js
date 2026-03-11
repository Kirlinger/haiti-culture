/* =====================================================
   République d'Haïti — Premium JS v2
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
    initInteractiveMap();
    initGalleryLightbox();
    initTimelineAnimation();
    initMemoryWall();
    initFiguresReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  /* ══════════════════════════════════════════════════
     9. INTERACTIVE MAP
     ══════════════════════════════════════════════════ */
  var MAP_LOCATIONS = {
    pap: {
      title: 'Port-au-Prince',
      badge: 'Capitale',
      desc: 'Capitale et métropole d\'Haïti, fondée en 1749. Cœur économique, politique et culturel du pays avec plus de 3 millions d\'habitants. Siège du gouvernement et carrefour de la vie nationale.',
      link: 'tourism.html'
    },
    cap: {
      title: 'Cap-Haïtien',
      badge: 'Capitale du Nord',
      desc: 'Fondée en 1670 sous le nom du Cap-Français, elle fut la capitale coloniale la plus prospère des Caraïbes. Berceau de la Révolution haïtienne et porte d\'accès à la Citadelle Laferrière.',
      link: 'tourism.html'
    },
    jacmel: {
      title: 'Jacmel',
      badge: 'Capitale Culturelle',
      desc: 'Joyau architectural du Sud, Jacmel est réputée pour son carnaval créatif, son art naïf et son architecture coloniale française. Ville UNESCO désignée ville créative, elle attire artistes et voyageurs du monde entier.',
      link: 'tourism.html'
    },
    citadelle: {
      title: 'Citadelle Laferrière',
      badge: 'Patrimoine UNESCO',
      desc: 'Érigée entre 1805 et 1820 par le roi Henri Christophe, cette forteresse massive dominant les montagnes du nord est le plus grand château de l\'hémisphère occidental. Symbole de la souveraineté haïtienne, classée au Patrimoine Mondial de l\'UNESCO.',
      link: 'tourism.html'
    },
    vache: {
      title: 'Île-à-Vache',
      badge: 'Île Préservée',
      desc: 'Île enchanteresse du département du Sud, Île-à-Vache est un paradis préservé aux eaux turquoise, aux plages immaculées et aux récifs coralliens. Un joyau naturel de la Caraïbe haïtienne.',
      link: 'tourism.html'
    },
    labadie: {
      title: 'Labadée',
      badge: 'Paradis Côtier',
      desc: 'Presqu\'île enchanteresse au nord d\'Haïti, Labadée est réputée pour ses plages de sable fin, ses eaux cristallines et sa forêt luxuriante. Une destination balnéaire unique aux portes de Cap-Haïtien.',
      link: 'tourism.html'
    }
  };

  function initInteractiveMap() {
    var markers = document.querySelectorAll('.map-marker');
    var panel = document.getElementById('mapInfoPanel');
    if (!markers.length || !panel) return;

    var defaultPane = panel.querySelector('.map-info-panel__default');
    var contentPane = panel.querySelector('.map-info-panel__content');
    var iconEl   = document.getElementById('mapLocIcon');
    var titleEl  = document.getElementById('mapLocTitle');
    var badgeEl  = document.getElementById('mapLocBadge');
    var descEl   = document.getElementById('mapLocDesc');
    var linkEl   = document.getElementById('mapLocLink');

    function showLocation(locId) {
      var data = MAP_LOCATIONS[locId];
      if (!data) return;

      if (titleEl)  titleEl.textContent  = data.title;
      if (badgeEl)  badgeEl.textContent  = data.badge;
      if (descEl)   descEl.textContent   = data.desc;
      if (linkEl) {
        linkEl.href = data.link;
        linkEl.textContent = 'Explorer ' + data.title + ' →';
      }

      if (defaultPane) defaultPane.style.display = 'none';
      if (contentPane) {
        contentPane.style.display = 'block';
        /* Accessing offsetHeight forces a browser reflow, which allows the
           animation to reset so it replays from the start on the next frame. */
        contentPane.offsetHeight; /* trigger reflow */
        contentPane.style.animation = '';
      }

      /* Deactivate all markers, activate clicked */
      markers.forEach(function (m) { m.classList.remove('active'); });
      var activeMarker = document.querySelector('.map-marker[data-loc="' + locId + '"]');
      if (activeMarker) activeMarker.classList.add('active');
    }

    markers.forEach(function (marker) {
      marker.addEventListener('click', function () {
        showLocation(marker.getAttribute('data-loc'));
      });
      marker.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showLocation(marker.getAttribute('data-loc'));
        }
      });
    });
  }

  /* ══════════════════════════════════════════════════
     10. GALLERY LIGHTBOX
     ══════════════════════════════════════════════════ */
  function initGalleryLightbox() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    var lightbox     = document.getElementById('lightbox');
    var imgWrap      = document.getElementById('lightboxImg');
    var captionEl    = document.getElementById('lightboxCaption');
    var closeBtn     = document.getElementById('lightboxClose');
    var prevBtn      = document.getElementById('lightboxPrev');
    var nextBtn      = document.getElementById('lightboxNext');

    if (!lightbox || !galleryItems.length) return;

    var currentIndex = 0;
    var items = Array.from(galleryItems);

    function openLightbox(index) {
      currentIndex = index;
      var item = items[index];
      var caption = item.getAttribute('data-caption') || '';
      var imgDiv = item.querySelector('.gallery-item__img');
      var imgClass = imgDiv ? imgDiv.className : '';

      /* Clone the image block into the lightbox */
      if (imgWrap) {
        imgWrap.innerHTML = '<div class="' + imgClass + '" style="width:100%;min-height:400px;max-height:68vh;display:flex;align-items:center;justify-content:center;border-radius:12px;"></div>';
      }
      if (captionEl) captionEl.textContent = caption;

      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    function navigate(dir) {
      currentIndex = (currentIndex + dir + items.length) % items.length;
      openLightbox(currentIndex);
    }

    items.forEach(function (item, i) {
      item.addEventListener('click', function () { openLightbox(i); });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn)  prevBtn.addEventListener('click', function () { navigate(-1); });
    if (nextBtn)  nextBtn.addEventListener('click', function () { navigate(1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  /* ══════════════════════════════════════════════════
     11. TIMELINE SCROLL ANIMATION
     ══════════════════════════════════════════════════ */
  function initTimelineAnimation() {
    if (!('IntersectionObserver' in window)) return;

    var items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('timeline-item--visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

    items.forEach(function (item, i) {
      item.style.opacity  = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.55s ease ' + (i * 60) + 'ms, transform 0.55s ease ' + (i * 60) + 'ms';
      obs.observe(item);
    });

    /* Inject a style rule to reset the visible state */
    var styleEl = document.createElement('style');
    styleEl.textContent = '.timeline-item--visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(styleEl);
  }

  /* ══════════════════════════════════════════════════
     12. MEMORY WALL REVEAL
     ══════════════════════════════════════════════════ */
  function initMemoryWall() {
    if (!('IntersectionObserver' in window)) return;

    var grid = document.querySelector('.memory-grid');
    if (!grid) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var cards = entry.target.querySelectorAll('.memory-card');
        cards.forEach(function (card, i) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(24px) scale(0.97)';
          card.style.transition = 'opacity 0.5s ease ' + (i * 70) + 'ms, transform 0.5s ease ' + (i * 70) + 'ms';
          setTimeout(function () {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 10 + i * 70);
        });
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    obs.observe(grid);
  }

  /* ══════════════════════════════════════════════════
     13. FIGURES SECTION REVEAL
     ══════════════════════════════════════════════════ */
  function initFiguresReveal() {
    if (!('IntersectionObserver' in window)) return;

    var grid = document.querySelector('.figures-grid');
    if (!grid) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var cards = entry.target.querySelectorAll('.figure-card');
        cards.forEach(function (card, i) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(28px)';
          card.style.transition = 'opacity 0.6s ease ' + (i * 90) + 'ms, transform 0.6s ease ' + (i * 90) + 'ms, box-shadow 0.38s ease, border-color 0.3s ease';
          setTimeout(function () {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 15 + i * 90);
        });
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.08 });

    obs.observe(grid);
  }


  /* ══════════════════════════════════════════════════
     14. CHRONOLOGIE COMPLÈTE — Accordion toggle
     ══════════════════════════════════════════════════ */
  function initEvtTimeline() {
    var headers = document.querySelectorAll('.evt-header');
    if (!headers.length) return;

    headers.forEach(function (header) {
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');

      function toggle() {
        var item = header.closest('.evt-item');
        var isOpen = item.classList.contains('is-open');

        // Close all others
        document.querySelectorAll('.evt-item.is-open').forEach(function (openItem) {
          openItem.classList.remove('is-open');
          openItem.querySelector('.evt-header').setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item
        if (!isOpen) {
          item.classList.add('is-open');
          header.setAttribute('aria-expanded', 'true');
        }
      }

      header.addEventListener('click', toggle);
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  initEvtTimeline();

})();
