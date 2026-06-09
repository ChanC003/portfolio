# Portfolio-ChangPH — Progress

**Ngày cập nhật:** 2026-05-24
**Task:** Portfolio website cho Chang PH (Data Engineer & Analyst, 2 năm exp, target AI-native market)

## Phiên bản hiện tại — v2.0 stable

### v2.0 (2026-05-24) — Chatbot AI "Changie"
- **Knowledge base structure:**
  - [knowledge-base.md](html/portfolio/knowledge-base.md) — file `.md` chứa thông tin Chang (human-readable, dùng để biên tập)
  - [js/kb-data.js](html/portfolio/js/kb-data.js) — runtime data dạng JS object (chatbot đọc trực tiếp, không cần fetch vì portfolio chạy `file://`)
  - Sync thủ công giữa 2 file khi cập nhật
- **Chatbot UI:**
  - Floating button góc phải dưới — robot face xanh lá, pulse + bounce animation, red notification dot
  - Click → expand chat panel 360x540px với header, body, suggestions, input
  - 4 suggested questions song ngữ (Who is Chang / Tech / Projects / Contact)
  - Typing dots animation khi bot đang "nghĩ"
  - User message bubble gradient xanh, bot message bubble dark glass
- **Logic:**
  - Rule-based matcher: keyword substring → reply (lowercase, hỗ trợ EN + VI)
  - 20+ topics: personal, education, work GHN, tech stack (SQL/Python/dbt riêng), 4 projects chi tiết, career goals, contact, location, AI market, GitHub/LinkedIn, salary/CV/notice, greetings/thanks/bye
  - Fallback message thân thiện khi không match
  - Format reply hỗ trợ `**bold**` + `\n` xuống dòng
- **i18n integration:** Switch EN/VI → chatbot tự reload greeting + suggestions + placeholder
- **Thông tin Chang đã được tích hợp:**
  - Tên: Chang Pham Huyen / Phạm Huyền Chang, sinh 02/2003
  - Học vấn: Học Viện Tài Chính, ngành Hệ Thống Thông Tin Quản Lý, GPA 3.49 (2021-2025)
  - Công việc: Data Analyst tại Giao Hàng Nhanh (GHN) Express từ 08/2025
  - Phone: 0986876892
- **CSS exclusion:** thêm `.chat-fab` + `.chat-panel` vào z-index reset rule

## Phiên bản trước — v1.3 stable

### v1.3 (2026-05-24)
- **Design pass tổng thể:** base font 13→14px, hero title 56→60px, section title 28→36px, sub text từ `#94a3b8` → `#cbd5e1` rõ hơn, buttons có green glow shadow
- **Section tag** đổi từ flat text → pill có dot pulse glow xanh lá
- **Stack cards** glassmorphism backdrop-blur thay vì flat
- **Project cards** quay về dark gradient `#1e2637 → #111826` (bỏ trắng vì lóa), card title 16→18px, hover lift -6px + shadow đậm hơn
- **Filter button active** = solid green `#22c55e` + glow shadow (rõ ràng hơn)
- **Logo "Chang."** gradient 8 màu rainbow (green→blue→purple→pink→orange→teal) chạy + bounce, drop-shadow theo màu
- **Tagline navbar** gradient 6 màu pastel + wobble letter-spacing
- **🤖 Robot "Changie"** pure-CSS bên cạnh logo: float + xoay, mắt chớp, anten pulse, miệng nói; click cycle 6 messages qua speech bubble
- **Đổi địa điểm:** Ho Chi Minh City → Hà Nội (Việt Nam) ở contact + footer
- **Thêm "Data Governance"** vào contact sub roles list (EN + VI)
- **Fix bubble lệch ra ngoài viewport** — bỏ `translate(-50%)`, neo left edge cách robot center 18px, arrow ở `left: 14px`

### v1.2 — preset (đã merge vào v1.3)
- Đổi cards trắng (rejected, gây lóa với context dark)
- Hero photo position trái, sub text đậm hơn

### v1.1 (2026-05-24)
- Fix navbar không stick khi scroll — exclude `.navbar` khỏi global `position: relative` reset
- Final z-index reset selector: `body > *:not(#galaxyCanvas):not(#modalOverlay):not(.navbar):not(.robot-bubble)`

Single-page portfolio, mở trực tiếp file://, không cần server.

## Đã xong

### Cấu trúc & code base
- 8 file JS tách theo concern (constants/data/state/render/i18n/lang/interactions/init + galaxy)
- 1 CSS file dùng design system dark theme + galaxy
- 2 ảnh tích hợp: `avatar.jpg` (hero right), `photo2.jpg` (about left)
- Load order JS đã chốt: galaxy → constants → data → state → render → i18n → lang → interactions → init

