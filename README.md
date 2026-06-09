# Portfolio — Chang PH (Data Engineer & Analyst)

Single-page portfolio website giới thiệu các project Data Engineering & AI của Chang PH.
Pure HTML/CSS/JS — không build tool, không framework, mở trực tiếp bằng trình duyệt.

**🔗 Live:** https://chanc003.github.io/portfolio/

## Chạy local

Mở [html/portfolio/index.html](html/portfolio/index.html) bằng bất kỳ trình duyệt nào — không cần server.

## Nội dung

- **5 project** showcase: Banking Pipeline · Logistics Analytics · AI Analytics Assistant · Data Governance · HR Analytics Platform
- **Song ngữ** EN / VI (toggle, lưu localStorage)
- **Chatbot** rule-based "Changie AI" giới thiệu về Chang
- **Galaxy background** canvas star-field

## Cấu trúc

```
html/portfolio/
├── index.html      ← HTML skeleton + data-i18n attributes
├── style.css       ← Design system (dark + galaxy theme)
└── js/             ← galaxy, constants, data, state, render, i18n, lang, kb-data, chatbot, interactions, init
```

## Deploy

GitHub Pages tự deploy `html/portfolio/` mỗi khi push `main` (xem [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)).
