'use strict';

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  currentLang = lang;
  applyLangAndRerender(lang);
  updateLangBtn(lang);
}

function t(key) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
  return dict[key] || TRANSLATIONS['en'][key] || key;
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
}

function applyLangAndRerender(lang) {
  applyLang(lang);
  renderProjects();
  applyFilterVisibility();
  if (typeof refreshChatbotLang === 'function') refreshChatbotLang();
}

function updateLangBtn(lang) {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.querySelector('.lang-active').textContent   = lang === 'vi' ? 'VI' : 'EN';
    btn.querySelector('.lang-inactive').textContent = lang === 'vi' ? 'EN' : 'VI';
  });
}

function initLangToggle() {
  document.getElementById('langToggle').addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'vi' : 'en');
  });
}