### Sections
- **Navbar** fixed top (60px, blur backdrop), green accent border, EN/VI toggle, "Tuyển dụng" CTA
- **Hero** — ảnh chân dung bên TRÁI, text + stats + CTA bên PHẢI, badge "Open to work" pulse green
- **About strip** — ảnh street-style bên trái + 3 pillar blocks (Engineering / Analytics / AI-Augmented)
- **Tech Stack** — 5 categorized chip groups (Ingestion, Orchestration, Storage, BI, AI Tools)
- **Projects** — 4 cards với galaxy mini-background, filter tabs (All / Engineering / Analytics / AI / Real-time / Governance)
- **Modal** — architecture diagram + 6 highlights + tech chips + GitHub/Demo links
- **Contact** — email + GitHub + LinkedIn buttons
- **Footer**

### 4 projects
1. **End-to-End Real-Time Banking Pipeline** (featured) — PostgreSQL → Debezium CDC → Kafka → Snowflake → dbt → Airflow → Power BI
2. **Logistics Analytics Platform** — Python, DuckDB, dbt, Airflow, Power BI, Docker
3. **AI Analytics Assistant** (featured) — Streamlit + OpenAI/Ollama NL2SQL → PostgreSQL
4. **Data Governance & Quality Platform** — dbt + Great Expectations + Apache Atlas (thay cho Real-time Order Monitoring ban đầu)

### i18n EN/VI
- 100% song ngữ — static text qua `data-i18n`, project content qua `PROJECT_TRANSLATIONS`
- Persistence qua `localStorage`
- Switch không reload, re-render projects với lang mới

### Galaxy theme
- Canvas fixed full-screen 600 sao twinkle (70% trắng, 30% green/blue/purple) + 4 nebula glow blobs
- Mỗi project card có 3 lớp radial-gradient nebula + 8 chấm sao CSS float

### Design system
- Accent: green `#22c55e` / `#4ade80` (đổi từ orange ban đầu)
- Surfaces: `#0d1117` → `#161b22` → `#21262d`
- Text hierarchy: `#e2e8f0` → `#94a3b8` → `#64748b` → `#334155`
- Border radius: 4 (badge) / 6 (input/button) / 9 (card/filter) / 12-16 (modal)
- Không dùng box-shadow trừ modal & card hover

## Bug đã fix trong session
1. ✅ Project cards mất khi switch lang — bỏ class `fade-in` khỏi cards, thay bằng `@keyframes cardIn`
2. ✅ Modal không hiện khi click "View details" — `z-index: 200` trùng navbar → nâng lên 9999
3. ✅ Modal bị đẩy xuống cuối page thay vì nổi giữa — rule `body > *:not(#galaxyCanvas) { z-index: 1 }` đè cả modal → exclude `#modalOverlay`
4. ✅ Trang lag/kẹt khi mở modal — bỏ `position: fixed` trick trên body, dùng `html.modal-open { overflow: hidden }`
5. ✅ Navbar không stick khi scroll (v1.1) — cùng rule global đè `position: relative` lên navbar → exclude `.navbar` khỏi rule
   - Final selector: `body > *:not(#galaxyCanvas):not(#modalOverlay):not(.navbar) { position: relative; z-index: 1; }`

## Quyết định quan trọng
- **No frameworks, no build** — tối ưu cho việc mở file:// trực tiếp và share dễ
- **Galaxy theme** thay vì gradient flat — recruiter dễ nhớ, phù hợp "AI-native" positioning
- **Tách project Real-time Monitoring → Data Governance** — governance hot hơn trong job market 2026
- **Hero ảnh trái + text phải** — đảo ngược default để layout cá nhân hơn
- **Navbar fixed + blur backdrop** — luôn truy cập được, sang hơn sticky

## Còn lại / Có thể làm thêm
- Điền GitHub URL thật + LinkedIn URL vào `index.html` + `data.js` (đang là `#`)
- Test trên Safari (backdrop-filter compatibility)
- Thêm meta tags OG cho preview khi share link
- Có thể thêm CV download button trong hero
- Nếu deploy online: thêm `<meta name="description">` cho SEO

## File quan trọng cần biết
- [CLAUDE.md](CLAUDE.md) — onboarding doc cho session mới
- [html/portfolio/index.html](html/portfolio/index.html) — entry point
- [html/portfolio/js/data.js](html/portfolio/js/data.js) — sửa nội dung projects
- [html/portfolio/js/i18n.js](html/portfolio/js/i18n.js) — sửa bản dịch
