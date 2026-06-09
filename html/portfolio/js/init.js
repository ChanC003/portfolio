'use strict';

(function init() {
  // Restore saved language preference first
  currentLang = getLang();

  renderStack();
  renderProjects();         // render cards (always visible, no fade-in class)
  applyLang(currentLang);   // translate static nodes
  updateLangBtn(currentLang);

  // If saved lang is not EN, re-render cards in correct language
  if (currentLang !== 'en') {
    renderProjects();
    applyFilterVisibility();
  }

  initNavBurger();
  initFilterTabs();
  initProjectCards();
  initModal();
  initSmoothNavLinks();
  initActiveNavHighlight();
  initRobot();
  initChatbot();

  // Wire all .lang-toggle buttons (desktop + mobile)
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(currentLang === 'en' ? 'vi' : 'en');
    });
  });

  requestAnimationFrame(() => {
    setTimeout(observeFadeIns, 50);
  });
})();
