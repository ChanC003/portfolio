'use strict';

const TRANSLATIONS = {
  en: {
    // Navbar
    'nav.about':    'About',
    'nav.stack':    'Stack',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',
    'nav.hire':     'Hire me',

    // Hero
    'hero.badge':   'Open to opportunities',
    'hero.title1':  'Building data systems',
    'hero.title2':  'that actually work',
    'hero.sub':     '2 years turning raw event streams, messy CSVs, and legacy SQL into production pipelines — from Kafka ingestion to BI dashboards and AI-powered analytics. Ready for the AI-native data stack.',
    'hero.cta1':    'View Projects',
    'hero.cta2':    'Get in touch',
    'hero.stat1.val':   '5',
    'hero.stat1.label': 'End-to-end projects',
    'hero.stat2.val':   '2yr',
    'hero.stat2.label': 'Experience',
    'hero.stat3.val':   '8+',
    'hero.stat3.label': 'Tools & frameworks',
    'hero.photo.badge': 'Open to work',

    // About strip
    'about.block1.title': 'Data Engineering',
    'about.block1.desc':  'Pipelines, orchestration, CDC, streaming — built to run at 3 AM without waking anyone up.',
    'about.block2.title': 'Analytics',
    'about.block2.desc':  'From dbt models to Power BI dashboards — metrics that stakeholders actually trust.',
    'about.block3.title': 'AI-Augmented',
    'about.block3.desc':  'LLM-powered NL-to-SQL, semantic layer querying — bridging data and the AI era.',

    // Stack section
    'stack.tag':   'Tech Stack',
    'stack.title': 'Tools I build with',

    // Projects section
    'projects.tag':   'Projects',
    'projects.title': 'End-to-end work',
    'projects.sub':   'Each project is production-mirrored — not toy examples.',
    'filter.all':         'All',
    'filter.engineering': 'Data Engineering',
    'filter.analytics':   'Analytics',
    'filter.ai':          'AI / ML',
    'filter.realtime':    'Real-time',

    // Contact
    'contact.tag':   'Contact',
    'contact.title': "Let's build something together",
    'contact.sub':   'Open to Data Engineer, Analytics Engineer, Data Analyst, or Data Governance roles. Remote or Ha Noi.',
    'contact.github':   'GitHub',
    'contact.linkedin': 'LinkedIn',

    // Footer
    'footer.role': 'Data Engineer & Analyst',
    'footer.city': 'Ha Noi, Vietnam',

    // Modal
    'modal.arch':        'Architecture',
    'modal.highlights':  'Key Engineering Decisions',
    'modal.stack':       'Tech Stack',
    'modal.github':      'GitHub',
    'modal.demo':        'Live Demo',
    'modal.screenshots': 'Screenshots',
    'card.view':         'View details →',
    'card.featured':     'Featured',
  },

  vi: {
    // Navbar
    'nav.about':    'Giới thiệu',
    'nav.stack':    'Công nghệ',
    'nav.projects': 'Dự án',
    'nav.contact':  'Liên hệ',
    'nav.hire':     'Tuyển dụng',

    // Hero
    'hero.badge':   'Đang tìm cơ hội mới',
    'hero.title1':  'Xây dựng hệ thống dữ liệu',
    'hero.title2':  'thực sự hoạt động được',
    'hero.sub':     '2 năm kinh nghiệm xử lý event stream, CSV lộn xộn và SQL legacy thành pipeline production — từ Kafka ingestion đến BI dashboard và AI analytics. Sẵn sàng cho data stack thế hệ AI.',
    'hero.cta1':    'Xem dự án',
    'hero.cta2':    'Liên hệ ngay',
    'hero.stat1.val':   '5',
    'hero.stat1.label': 'Dự án thực tế',
    'hero.stat2.val':   '2 năm',
    'hero.stat2.label': 'Kinh nghiệm',
    'hero.stat3.val':   '8+',
    'hero.stat3.label': 'Công cụ & framework',
    'hero.photo.badge': 'Sẵn sàng làm việc',

    // About strip
    'about.block1.title': 'Data Engineering',
    'about.block1.desc':  'Pipeline, orchestration, CDC, streaming — xây để chạy ổn lúc 3 giờ sáng mà không ai phải thức dậy.',
    'about.block2.title': 'Analytics',
    'about.block2.desc':  'Từ dbt model đến Power BI dashboard — số liệu mà stakeholder thực sự tin tưởng.',
    'about.block3.title': 'Ứng dụng AI',
    'about.block3.desc':  'NL-to-SQL bằng LLM, truy vấn semantic layer — kết nối dữ liệu với kỷ nguyên AI.',

    // Stack section
    'stack.tag':   'Công nghệ',
    'stack.title': 'Công cụ tôi dùng',

    // Projects section
    'projects.tag':   'Dự án',
    'projects.title': 'Công việc thực tế',
    'projects.sub':   'Mỗi dự án phản ánh môi trường production thực tế — không phải ví dụ đơn giản.',
    'filter.all':         'Tất cả',
    'filter.engineering': 'Data Engineering',
    'filter.analytics':   'Analytics',
    'filter.ai':          'AI / ML',
    'filter.realtime':    'Thời gian thực',

    // Contact
    'contact.tag':   'Liên hệ',
    'contact.title': 'Cùng xây dựng điều gì đó',
    'contact.sub':   'Tìm kiếm vị trí Data Engineer, Analytics Engineer, Data Analyst hoặc Data Governance. Remote hoặc Hà Nội.',
    'contact.github':   'GitHub',
    'contact.linkedin': 'LinkedIn',

    // Footer
    'footer.role': 'Data Engineer & Analyst',
    'footer.city': 'Hà Nội, Việt Nam',

    // Modal
    'modal.arch':        'Kiến trúc hệ thống',
    'modal.highlights':  'Quyết định kỹ thuật quan trọng',
    'modal.stack':       'Công nghệ sử dụng',
    'modal.github':      'GitHub',
    'modal.demo':        'Xem Demo',
    'modal.screenshots': 'Ảnh demo',
    'card.view':         'Xem chi tiết →',
    'card.featured':     'Nổi bật',
  },
};

