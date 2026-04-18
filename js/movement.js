(function () {
  'use strict';

  var LANGUAGE_KEY = 'republiquehaiti-lang';
  var defaultLang = 'fr';

  var messages = {
    fr: {
      navHome: 'Accueil',
      navAbout: 'À Propos',
      navMovement: 'Mouvement',
      navBlog: 'Blog',
      navJoin: 'Nous Rejoindre',
      navContact: 'Contact',
      support: 'Soutenir',
      newsletterLabel: 'Recevez les dernières nouvelles',
      newsletterBtn: 'S\'abonner'
    },
    en: {
      navHome: 'Home',
      navAbout: 'About',
      navMovement: 'Movement',
      navBlog: 'Blog',
      navJoin: 'Join Us',
      navContact: 'Contact',
      support: 'Support',
      newsletterLabel: 'Get latest movement updates',
      newsletterBtn: 'Subscribe'
    },
    ht: {
      navHome: 'Akèy',
      navAbout: 'Apwopo',
      navMovement: 'Mouvman',
      navBlog: 'Blog',
      navJoin: 'Antre Avèk Nou',
      navContact: 'Kontak',
      support: 'Sipòte',
      newsletterLabel: 'Resevwa dènye nouvèl mouvman an',
      newsletterBtn: 'Abòne'
    }
  };

  function qs(sel, parent) { return (parent || document).querySelector(sel); }
  function qsa(sel, parent) { return Array.prototype.slice.call((parent || document).querySelectorAll(sel)); }

  function initNav() {
    var btn = qs('.nav-toggle');
    var nav = qs('.nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
    qsa('.nav a', nav).forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function markCurrentLink() {
    var current = (location.pathname.split('/').pop() || 'index.html').replace(/\/$/, '');
    qsa('.nav a').forEach(function (link) {
      var href = (link.getAttribute('href') || '').replace(/\/$/, '');
      if (href === current) link.setAttribute('aria-current', 'page');
    });
  }

  function applyTranslations(lang) {
    var dict = messages[lang] || messages[defaultLang];
    qsa('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (dict[key]) node.textContent = dict[key];
    });
  }

  function initLanguage() {
    var select = qs('#languageSwitcher');
    if (!select) return;
    var stored = localStorage.getItem(LANGUAGE_KEY);
    var selected = messages[stored] ? stored : defaultLang;
    select.value = selected;
    applyTranslations(selected);

    select.addEventListener('change', function () {
      var lang = messages[select.value] ? select.value : defaultLang;
      localStorage.setItem(LANGUAGE_KEY, lang);
      applyTranslations(lang);
      document.documentElement.setAttribute('lang', lang === 'ht' ? 'ht' : (lang === 'en' ? 'en' : 'fr'));
    });
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    qsa('.reveal').forEach(function (el) { io.observe(el); });
  }

  function initForms() {
    qsa('[data-api-form]').forEach(function (form) {
      form.addEventListener('submit', async function (event) {
        event.preventDefault();
        var status = qs('.form-status', form);
        var submit = qs('button[type="submit"]', form);
        if (status) { status.textContent = ''; status.className = 'form-status'; }

        var fd = new FormData(form);
        var payload = {};
        fd.forEach(function (value, key) { payload[key] = String(value || '').trim(); });

        if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
          if (status) {
            status.textContent = 'Veuillez saisir une adresse email valide.';
            status.classList.add('error');
          }
          return;
        }

        if (window.grecaptcha && form.querySelector('.g-recaptcha')) {
          var tokenInput = form.querySelector('input[name="recaptchaToken"]');
          var token = window.grecaptcha.getResponse();
          if (tokenInput) tokenInput.value = token;
          payload.recaptchaToken = token;
          if (!token) {
            if (status) {
              status.textContent = 'Veuillez valider le reCAPTCHA avant envoi.';
              status.classList.add('error');
            }
            return;
          }
        }

        try {
          if (submit) submit.disabled = true;
          var res = await fetch(form.getAttribute('action') || '/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!res.ok) {
            throw new Error('Échec de la requête');
          }

          form.reset();
          if (window.grecaptcha && form.querySelector('.g-recaptcha')) {
            window.grecaptcha.reset();
          }
          if (status) {
            status.textContent = 'Merci. Votre message a été transmis avec succès.';
            status.classList.add('success');
          }
        } catch (error) {
          if (status) {
            status.textContent = 'Une erreur est survenue. Veuillez réessayer.';
            status.classList.add('error');
          }
        } finally {
          if (submit) submit.disabled = false;
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    markCurrentLink();
    initLanguage();
    initReveal();
    initForms();
  });
})();
