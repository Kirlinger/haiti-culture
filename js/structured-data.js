(function () {
  'use strict';
  function inject(data) {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page') || 'home';
    var base = 'https://republiquehaiti.org';

    inject({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'République Haïti Movement',
      url: base,
      sameAs: []
    });

    if (page === 'blog') {
      inject({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'République Haïti Newsroom',
        url: base + '/blog.html',
        inLanguage: ['fr', 'en', 'ht']
      });
    }
  });
})();