const PROJECT_TRANSLATIONS = {
  en: {
    'banking-pipeline': {
      title:    'End-to-End Real-Time Banking Pipeline',
      tagline:  'OLTP → CDC → Warehouse → BI in a single production-grade stack',
      desc:     'Production-mirrored banking data system — secure OLTP transactions flow through Debezium CDC into Kafka, land in Snowflake, are modeled with dbt, orchestrated by Airflow, and visualized in Power BI. End-to-end CI/CD included.',
      highlights: [
        'Zero-downtime CDC with Debezium capturing row-level changes from PostgreSQL WAL',
        'Kafka topics partitioned by account type for parallel consumer throughput',
        'dbt staging → intermediate → mart layers with data contract tests',
        'Airflow DAGs with retry logic and SLA alerts via Slack webhook',
        'CI/CD pipeline: dbt test on PR, deploy to Snowflake prod on merge',
        'Power BI incremental refresh with DirectQuery mode for real-time tiles',
      ],
    },
    'logistics-platform': {
      title:    'Logistics Analytics Platform',
      tagline:  '59M synthetic rows → DuckDB → dbt → Airflow → Metabase dashboards in one docker-compose',
      desc:     'End-to-end logistics analytics platform — 59.4M synthetic rows (11 tables) modeled on a Vietnamese 3PL network. Python generator → raw Parquet → DuckDB file warehouse → dbt 3-layer transform (88 tests PASS) → Airflow daily DAG 5/5 tasks → 4 Metabase dashboards (KPI, Hub Performance, SLA Analysis, COD Reconciliation). Full stack with one docker-compose up.',
      highlights: [
        '59.4M synthetic rows across 11 tables — Vietnamese 3PL patterns: seasonality (Tet/Nov-Dec peak), SLA breach 3-15%, dirty data at 1-16% with 3-tier severity',
        'DuckDB file-based warehouse (~5.1 GB) — star schema with 6 dims + 5 facts, vectorized columnar queries on 5M+ rows in seconds',
        'dbt 3-layer transform: staging (11 views, dedup/quarantine) → core (11 tables) → mart (5 pre-aggregated tables), 89 tests (88 PASS / 1 WARN by design)',
        'Airflow DAG logistics_daily: dbt_seed → dbt_run → dbt_test → dbt_snapshot → quality_check (5/5 PASS, ~3 min total)',
        'Metabase v0.52.9 + MotherDuck DuckDB driver (glibc custom Docker image) — 4 dashboards live at localhost:3000 with real data',
        'Data quality gate: Python assertions on 5 mart tables (row count + null key) — DAG fails if mart data corrupted',
        'Full stack single-command: docker-compose up spins airflow-db + airflow-init + webserver + scheduler + metabase',
      ],
    },
    'ai-analytics-assistant': {
      title:    'AI Analytics Assistant',
      tagline:  'Live crypto data → streaming pipeline → ask in plain English → SQL → charts',
      desc:     'A real-time data platform: a crawler streams live crypto market data through Kafka into a MinIO data lake and a PostgreSQL warehouse, fed by always-on producer/consumer containers. On top sits a multi-LLM NL2SQL assistant — ask a question in plain English, it generates SQL, runs it read-only, and returns chart-ready results. Swap the LLM (Groq / Claude / Gemini / OpenAI / DeepSeek / Ollama) right from the UI.',
      highlights: [
        'Real-time streaming ingest: CoinGecko → Kafka (KRaft) → consumer → MinIO data lake + Postgres warehouse, all running 24/7 in Docker',
        'Multi-LLM, switchable from the UI — Groq / Claude / Gemini / OpenAI / DeepSeek / Ollama via a provider registry + factory',
        'Schema-aware prompting: injects live table DDL + sample rows + time-series hints so generated SQL handles "now" vs "over time"',
        'Two-layer SQL safety: a static guard rejects anything but a single SELECT, and queries run as a least-privilege read-only DB role',
        'Realtime analytics dashboard: auto-refreshing KPIs + market-cap / movers / price-trend / volume / sentiment charts',
        'Result auto-charting + one-click "Explain SQL" in plain language',
      ],
    },
    'hr-analytics-platform': {
      title:    'HR Analytics Platform',
      tagline:  'People data → insight → action — workforce analytics from hire to exit',
      desc:     'End-to-end HR analytics platform on 10,000 synthetic employees — PostgreSQL OLTP → MySQL warehouse (incremental watermark load), dbt dimensional model (SCD2, 18 models / 53 tests), XGBoost attrition model with SHAP explainability + reliability validation (out-of-time / CV / baseline), GHN-style HTML dashboard, Airflow daily DAG with a dbt-test quality gate, plus GitHub Actions CI and a live GitHub Pages demo. All 8/8 phases complete.',
      highlights: [
        'Synthetic dataset: 10,000 employees × 3 years (fixed seed) — hires, quarterly reviews, salary changes, exits with causal signal',
        'dbt SCD Type 2 dim_employee, point-in-time correct — 18 models, 53 data-quality tests (incl. valid_to ≥ valid_from guard)',
        'XGBoost attrition classifier, AUC-ROC 0.71 — validated: out-of-time 0.695, CV 0.718±0.007, LogReg baseline, calibration',
        'SHAP top-3 risk drivers per employee — "why might this person leave?" explainable to HR',
        'GHN-style dashboard: 2 tabs / 5 sections, filters matched to data grain, Analysis + Ops Recommendations react to filters',
        'Airflow DAG hr_daily_pipeline — dbt_test as quality gate: on failure the pipeline stops, no bad data published',
        'GitHub Actions CI: ruff + pytest + JS tests + replay of the whole pipeline (generate→dbt→ML) on every push',
        'Real deployment: green cloud CI on every push + public dashboard via GitHub Pages — a live demo link that opens straight in the browser',
      ],
    },
  },

  vi: {
    'banking-pipeline': {
      title:    'Pipeline Ngân Hàng Thời Gian Thực',
      tagline:  'OLTP → CDC → Warehouse → BI trên một stack production hoàn chỉnh',
      desc:     'Hệ thống dữ liệu ngân hàng mô phỏng production — giao dịch OLTP đi qua Debezium CDC vào Kafka, lưu vào Snowflake, được model bằng dbt, điều phối bởi Airflow và hiển thị trên Power BI. CI/CD end-to-end.',
      highlights: [
        'CDC không downtime với Debezium bắt thay đổi cấp dòng từ PostgreSQL WAL',
        'Kafka topic phân vùng theo loại tài khoản để xử lý song song',
        'dbt: staging → intermediate → mart với data contract tests',
        'Airflow DAG có retry và cảnh báo SLA qua Slack webhook',
        'CI/CD: dbt test khi tạo PR, deploy Snowflake prod khi merge',
        'Power BI incremental refresh với DirectQuery cho tile thời gian thực',
      ],
    },
    'logistics-platform': {
      title:    'Nền Tảng Analytics Logistics',
      tagline:  '59M dòng dữ liệu tổng hợp → DuckDB → dbt → Airflow → Metabase trong một docker-compose',
      desc:     'Platform analytics logistics đầu cuối — 59.4M dòng tổng hợp (11 bảng) mô phỏng mạng 3PL Việt Nam. Python generator → Parquet thô → kho DuckDB → dbt 3 lớp transform (88 test PASS) → Airflow DAG 5/5 task → 4 dashboard Metabase (KPI, Hiệu suất Hub, Phân tích SLA, Đối soát COD). Toàn bộ stack chạy bằng một lệnh docker-compose up.',
      highlights: [
        '59.4M dòng tổng hợp trên 11 bảng — mô phỏng 3PL Việt Nam: tính mùa vụ (Tết/cao điểm tháng 11-12), vi phạm SLA 3-15%, dirty data 1-16% với 3 cấp độ',
        'Kho DuckDB dạng file (~5.1 GB) — star schema 6 dim + 5 fact, truy vấn columnar vectorized trên 5M+ dòng trong vài giây',
        'dbt 3 lớp: staging (11 view, dedup/quarantine) → core (11 bảng) → mart (5 bảng pre-aggregated), 89 test (88 PASS / 1 WARN có chủ đích)',
        'Airflow DAG logistics_daily: dbt_seed → dbt_run → dbt_test → dbt_snapshot → quality_check (5/5 PASS, ~3 phút)',
        'Metabase v0.52.9 + MotherDuck DuckDB driver (Docker image Ubuntu/glibc) — 4 dashboard live tại localhost:3000 với dữ liệu thật',
        'Quality gate: Python assertion trên 5 bảng mart (row count + null key) — DAG dừng nếu dữ liệu mart bị lỗi',
        'Full stack một lệnh: docker-compose up khởi động airflow-db + airflow-init + webserver + scheduler + metabase',
      ],
    },
    'ai-analytics-assistant': {
      title:    'Trợ Lý Analytics Bằng AI',
      tagline:  'Data crypto realtime → pipeline streaming → hỏi tiếng người → SQL → biểu đồ',
      desc:     'Nền tảng dữ liệu thời gian thực: crawler stream giá crypto qua Kafka vào data lake MinIO và warehouse PostgreSQL, chạy bằng các container producer/consumer 24/7. Bên trên là trợ lý NL2SQL đa-LLM — hỏi bằng tiếng người, AI sinh SQL, chạy read-only và trả kết quả kèm biểu đồ. Đổi LLM (Groq / Claude / Gemini / OpenAI / DeepSeek / Ollama) ngay trên giao diện.',
      highlights: [
        'Streaming ingest realtime: CoinGecko → Kafka (KRaft) → consumer → MinIO data lake + Postgres warehouse, tất cả chạy 24/7 trong Docker',
        'Đa-LLM, đổi ngay trên UI — Groq / Claude / Gemini / OpenAI / DeepSeek / Ollama qua registry + factory',
        'Prompt hiểu schema: inject DDL + sample row + gợi ý time-series để SQL xử lý đúng "hiện tại" vs "theo thời gian"',
        'An toàn SQL 2 lớp: guard tĩnh chỉ cho 1 câu SELECT, và query chạy bằng role DB chỉ-đọc least-privilege',
        'Dashboard phân tích realtime: KPI auto-refresh + chart market-cap / biến động / xu hướng giá / volume / sentiment',
        'Tự chọn chart + nút "Explain SQL" giải thích câu lệnh bằng tiếng người',
      ],
    },
    'hr-analytics-platform': {
      title:    'Nền Tảng HR Analytics',
      tagline:  'Dữ liệu nhân sự → insight → hành động — phân tích workforce từ tuyển dụng đến nghỉ việc',
      desc:     'Nền tảng HR analytics end-to-end trên 10,000 nhân viên tổng hợp — PostgreSQL OLTP → MySQL warehouse (load tăng dần theo watermark), dimensional model bằng dbt (SCD2, 18 model / 53 test), mô hình dự báo nghỉ việc XGBoost có giải thích SHAP + kiểm chứng độ tin cậy (out-of-time / CV / baseline), dashboard HTML kiểu GHN, Airflow DAG hàng ngày với dbt-test làm quality gate, cùng GitHub Actions CI và demo public qua GitHub Pages. Hoàn chỉnh 8/8 phase.',
      highlights: [
        'Dataset tổng hợp: 10,000 nhân viên × 3 năm (seed cố định) — tuyển dụng, review quý, thay đổi lương, nghỉ việc với tín hiệu nhân quả',
        'dbt SCD Type 2 dim_employee point-in-time correct — 18 model, 53 test chất lượng (gồm guard valid_to ≥ valid_from)',
        'Classifier XGBoost dự báo nghỉ việc AUC-ROC 0.71 — đã validate: out-of-time 0.695, CV 0.718±0.007, baseline LogReg, calibration',
        'SHAP top-3 yếu tố rủi ro mỗi nhân viên — "tại sao người này có thể nghỉ?" giải thích được cho HR',
        'Dashboard kiểu GHN: 2 tab / 5 section, filter ăn khớp grain data, Phân tích + Khuyến nghị vận hành động theo bộ lọc',
        'Airflow DAG hr_daily_pipeline — dbt_test làm quality gate: data fail → pipeline dừng, không publish data lỗi',
        'GitHub Actions CI: ruff + pytest + JS test + chạy lại cả pipeline (generate→dbt→ML) mỗi push',
        'Deploy thật: CI cloud xanh mỗi push + dashboard public qua GitHub Pages — link demo sống mở trực tiếp trên trình duyệt',
      ],
    },
  },
};
