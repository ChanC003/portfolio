'use strict';

/*
 * Chatbot logic — reads KB_DATA from kb-data.js
 * To update answers, edit kb-data.js (the SOURCE).
 * knowledge-base.md is the human-readable spec; kb-data.js is the runtime data.
 */

function chatKB() {
  // Build view per current language from KB_DATA
  const lang = (typeof currentLang !== 'undefined' && currentLang === 'vi') ? 'vi' : 'en';
  return {
    greeting:    KB_DATA.greeting[lang],
    suggestions: KB_DATA.suggestions[lang],
    fallback:    KB_DATA.fallback[lang],
    rules:       KB_DATA.rules.map(r => ({ match: r.match, reply: r[lang] || r.en })),
  };
}

function chatRespond(text) {
  const q = text.toLowerCase().trim();
  const kb = chatKB();
  for (const rule of kb.rules) {
    for (const kw of rule.match) {
      if (q.includes(kw.toLowerCase())) return rule.reply;
    }
  }
  return kb.fallback;
}

function chatAppend(role, text, opts = {}) {
  const body = document.getElementById('chatBody');
  if (!body) return;
  const wrap = document.createElement('div');
  wrap.className = 'chat-msg chat-msg-' + role;
  if (opts.typing) wrap.classList.add('chat-msg-typing');

  if (role === 'bot') {
    wrap.innerHTML = `
      <div class="chat-msg-avatar">
        <div class="chat-fab-eye chat-fab-eye-left"></div>
        <div class="chat-fab-eye chat-fab-eye-right"></div>
      </div>
      <div class="chat-msg-bubble">${opts.typing ? '<span class="dot"></span><span class="dot"></span><span class="dot"></span>' : formatReply(text)}</div>`;
  } else {
    wrap.innerHTML = `<div class="chat-msg-bubble">${escapeHtml(text)}</div>`;
  }
  body.appendChild(wrap);
  body.scrollTop = body.scrollHeight;
  return wrap;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

// Bot replies support \n + simple **bold** markdown
function formatReply(s) {
  return escapeHtml(s)
    .replace(/\n/g, '<br>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function renderChatSuggestions() {
  const wrap = document.getElementById('chatSuggestions');
  if (!wrap) return;
  const kb = chatKB();
  wrap.innerHTML = kb.suggestions.map(s =>
    `<button class="chat-suggest" data-q="${escapeHtml(s)}">${escapeHtml(s)}</button>`
  ).join('');
}

function chatSend(text) {
  if (!text || !text.trim()) return;
  chatAppend('user', text);

  const typingEl = chatAppend('bot', '', { typing: true });

  setTimeout(() => {
    typingEl.remove();
    chatAppend('bot', chatRespond(text));
  }, 600 + Math.random() * 500);
}

function chatGreet() {
  const body = document.getElementById('chatBody');
  if (!body) return;
  body.innerHTML = '';
  chatAppend('bot', chatKB().greeting);
  renderChatSuggestions();
}

function initChatbot() {
  const fab      = document.getElementById('chatFab');
  const panel    = document.getElementById('chatPanel');
  const closeBtn = document.getElementById('chatClose');
  const form     = document.getElementById('chatForm');
  const input    = document.getElementById('chatInput');
  const suggest  = document.getElementById('chatSuggestions');

  if (!fab || !panel) return;

  input.placeholder = currentLang === 'vi' ? 'Hỏi gì đó về Chang...' : 'Ask anything about Chang...';

  let firstOpen = true;
  fab.addEventListener('click', () => {
    panel.classList.add('open');
    fab.classList.add('hidden');
    if (firstOpen) {
      chatGreet();
      firstOpen = false;
    }
    setTimeout(() => input.focus(), 250);
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.remove('open');
    fab.classList.remove('hidden');
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    chatSend(text);
  });

  suggest.addEventListener('click', e => {
    const btn = e.target.closest('.chat-suggest');
    if (!btn) return;
    chatSend(btn.dataset.q);
  });
}

function refreshChatbotLang() {
  const panel = document.getElementById('chatPanel');
  const input = document.getElementById('chatInput');
  if (input) input.placeholder = currentLang === 'vi' ? 'Hỏi gì đó về Chang...' : 'Ask anything about Chang...';
  if (panel && panel.classList.contains('open')) {
    chatGreet();
  }
}
