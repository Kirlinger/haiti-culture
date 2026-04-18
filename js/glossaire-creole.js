/* =====================================================
   🇭🇹 Haïti 🇭🇹 — Glossaire Créole Filters
   ===================================================== */

(function () {
  'use strict';

  var searchInput  = document.getElementById('glossSearch');
  var filterBtns   = document.querySelectorAll('.gloss-filter-btn');
  var allSections  = document.querySelectorAll('.gloss-section[data-cat]');
  var allEntries   = document.querySelectorAll('.gloss-entry');
  var noResults    = document.getElementById('glossNoResults');

  if (!searchInput || !allSections.length || !allEntries.length || !noResults) return;

  var activeFilter = 'all';
  var searchTerm   = '';

  function applyFilters() {
    var visibleCount = 0;

    allSections.forEach(function (sec) {
      var cat = sec.getAttribute('data-cat');
      var sectionVisible = (activeFilter === 'all' || activeFilter === cat);
      sec.classList.toggle('hidden', !sectionVisible);
    });

    allEntries.forEach(function (entry) {
      var entrySection = entry.closest('.gloss-section[data-cat]');
      var entryCat = entrySection ? entrySection.getAttribute('data-cat') : '';
      var catMatch = (activeFilter === 'all' || activeFilter === entryCat);

      var termMatch = true;
      if (searchTerm) {
        var haystack = (entry.getAttribute('data-search') || '') +
                      ' ' + (entry.textContent || '');
        termMatch = haystack.toLowerCase().indexOf(searchTerm) !== -1;
      }

      var show = catMatch && termMatch;
      entry.classList.toggle('hidden', !show);
      if (show) visibleCount++;
    });

    allSections.forEach(function (sec) {
      if (sec.classList.contains('hidden')) return;
      var anyVisible = Array.from(sec.querySelectorAll('.gloss-entry')).some(function (e) {
        return !e.classList.contains('hidden');
      });
      sec.classList.toggle('hidden', !anyVisible);
    });

    noResults.classList.toggle('visible', visibleCount === 0);
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  searchInput.addEventListener('input', function () {
    searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm) {
      activeFilter = 'all';
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      var allBtn = document.querySelector('.gloss-filter-btn[data-filter="all"]');
      if (allBtn) allBtn.classList.add('active');
    }
    applyFilters();
  });
}());
