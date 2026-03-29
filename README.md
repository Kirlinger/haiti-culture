# 🇭🇹 Haïti Culture

A multilingual website dedicated to celebrating the extraordinary history, vibrant culture, Vodou spirituality, and tourism of Haiti — the first Black Republic in the world.

---

## ✨ Features

- **28 content pages** covering Haitian history, culture, Vodou spirituality, gastronomy, tourism, and more
- **4 languages** — Français, English, Español, Kreyòl Ayisyen
- Fully **responsive design** — works on mobile, tablet, and desktop
- **Dark mode** CSS support
- **Search functionality** with a 195-item index (Ctrl+K / ⌘K)
- Animated counters, scroll-reveal effects, and dropdown navigation
- Functional **contact forms** in all four languages
- Accessible markup (ARIA attributes, semantic HTML, keyboard navigation)
- **No build step required** — pure HTML, CSS, and vanilla JavaScript

---

## 🗂 Project Structure

```
haiti-culture/
├── index.html                  # Homepage with language detection
├── about.html                  # About Haiti
├── history.html                # General history
├── timeline.html               # Chronology of major events
├── heroes.html                 # National heroes of the Revolution
├── leaders.html                # Political leaders
├── constitution.html           # Haitian Constitution
├── culture.html                # Arts, music, dance, literature
├── vodou.html                  # Vodou spirituality
├── lwa.html                    # Individual Lwa spirits
├── gastronomy.html             # Haitian cuisine
├── holidays.html               # National holidays
├── tourism.html                # Tourism destinations
├── encyclopedia.html           # Encyclopedia portal
├── archives.html               # Historical documents
├── contact.html                # Contact page (French default)
├── capacite-adaptation.html    # Adaptability & resilience
├── creativite-populaire.html   # Popular creativity
├── culture-vivante.html        # Living culture
├── diaspora-engagee.html       # Engaged diaspora
├── fragilite-economique.html   # Economic fragility
├── inegalites-sociales.html    # Social inequalities
├── instabilite-politique.html  # Political instability
├── jeunesse-potentiel.html     # Youth & potential
├── memoire-universelle.html    # Universal memory
├── patrimoine-national.html    # National heritage
├── pressions-securitaires.html # Security pressures
├── reconstruction-durable.html # Sustainable reconstruction
├── services-essentiels.html    # Essential services
│
├── css/
│   └── style.css               # Main stylesheet (~2,700 lines)
├── js/
│   └── script.js               # Main JavaScript (~330 lines)
└── images/
    └── *.svg                   # SVG image assets
```

---

## 🚀 Getting Started

No build step is required. Simply serve the files with any static HTTP server.

### Option 1 — Python (built-in)

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2 — Node.js

```bash
npx serve .
```

### Option 3 — PHP (built-in)

```bash
php -S localhost:8000
```

### Option 4 — VS Code Live Server

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click **Go Live** in the status bar.

> ⚠️ Opening `index.html` directly as a `file://` URL will work for most features, but the site-wide search may be limited due to browser CORS restrictions on local files.

---

## 🌍 Langue

Le site est actuellement maintenu en **français uniquement** (racine du projet).

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, no frameworks) |
| Styles | CSS3 (variables, Grid, Flexbox, animations) |
| Scripts | Vanilla JavaScript ES5/ES6 (no dependencies) |
| Images | SVG |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+K / ⌘K | Open/close search |
| Escape | Close search overlay |

---

## 🤝 Contributing

1. Fork the repository
2. Make your changes in a feature branch
3. Keep the same HTML structure and CSS class conventions as existing pages
4. Lors de l’ajout d’une nouvelle page, maintenir la cohérence du contenu en français (navigation, ton éditorial, et terminologie)
5. Open a pull request with a clear description of your changes

---

## 📄 License

© 2026 [Kirlinger357](https://github.com/Kirlinger). All rights reserved.

Made with ❤️ for Haiti 🇭🇹
