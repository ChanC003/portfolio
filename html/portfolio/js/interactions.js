'use strict';

function initNavBurger() {
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

function initFilterTabs() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilterVisibility();
    });
  });
}

function openModal(projectId) {
  activeProjectId = projectId;
  renderModal(projectId);
  document.getElementById('modalOverlay').classList.add('open');
  document.documentElement.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.documentElement.classList.remove('modal-open');
  activeProjectId = null;
}

function initProjectCards() {
  document.getElementById('projectsGrid').addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    openModal(card.dataset.id);
  });
}

function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function initPipelineAnimation() {
  const allNodes = document.querySelectorAll('.pipe-node');
  if (!allNodes.length) return;

  let currentLayer = 0;
  const totalLayers = PIPELINE_LAYERS.length;

  function tick() {
    allNodes.forEach(n => {
      const layer = parseInt(n.dataset.layer, 10);
      n.classList.remove('active', 'done');
      if (layer < currentLayer) n.classList.add('done');
      if (layer === currentLayer) n.classList.add('active');
    });
    currentLayer = (currentLayer + 1) % (totalLayers + 1);
  }

  tick();
  pipelineTimer = setInterval(tick, 900);
}

function initSmoothNavLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initRobot() {
  const robot = document.getElementById('navRobot');
  if (!robot) return;

  const messages = [
    'Hi! I\'m Changie 🤖',
    'Need data? I got you! 📊',
    'Beep boop... analyzing... ⚡',
    'Powered by Chang PH 💚',
    'Hire her, you won\'t regret 😉',
    'AI + Data = ❤️',
  ];
  let msgIdx = 0;

  robot.addEventListener('click', () => {
    msgIdx = (msgIdx + 1) % messages.length;
    showRobotBubble(robot, messages[msgIdx]);
    robot.style.animation = 'none';
    robot.offsetHeight;
    robot.style.animation = 'robotFloat 0.4s ease-in-out 3, robotFloat 2.8s ease-in-out infinite 1.2s';
  });
}

function showRobotBubble(robot, text) {
  let bubble = document.getElementById('robotBubble');
  if (!bubble) {
    bubble = document.createElement('div');
    bubble.id = 'robotBubble';
    bubble.className = 'robot-bubble';
    document.body.appendChild(bubble);
  }
  bubble.textContent = text;
  bubble.classList.add('show');

  // Anchor bubble's LEFT edge to robot center (no -50% shift)
  const rect = robot.getBoundingClientRect();
  const robotCenter = rect.left + rect.width / 2;
  // Position left edge a bit left of robot center so arrow aligns
  bubble.style.left = (robotCenter - 18) + 'px';
  bubble.style.top  = (rect.bottom + 10) + 'px';

  clearTimeout(bubble._timer);
  bubble._timer = setTimeout(() => bubble.classList.remove('show'), 2500);
}

function initActiveNavHighlight() {
  const sections = ['about', 'stack', 'projects', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
  const links    = document.querySelectorAll('.nav-link');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { threshold: 0.3 });

  sections.forEach(s => obs.observe(s));
}
