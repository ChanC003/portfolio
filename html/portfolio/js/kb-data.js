'use strict';

/*
 * KNOWLEDGE BASE — Source of truth cho chatbot Changie
 *
 * CÁCH SỬA:
 * - Mỗi entry là 1 chủ đề: { match: [keywords], en: '...', vi: '...' }
 * - "match" = keyword chatbot dùng để nhận diện câu hỏi (lowercase, dùng substring match)
 * - "en" / "vi" = câu trả lời, hỗ trợ \n để xuống dòng
 * - Thứ tự rule quan trọng: rule cụ thể đặt TRƯỚC rule chung
 * - Đồng bộ với knowledge-base.md
 */

const KB_DATA = {
  // ========== PERSONAL ==========
  greeting: {
    en: "Hi! I'm Changie 🤖 — Chang's AI assistant. Ask me anything about her experience, projects, or how to hire her!",
    vi: "Xin chào! Em là Changie 🤖 — trợ lý AI của Chang. Hỏi em bất cứ điều gì về kinh nghiệm, dự án, hoặc cách liên hệ với Chang nhé!",
  },

  suggestions: {
    en: ['Who is Chang?', 'What tech does she use?', 'Tell me about her projects', 'How to hire her?'],
    vi: ['Chang là ai?', 'Dùng công nghệ gì?', 'Có dự án nào?', 'Cách liên hệ?'],
  },

  fallback: {
    en: "Hmm, I'm not sure about that yet. Try asking about Chang's experience, projects, tech stack, or how to contact her — or email her directly at huyenchang2k03@gmail.com 💌",
    vi: "Hmm, em chưa rõ câu này lắm. Hãy thử hỏi về kinh nghiệm, dự án, công nghệ hoặc cách liên hệ — hoặc email trực tiếp huyenchang2k03@gmail.com nhé 💌",
  },

  rules: [
    // ---------- 1. Personal Info ----------
    {
      match: ['who is chang', 'who are you', 'about chang', 'introduce', 'background',
              'chang là ai', 'giới thiệu', 'bạn là ai', 'em là ai'],
      en: "Chang Pham Huyen (Phạm Huyền Chang) is a Data Analyst & emerging Data Engineer based in Hà Nội, Việt Nam.\n\n📅 Born 02/2003\n🎓 Just graduated from Academy of Finance (GPA 3.49) in Management Information Systems\n💼 Currently working at Giao Hàng Nhanh (GHN) Express as a Data Analyst\n📍 Hà Nội — open to remote roles\n📧 huyenchang2k03@gmail.com",
      vi: "Chang Phạm Huyền (Chang Pham Huyen) là Data Analyst & Data Engineer mới nổi, sống tại Hà Nội.\n\n📅 Sinh 02/2003\n🎓 Vừa tốt nghiệp Học Viện Tài Chính (GPA 3.49), ngành Hệ Thống Thông Tin Quản Lý\n💼 Hiện làm Data Analyst tại Giao Hàng Nhanh (GHN) Express\n📍 Hà Nội — sẵn sàng làm remote\n📧 huyenchang2k03@gmail.com",
    },

    {
      match: ['age', 'old', 'birth', 'born', 'tuổi', 'sinh năm', 'ngày sinh'],
      en: "Chang was born in February 2003 — currently 23 years old.",
      vi: "Chang sinh tháng 2 năm 2003 — hiện 23 tuổi.",
    },

    {
      match: ['phone', 'số điện thoại', 'sđt', 'gọi'],
      en: "📞 Phone: 0986 876 892\n📧 Email is usually faster though: huyenchang2k03@gmail.com",
      vi: "📞 Số điện thoại: 0986 876 892\n📧 Email thường nhanh hơn: huyenchang2k03@gmail.com",
    },

    // ---------- 2. Education ----------
    {
      match: ['education', 'university', 'school', 'degree', 'graduate', 'gpa',
              'học vấn', 'trường', 'đại học', 'tốt nghiệp', 'điểm'],
      en: "🎓 Education:\n• Academy of Finance (Học Viện Tài Chính), Hà Nội\n• Major: Management Information Systems (Hệ Thống Thông Tin Quản Lý)\n• Years: 2021 – 2025\n• GPA: 3.49 / 4.0\n\nA strong analytical foundation combining business + technology — exactly the bridge data roles need.",
      vi: "🎓 Học vấn:\n• Học Viện Tài Chính, Hà Nội\n• Ngành: Hệ Thống Thông Tin Quản Lý\n• Khóa: 2021 – 2025\n• GPA: 3.49 / 4.0\n\nNền tảng phân tích vững kết hợp business + công nghệ — chính là cây cầu mà vị trí data cần.",
    },

    // ---------- 3. Work Experience ----------
    {
      match: ['experience', 'work', 'job', 'company', 'ghn', 'giao hang nhanh',
              'kinh nghiệm', 'công việc', 'làm việc', 'công ty', 'ở đâu làm'],
      en: "💼 Currently working at Giao Hàng Nhanh (GHN) Express as a Data Analyst since August 2025.\n📍 Location: Long Biên, Hà Nội\n\nGHN is one of Vietnam's largest logistics companies — Chang works on operational analytics covering delivery performance, hub efficiency, and SLA monitoring across the nationwide network.",
      vi: "💼 Hiện làm Data Analyst tại Giao Hàng Nhanh (GHN) Express từ tháng 8/2025.\n📍 Địa điểm: Long Biên, Hà Nội\n\nGHN là một trong những công ty logistics lớn nhất Việt Nam — Chang phụ trách analytics vận hành cho hiệu suất giao hàng, hiệu quả hub, và giám sát SLA toàn mạng lưới.",
    },

    // ---------- 4. Tech Stack ----------
    {
      match: ['tech', 'stack', 'tools', 'skill', 'technology', 'what can',
              'công nghệ', 'kỹ năng', 'biết gì', 'dùng gì'],
      en: "🛠️ Tech stack:\n\n**Data Engineering:**\n• Streaming: Kafka, Debezium, Kafka Connect\n• Orchestration: Airflow, dbt Core, dbt Cloud\n• Warehouse: Snowflake, PostgreSQL, ClickHouse, DuckDB, Iceberg\n• Languages: SQL (5/5), Python (4/5)\n\n**Analytics & BI:**\n• Power BI (DAX, M, incremental refresh)\n• Grafana, Metabase\n\n**AI / ML:**\n• OpenAI API (GPT-4, function calling)\n• LangChain, Ollama (local LLM)\n• Streamlit, Gradio\n\n**DevOps:** Docker, Git, GitHub Actions, Linux CLI",
      vi: "🛠️ Stack công nghệ:\n\n**Data Engineering:**\n• Streaming: Kafka, Debezium, Kafka Connect\n• Orchestration: Airflow, dbt Core, dbt Cloud\n• Warehouse: Snowflake, PostgreSQL, ClickHouse, DuckDB, Iceberg\n• Ngôn ngữ: SQL (5/5), Python (4/5)\n\n**Analytics & BI:**\n• Power BI (DAX, M, incremental refresh)\n• Grafana, Metabase\n\n**AI / ML:**\n• OpenAI API (GPT-4, function calling)\n• LangChain, Ollama (local LLM)\n• Streamlit, Gradio\n\n**DevOps:** Docker, Git, GitHub Actions, Linux CLI",
    },

    {
      match: ['sql', 'database query'],
      en: "SQL is Chang's strongest skill (5/5) — comfortable with window functions, CTEs, query optimization, partition pruning, and dialect-specific syntax (Trino, BigQuery, Snowflake, PostgreSQL).",
      vi: "SQL là kỹ năng mạnh nhất của Chang (5/5) — thành thạo window function, CTE, tối ưu query, partition pruning, và syntax theo từng engine (Trino, BigQuery, Snowflake, PostgreSQL).",
    },

    {
      match: ['python', 'pandas'],
      en: "Python (4/5): pandas for data wrangling, FastAPI for lightweight APIs, requests/httpx for ingestion scripts, and LangChain for AI integrations.",
      vi: "Python (4/5): pandas xử lý data, FastAPI cho API nhẹ, requests/httpx cho script ingestion, và LangChain cho tích hợp AI.",
    },

    {
      match: ['dbt'],
      en: "dbt (4/5) — proficient with macros, custom generic tests, exposures, snapshots, and incremental models. Layered architecture: staging → intermediate → mart.",
      vi: "dbt (4/5) — thành thạo macros, custom generic tests, exposures, snapshots, incremental models. Architecture phân lớp: staging → intermediate → mart.",
    },

    // ---------- 5. Projects ----------
    {
      match: ['project', 'portfolio', 'show me', 'what.*built',
              'dự án', 'làm gì', 'đã làm', 'xem'],
      en: "Chang has 4 end-to-end portfolio projects:\n\n1️⃣ **Real-Time Banking Pipeline** — PostgreSQL → Kafka CDC → Snowflake → dbt → Power BI\n2️⃣ **Logistics Analytics Platform** — DuckDB + dbt + Airflow + Power BI\n3️⃣ **AI Analytics Assistant** — NL→SQL with OpenAI/Ollama + Streamlit\n4️⃣ **Data Governance & Quality Platform** — dbt contracts + Great Expectations + Apache Atlas\n\n👆 Click any card above to see architecture diagrams + key engineering decisions!",
      vi: "Chang có 4 dự án portfolio end-to-end:\n\n1️⃣ **Pipeline Ngân Hàng Thời Gian Thực** — PostgreSQL → Kafka CDC → Snowflake → dbt → Power BI\n2️⃣ **Nền Tảng Analytics Logistics** — DuckDB + dbt + Airflow + Power BI\n3️⃣ **Trợ Lý Analytics Bằng AI** — NL→SQL với OpenAI/Ollama + Streamlit\n4️⃣ **Nền Tảng Quản Trị & Chất Lượng Dữ Liệu** — dbt contracts + Great Expectations + Apache Atlas\n\n👆 Click card phía trên để xem kiến trúc + quyết định kỹ thuật!",
    },

    {
      match: ['banking', 'kafka', 'cdc', 'debezium', 'snowflake', 'ngân hàng'],
      en: "🏦 **Real-Time Banking Pipeline** — Chang's flagship project:\n\n• Production-grade CDC with Debezium capturing PostgreSQL WAL\n• Kafka topics partitioned by account type for parallel throughput\n• Snowflake as the warehouse with dbt staging → intermediate → mart\n• Airflow orchestration with SLA alerts via Slack webhook\n• CI/CD: dbt test on every PR, deploy to Snowflake prod on merge\n• Power BI DirectQuery for real-time tiles\n\nEnd-to-end latency: transaction → dashboard in <30 seconds.",
      vi: "🏦 **Pipeline Ngân Hàng Thời Gian Thực** — dự án flagship của Chang:\n\n• CDC production-grade với Debezium bắt PostgreSQL WAL\n• Kafka topic phân vùng theo loại tài khoản để xử lý song song\n• Snowflake làm warehouse với dbt staging → intermediate → mart\n• Airflow orchestration kèm SLA alert qua Slack webhook\n• CI/CD: dbt test mỗi PR, deploy Snowflake prod khi merge\n• Power BI DirectQuery cho tile thời gian thực\n\nLatency end-to-end: giao dịch → dashboard dưới 30 giây.",
    },

    {
      match: ['logistics', 'duckdb', 'warehouse', 'delivery', 'ghn project',
              'kho', 'giao hàng', 'sla'],
      en: "📦 **Logistics Analytics Platform** — directly inspired by Chang's work at GHN:\n\n• DuckDB as the analytical engine — 10x faster than SQLite for columnar queries on 5M+ rows\n• dbt models: staging (raw cleanup) → core (fact/dim) → mart (business metrics)\n• SLA breach detection with configurable thresholds per shipping zone\n• Daily Airflow DAG: extract → validate → transform → publish\n• Power BI: hub heatmap, delivery funnel, SLA trend by region\n• Fully Dockerized — single docker-compose command to deploy",
      vi: "📦 **Nền Tảng Analytics Logistics** — lấy cảm hứng trực tiếp từ công việc của Chang tại GHN:\n\n• DuckDB làm engine phân tích — nhanh hơn SQLite 10x cho columnar queries trên 5M+ dòng\n• dbt model: staging (làm sạch) → core (fact/dim) → mart (business metric)\n• Phát hiện vi phạm SLA với ngưỡng cấu hình theo từng vùng giao hàng\n• Airflow DAG hàng ngày: extract → validate → transform → publish\n• Power BI: heatmap hub, funnel giao hàng, xu hướng SLA theo vùng\n• Docker hóa hoàn toàn — 1 lệnh docker-compose để deploy",
    },

    {
      match: ['ai assistant', 'llm', 'gpt', 'openai', 'nl2sql', 'natural language', 'streamlit',
              'trợ lý', 'ngôn ngữ tự nhiên'],
      en: "🤖 **AI Analytics Assistant** — natural language → SQL → answer:\n\n• Schema-aware prompting: injects table DDL + sample rows into LLM context\n• Dual model support — OpenAI GPT-4 for production, Ollama (llama3) for local/offline\n• Query safety layer: read-only executor + SQL injection pattern detection\n• Result auto-charting: LLM decides bar/line/table based on query semantics\n• Conversation memory: follow-up questions retain prior context\n• Streamlit UI with query history, copy-to-clipboard, and SQL explain toggle\n\nThis is Chang's proof that data engineers stay valuable in the AI era — by owning the schema, safety, and trust layer.",
      vi: "🤖 **Trợ Lý Analytics Bằng AI** — câu hỏi tự nhiên → SQL → trả lời:\n\n• Prompt hiểu schema: inject DDL + sample row vào context LLM\n• Hỗ trợ 2 model — GPT-4 cho production, Ollama (llama3) cho local/offline\n• Lớp bảo vệ query: chỉ đọc + phát hiện pattern SQL injection\n• Tự chọn chart: LLM quyết định bar/line/table theo ngữ nghĩa query\n• Bộ nhớ hội thoại: câu follow-up giữ nguyên context cũ\n• Streamlit UI: lịch sử query, copy-to-clipboard, toggle SQL explain\n\nĐây là minh chứng của Chang: data engineer vẫn quý giá trong kỷ nguyên AI — nhờ làm chủ schema, safety và trust layer.",
    },

    {
      match: ['governance', 'data quality', 'lineage', 'great expectations', 'atlas', 'pii',
              'quản trị', 'chất lượng'],
      en: "🛡️ **Data Governance & Quality Platform**:\n\n• Data contracts enforced at ingestion: schema, nullability, value range, referential integrity\n• Great Expectations suites auto-generated from dbt model metadata — zero manual config\n• Column-level lineage via Apache Atlas: source table → transformation → BI field\n• PII scanner classifies sensitive columns (name, phone, email) and flags unmasked exposures\n• Quality score per domain: freshness + completeness + validity → single SLA metric\n• Airflow DAG gates downstream pipelines — bad data quarantined before reaching warehouse",
      vi: "🛡️ **Nền Tảng Quản Trị & Chất Lượng Dữ Liệu**:\n\n• Data contract kiểm soát tại ingestion: schema, null, value range, referential integrity\n• Great Expectations suite tự sinh từ metadata dbt model — không cấu hình thủ công\n• Lineage cấp cột qua Apache Atlas: bảng nguồn → transformation → trường BI\n• PII scanner phân loại cột nhạy cảm (tên, SĐT, email) và cảnh báo khi chưa mask\n• Quality score theo domain: freshness + completeness + validity → 1 SLA metric\n• Airflow DAG chặn pipeline downstream — dữ liệu xấu bị cách ly trước khi vào warehouse",
    },

    // ---------- 6. Career ----------
    {
      match: ['career', 'goal', 'future', 'ambition', 'next role', 'where',
              'mục tiêu', 'hướng đi', 'tương lai', 'vị trí'],
      en: "🎯 Career direction:\n\n**Short-term (1-2y):**\n• Deepen real-time streaming + data platform skills\n• Take ownership of a critical data domain end-to-end\n\n**Long-term (3-5y):**\n• Grow into Senior / Staff Data Engineer or Data Platform Architect\n• Build data products that bridge AI + business\n\n**Open to:** Data Engineer, Analytics Engineer, Data Analyst, Data Governance roles. Industry-agnostic.",
      vi: "🎯 Định hướng nghề nghiệp:\n\n**Ngắn hạn (1-2 năm):**\n• Đào sâu real-time streaming + data platform\n• Làm chủ end-to-end 1 data domain quan trọng\n\n**Dài hạn (3-5 năm):**\n• Tiến lên Senior / Staff Data Engineer hoặc Data Platform Architect\n• Xây data product kết nối AI + business\n\n**Mong muốn:** Data Engineer, Analytics Engineer, Data Analyst, Data Governance. Không kén ngành.",
    },

    // ---------- 7. Contact & Hiring ----------
    {
      match: ['contact', 'email', 'reach', 'hire', 'available', 'job offer',
              'liên hệ', 'tuyển', 'gặp'],
      en: "📬 How to reach Chang:\n\n📧 **Email:** huyenchang2k03@gmail.com (replies within 24h)\n📞 **Phone:** 0986 876 892\n📍 **Location:** Hà Nội, Việt Nam (or fully remote)\n\n**Open to:** Data Engineer, Analytics Engineer, Data Analyst, Data Governance roles\n\nWhen reaching out, please include: company + role title, JD or seniority level, location & work mode, salary range.",
      vi: "📬 Cách liên hệ Chang:\n\n📧 **Email:** huyenchang2k03@gmail.com (phản hồi trong 24h)\n📞 **Điện thoại:** 0986 876 892\n📍 **Địa điểm:** Hà Nội, Việt Nam (hoặc fully remote)\n\n**Vị trí mong muốn:** Data Engineer, Analytics Engineer, Data Analyst, Data Governance\n\nKhi liên hệ, vui lòng ghi rõ: tên công ty + vị trí, JD hoặc level (junior/mid/senior), địa điểm & work mode, mức lương dự kiến.",
    },

    {
      match: ['location', 'where', 'based', 'city', 'remote', 'hanoi',
              'ở đâu', 'địa điểm', 'thành phố', 'hà nội'],
      en: "📍 Chang is based in **Hà Nội, Việt Nam** 🇻🇳 — open to both on-site (Long Biên / Hà Nội area) and fully remote opportunities.",
      vi: "📍 Chang sống tại **Hà Nội, Việt Nam** 🇻🇳 — sẵn sàng cả on-site (Long Biên / khu Hà Nội) lẫn fully remote.",
    },

    {
      match: ['ai market', 'ai impact', 'ai replace', 'worried about ai', 'future of data',
              'ai thay thế', 'lo lắng', 'thị trường ai'],
      en: "Chang views AI as a tool, not a threat. Her AI Analytics Assistant project literally demonstrates the data engineer's edge in the LLM era: LLMs need clean schemas, safety layers, trust infrastructure, lineage — exactly what data engineers build. She's positioning as AI-native, not AI-resistant.",
      vi: "Chang xem AI là công cụ, không phải mối đe dọa. Dự án AI Analytics Assistant chính là minh chứng cho thế mạnh của data engineer trong kỷ nguyên LLM: LLM cần schema sạch, safety layer, trust infrastructure, lineage — đúng những gì data engineer làm ra. Chang định vị là AI-native, không phải AI-resistant.",
    },

    {
      match: ['github', 'code', 'source', 'repository', 'repo'],
      en: "Her GitHub link is in the Contact section below 👇 Each project card also has a GitHub link in its detail modal.",
      vi: "Link GitHub của Chang ở section Liên hệ phía dưới 👇 Mỗi project card cũng có link GitHub trong modal chi tiết.",
    },

    {
      match: ['linkedin'],
      en: "LinkedIn is in the Contact section — feel free to DM her there too 🤝",
      vi: "LinkedIn ở section Liên hệ — bạn có thể nhắn tin trực tiếp 🤝",
    },

    {
      match: ['salary', 'rate', 'compensation', 'price', 'cost', 'lương', 'giá'],
      en: "For salary / contract discussions, please email huyenchang2k03@gmail.com directly — Chang prefers to discuss compensation privately based on role scope and company context.",
      vi: "Trao đổi về lương / hợp đồng vui lòng email trực tiếp huyenchang2k03@gmail.com — Chang ưu tiên thảo luận lương riêng theo phạm vi vị trí và bối cảnh công ty.",
    },

    {
      match: ['cv', 'resume', 'pdf', 'download'],
      en: "A formal CV/resume is available on request. Email huyenchang2k03@gmail.com and Chang will send it within hours.",
      vi: "CV/resume gửi theo yêu cầu. Email huyenchang2k03@gmail.com và Chang sẽ gửi trong vài giờ.",
    },

    {
      match: ['notice period', 'available from', 'when start',
              'bao giờ', 'khi nào bắt đầu'],
      en: "Chang is currently employed full-time at GHN. Standard notice period for transitioning — please discuss timing directly via email.",
      vi: "Chang đang full-time tại GHN. Notice period chuẩn để chuyển việc — vui lòng trao đổi thời gian cụ thể qua email.",
    },

    // ---------- 8. Soft topics ----------
    {
      match: ['hello', 'hi ', 'hey', 'yo ', 'xin chào', 'chào', 'alo'],
      en: "Hello! 👋 What would you like to know about Chang? Try clicking one of the suggestion buttons below, or just ask naturally.",
      vi: "Xin chào! 👋 Bạn muốn biết gì về Chang? Thử click các gợi ý phía dưới, hoặc hỏi tự nhiên gì cũng được.",
    },

    {
      match: ['thank', 'thanks', 'thx', 'cảm ơn', 'cám ơn'],
      en: "You're welcome! 💚 Don't forget to email Chang at huyenchang2k03@gmail.com if you'd like to chat further.",
      vi: "Không có gì! 💚 Đừng quên email Chang tại huyenchang2k03@gmail.com nếu muốn trao đổi thêm.",
    },

    {
      match: ['bye', 'goodbye', 'see you', 'tạm biệt', 'chào tạm biệt'],
      en: "See you! 👋 Reach out anytime at huyenchang2k03@gmail.com.",
      vi: "Tạm biệt! 👋 Liên hệ bất cứ lúc nào qua huyenchang2k03@gmail.com nhé.",
    },
  ],
};
