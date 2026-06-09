# Portfolio — Chang PH (Data Engineer & Analyst)

Single-page portfolio website. Pure HTML/CSS/JS, no build tools, no frameworks. Opens directly in browser via `file://`.

## Run

Open [html/portfolio/index.html](html/portfolio/index.html) in any browser. No server required.

## File structure

```
html/portfolio/
├── index.html              ← HTML skeleton, all sections, data-i18n attributes
├── style.css               ← Full design system (dark + galaxy theme, green accent #22c55e)
├── knowledge-base.md       ← Human-readable KB about Chang (edit here first)
├── avatar.jpg              ← Hero photo (left side)
├── photo2.jpg              ← About strip photo
└── js/
    ├── galaxy.js           ← Canvas star-field background (600 stars + nebula)
    ├── constants.js        ← COLORS, CHIP_CLASS, STACK_DATA, pure helpers
    ├── data.js             ← PROJECTS[] — 4 project objects (id, title, tech, architecture, highlights)
    ├── state.js            ← Global lets: activeFilter, activeProjectId, currentLang
    ├── render.js           ← renderStack, renderProjects, renderProjectCard, renderModal
    ├── i18n.js             ← TRANSLATIONS (EN/VI) + PROJECT_TRANSLATIONS (per-project EN/VI)
    ├── lang.js             ← getLang, setLang, applyLang, t(), updateLangBtn
    ├── kb-data.js          ← KB_DATA — chatbot knowledge (runtime, synced from knowledge-base.md)
    ├── chatbot.js          ← Chatbot UI + rule-based responder
    ├── interactions.js     ← initNavBurger, initFilterTabs, openModal, initRobot, initActiveNavHighlight
    └── init.js             ← IIFE entry point
```

**Load order in index.html (critical):**
`galaxy.js → constants.js → data.js → state.js → render.js → i18n.js → lang.js → kb-data.js → chatbot.js → interactions.js → init.js`

## Key conventions

- **No ES modules** — all `<script src>`, global scope. Each file starts with `'use strict';`
- **No build step** — vanilla JS, plain CSS. Edit and refresh.
- **No external fonts/CDNs** — uses `'Segoe UI', Tahoma, sans-serif` system stack.
- **Color accent**: green `#22c55e` (was orange — never reintroduce orange except for status `error` color).
- **Galaxy background**: fixed canvas `#galaxyCanvas` with 600 twinkling stars + radial-gradient nebula blobs (purple/blue/green).
- **Layout**: navbar fixed top (60px height, blur backdrop), hero photo on left, text on right.

## i18n system

- Static text uses `data-i18n="key"` attributes — looked up in `TRANSLATIONS[currentLang][key]`.
- Project content (title, tagline, description, highlights) lives in `PROJECT_TRANSLATIONS[lang][id]` — applied at render time in `render.js` via `tProject(id)`.
- Switch language: click `EN / VI` button (desktop + mobile). Preference persists in `localStorage`.
- On lang switch, `applyLangAndRerender()` re-renders projects so per-project translations apply.

## Critical CSS rule — body z-index reset

The galaxy canvas requires this global rule to keep all sections above it:
```css
body > *:not(#galaxyCanvas):not(#modalOverlay):not(.navbar):not(.robot-bubble) { position: relative; z-index: 1; }
```

**ANY element that needs `position: fixed` (overlays, sticky bars, popovers) MUST be added to the `:not(...)` chain**, otherwise it gets forced into `position: relative` and falls back into normal document flow.

Current exclusions:
- `#galaxyCanvas` — background star canvas
- `#modalOverlay` — project detail modal (z-index 9999)
- `.navbar` — fixed top navbar (z-index 200)
- `.robot-bubble` — robot speech popup (z-index 9998)
- `.chat-fab` — floating chat button (z-index 9000)
- `.chat-panel` — chat panel (z-index 9001)

If a future feature needs to fix-position itself, add it here too.

## Chatbot architecture

The "Changie AI" chatbot is a **rule-based smart responder** (no LLM API call) — appropriate for static `file://` portfolio.

**Data flow:**
```
knowledge-base.md  ← edit here (human-readable, the spec)
       │  (manual sync)
       ▼
js/kb-data.js      ← KB_DATA object — chatbot reads this at runtime
       │
       ▼
js/chatbot.js      ← rule matcher (substring on lowercase) + UI
```

Why not `fetch()` the `.md` directly? Browser CORS blocks `fetch()` from `file://` for local files. The `.md` is the editorial source; `kb-data.js` is what the chatbot actually loads.

**Adding a new topic to chatbot:**
1. Edit [js/kb-data.js](html/portfolio/js/kb-data.js) → add new entry to `KB_DATA.rules[]`:
   ```js
   { match: ['keyword1', 'keyword2', 'tiếng việt kw'],
     en: 'English reply with **bold** + \\n line breaks',
     vi: 'Câu trả lời tiếng Việt' }
   ```
2. Order matters — specific rules BEFORE general ones (first match wins)
3. Optionally update [knowledge-base.md](html/portfolio/knowledge-base.md) to keep spec in sync

## Adding a new project

1. Add object to `PROJECTS` array in [js/data.js](html/portfolio/js/data.js) with: `id`, `title`, `tagline`, `icon`, `iconBg`, `iconBorder`, `accentColor`, `accentRgb`, `categories[]`, `featured`, `badges[]`, `tech[]`, `description`, `architecture[]`, `highlights[]`, `githubUrl`, `demoUrl`.
2. Add EN + VI translations to `PROJECT_TRANSLATIONS` in [js/i18n.js](html/portfolio/js/i18n.js) keyed by the same `id`.
3. If introducing a new category, add a filter button in [index.html](html/portfolio/index.html) and `filter.<cat>` keys to both EN and VI in i18n.js.

## Sections in order

1. Navbar (fixed) — logo, nav links, EN/VI toggle, Hire me CTA
2. Hero — photo (left) + headline/sub/stats (right)
3. About strip — photo + 3 pillar blocks (Data Engineering / Analytics / AI-Augmented)
4. Tech Stack — 5 categorized chip groups
5. Projects — filter bar + 4 cards (each with galaxy mini-background)
6. Modal — opens on card click, shows architecture diagram + key engineering decisions
7. Contact — email + GitHub + LinkedIn buttons
8. Footer
