/* =====================================================
   🇭🇹 Haïti 🇭🇹 : Interactive Administrative Hierarchy
   (geographie.html only)
   ===================================================== */

/* ── Interactive Administrative Hierarchy ─────────────── */
(function () {
  'use strict';

  var state = {
    level: 'departments',  // departments | arrondissements | communes | commune
    dept: null,
    arrond: null,
    commune: null
  };

  var panel     = document.getElementById('adminPanel');
  var panelTitle= document.getElementById('adminPanelTitle');
  var grid      = document.getElementById('adminGrid');
  var breadcrumb= document.getElementById('adminBreadcrumb');

  if (!panel || !grid || !HAITI_ADMIN) return;

  function esc(str) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  }

  /* ── Render departments ─────────────────────────────── */
  function renderDepartments() {
    state.level = 'departments';
    state.dept = state.arrond = state.commune = null;
    panel.style.display = '';

    panelTitle.textContent = '10 Départements, cliquez pour explorer';

    var html = '';
    HAITI_ADMIN.forEach(function (dept, idx) {
      var arrCount = dept.arrondissements.length;
      var comCount = dept.arrondissements.reduce(function (s, a) { return s + a.communes.length; }, 0);
      html += '<div class="admin-card admin-card--dept" tabindex="0" role="button"'
        + ' aria-label="Département ' + esc(dept.name) + '"'
        + ' data-dept-id="' + esc(dept.id) + '"'
        + ' style="border-left-color:' + esc(dept.color) + '">'
        + '<div class="admin-card__label">Département ' + (idx + 1 < 10 ? '0' + (idx + 1) : (idx + 1)) + '</div>'
        + '<div class="admin-card__name">' + esc(dept.name) + '</div>'
        + '<div class="admin-card__capital">Chef-lieu : <strong>' + esc(dept.capital) + '</strong></div>'
        + '<div class="admin-card__count">' + arrCount + ' arrond. · ' + comCount + ' communes</div>'
        + '<span class="admin-card__arrow">›</span>'
        + '</div>';
    });
    grid.innerHTML = html;
    updateBreadcrumb();
    bindCardClicks();
  }

  /* ── Render arrondissements ─────────────────────────── */
  function renderArrondissements(deptId) {
    var dept = HAITI_ADMIN.find(function (d) { return d.id === deptId; });
    if (!dept) return;
    state.level = 'arrondissements';
    state.dept  = dept;
    state.arrond = state.commune = null;
    panel.style.display = '';

    panelTitle.textContent = 'Arrondissements du département ' + dept.name + ', cliquez pour voir les communes';

    var html = '';
    dept.arrondissements.forEach(function (arr) {
      html += '<div class="admin-card" tabindex="0" role="button"'
        + ' aria-label="Arrondissement ' + esc(arr.name) + '"'
        + ' data-arrond-id="' + esc(arr.id) + '"'
        + ' style="border-left: 4px solid ' + esc(dept.color) + '">'
        + '<div class="admin-card__label">Arrondissement</div>'
        + '<div class="admin-card__name">' + esc(arr.name) + '</div>'
        + '<div class="admin-card__capital">Chef-lieu : <strong>' + esc(arr.capital) + '</strong></div>'
        + '<div class="admin-card__count">' + arr.communes.length + ' commune' + (arr.communes.length > 1 ? 's' : '') + '</div>'
        + '<span class="admin-card__arrow">›</span>'
        + '</div>';
    });
    grid.innerHTML = html;
    updateBreadcrumb();
    bindCardClicks();
    scrollToPanel();
  }

  /* ── Render communes ────────────────────────────────── */
  function renderCommunes(arrondId) {
    var arr = null;
    state.dept.arrondissements.forEach(function (a) {
      if (a.id === arrondId) arr = a;
    });
    if (!arr) return;
    state.level = 'communes';
    state.arrond = arr;
    state.commune = null;
    panel.style.display = '';

    panelTitle.textContent = 'Communes de l\'arrondissement de ' + arr.name;

    var html = '';
    arr.communes.forEach(function (com) {
      var badges = '';
      if (com.chefLieuDepartement) badges += '<span class="admin-card__badge admin-card__badge--blue">Chef-lieu de département</span> ';
      if (com.chefLieuArrondissement && !com.chefLieuDepartement) badges += '<span class="admin-card__badge">Chef-lieu d\'arrond.</span> ';
      html += '<div class="admin-card"'
        + ' aria-label="Commune ' + esc(com.name) + '"'
        + ' style="border-left: 4px solid ' + esc(state.dept.color) + ';cursor:default;">'
        + '<div class="admin-card__label">Commune</div>'
        + '<div class="admin-card__name">' + esc(com.name) + '</div>'
        + '<div class="admin-card__capital">' + esc(com.population) + '</div>'
        + (badges ? '<div style="margin-top:6px;">' + badges + '</div>' : '')
        + '</div>';
    });
    grid.innerHTML = html;
    updateBreadcrumb();
    scrollToPanel();
  }

  /* ── Breadcrumb ─────────────────────────────────────── */
  function updateBreadcrumb() {
    var html = '<div class="admin-breadcrumb__item">';
    if (state.level === 'departments') {
      html += '<span class="admin-breadcrumb__current">Tous les Départements</span>';
    } else {
      html += '<button type="button" data-nav="departments">Départements</button>';
      html += '</div><span class="admin-breadcrumb__sep">›</span><div class="admin-breadcrumb__item">';
      if (state.level === 'arrondissements') {
        html += '<span class="admin-breadcrumb__current">' + esc(state.dept.name) + '</span>';
      } else {
        html += '<button type="button" data-nav="arrondissements">' + esc(state.dept.name) + '</button>';
        html += '</div><span class="admin-breadcrumb__sep">›</span><div class="admin-breadcrumb__item">';
        html += '<span class="admin-breadcrumb__current">Arr. ' + esc(state.arrond.name) + '</span>';
      }
    }
    html += '</div>';
    breadcrumb.innerHTML = html;

    breadcrumb.querySelectorAll('button[data-nav]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var nav = btn.getAttribute('data-nav');
        if (nav === 'departments') renderDepartments();
        else if (nav === 'arrondissements') renderArrondissements(state.dept.id);
      });
    });
  }

  /* ── Card click handlers ────────────────────────────── */
  function bindCardClicks() {
    grid.querySelectorAll('.admin-card').forEach(function (card) {
      function activate() {
        var deptId   = card.getAttribute('data-dept-id');
        var arrondId = card.getAttribute('data-arrond-id');
        if (deptId)   renderArrondissements(deptId);
        else if (arrondId) renderCommunes(arrondId);
      }
      card.addEventListener('click', activate);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
      });
    });
  }

  /* ── Scroll helper ──────────────────────────────────── */
  function scrollToPanel() {
    var top = panel.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  /* ── Init ───────────────────────────────────────────── */
  renderDepartments();
})();
