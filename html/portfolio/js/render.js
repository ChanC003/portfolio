'use strict';

function tProject(id) {
  const dict = typeof PROJECT_TRANSLATIONS !== 'undefined'
    ? (PROJECT_TRANSLATIONS[currentLang] || PROJECT_TRANSLATIONS['en'])
    : {};
  return dict[id] || {};
}

function renderStack() {
  const grid = document.getElementById('stackGrid');
  if (!grid) return;
  grid.innerHTML = STACK_DATA.map(cat => {
    const chips = cat.tools.map(t => makeChip(t, cat.color)).join('');
    return `
      <div class="stack-category fade-in">
        <div class="stack-cat-title">${cat.category}</div>
        <div class="stack-chips">${chips}</div>
      </div>`;
  }).join('');
}

function renderProjectCard(p) {
  const tr = tProject(p.id);
  const title = tr.title || p.title;
  const desc  = tr.desc  || p.description;
  const viewLabel = (typeof t === 'function') ? t('card.view') : 'View details →';
  const featLabel = (typeof t === 'function') ? t('card.featured') : 'Featured';

  const badges = p.badges.map(b => `<span class="chip chip-${b.color}">${b.label}</span>`).join('');
  const techChips = p.tech.slice(0, 5).map(makeTechChip).join('') +
    (p.tech.length > 5 ? `<span class="card-tech-chip">+${p.tech.length - 5}</span>` : '');

  return `
    <div class="project-card ${p.featured ? 'featured' : ''}"
         data-id="${p.id}"
         data-cats="${p.categories.join(',')}"
         style="--card-accent:${p.accentColor};--card-accent-rgb:${p.accentRgb || '34,197,94'}">
      <div class="card-header">
        <div class="card-icon" style="background:${p.iconBg};border:1px solid ${p.iconBorder};">
          ${p.icon}
        </div>
        <div class="card-badges">${badges}</div>
      </div>
      <div class="card-title">${title}</div>
      <div class="card-desc">${desc.substring(0, 120)}…</div>
      <div class="card-tech">${techChips}</div>
      <div class="card-footer">
        <span class="card-view">${viewLabel}</span>
        ${p.featured ? `<span class="chip chip-orange" style="font-size:9px;padding:2px 6px;">${featLabel}</span>` : ''}
      </div>
    </div>`;
}

function buildCardStars() {
  const configs = [
    { top: '12%', left: '8%',  size: 1.5, dur: 4.2, delay: 0    },
    { top: '28%', left: '88%', size: 1.0, dur: 3.5, delay: 0.8  },
    { top: '65%', left: '15%', size: 0.8, dur: 5.1, delay: 1.4  },
    { top: '80%', left: '75%', size: 1.2, dur: 4.7, delay: 0.3  },
    { top: '45%', left: '92%', size: 0.7, dur: 3.9, delay: 2.1  },
    { top: '10%', left: '55%', size: 0.9, dur: 6.0, delay: 1.0  },
    { top: '72%', left: '42%', size: 1.1, dur: 4.4, delay: 1.7  },
    { top: '38%', left: '4%',  size: 0.6, dur: 5.5, delay: 0.5  },
  ];
  return '<div class="card-stars">' + configs.map(s =>
    `<div class="card-star" style="top:${s.top};left:${s.left};width:${s.size}px;height:${s.size}px;opacity:${0.3 + Math.random()*0.4};animation-duration:${s.dur}s;animation-delay:${s.delay}s;"></div>`
  ).join('') + '</div>';
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(renderProjectCard).join('');
  // Inject star dots + stagger entrance
  grid.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.animationDelay = (i * 0.07) + 's';
    card.insertAdjacentHTML('afterbegin', buildCardStars());
  });
}

function renderModal(projectId) {
  const p = PROJECTS.find(x => x.id === projectId);
  if (!p) return;

  const tr = tProject(p.id);
  const title      = tr.title      || p.title;
  const tagline    = tr.tagline    || p.tagline;
  const highlights = tr.highlights || p.highlights;

  const tl = (typeof t === 'function') ? t : k => k;

  const archHtml = p.architecture.map(step => {
    const nodes = step.nodes.map(n => makeArchNode(n.replace('\n', ' '), step.color)).join('');
    const arrow = step.arrow ? '<span class="arch-arrow">→</span>' : '';
    return nodes + arrow;
  }).join('');

  const highlightHtml = highlights.map(h => `<li>${h}</li>`).join('');
  const techChips = p.tech.map(tt => makeChip(tt, 'muted')).join('');

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-title">${p.icon} ${title}</div>
    <div class="modal-tagline">${tagline}</div>

    <div class="modal-section-title">${tl('modal.arch')}</div>
    <div class="modal-arch">${archHtml}</div>

    <div class="modal-section-title">${tl('modal.highlights')}</div>
    <ul class="modal-highlights">${highlightHtml}</ul>

    <div class="modal-section-title">${tl('modal.stack')}</div>
    <div class="modal-tech">${techChips}</div>

    <div class="modal-links">
      <a href="${p.githubUrl}" target="_blank" class="modal-link-btn secondary">&#128279; ${tl('modal.github')}</a>
      <a href="${p.demoUrl}"   target="_blank" class="modal-link-btn primary">&#128196; ${tl('modal.demo')}</a>
    </div>`;
}

function renderPipelineAnim() {
  const card = document.getElementById('pipelineAnim');
  if (!card) return;

  card.innerHTML = `
    <div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">
      Live Pipeline Preview
    </div>
    ${PIPELINE_LAYERS.map((layer, i) => `
      <div class="pipe-label">${layer.label}</div>
      <div class="pipe-layer" id="pipeLayer_${i}">
        ${layer.nodes.map(n => `<div class="pipe-node" data-layer="${i}">${n}</div>`).join('')}
      </div>
      ${i < PIPELINE_LAYERS.length - 1 ? '<div class="pipe-arrow">↓</div>' : ''}
    `).join('')}
  `;
}

function applyFilterVisibility() {
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.cats ? card.dataset.cats.split(',') : [];
    const show = activeFilter === 'all' || cats.includes(activeFilter);
    card.classList.toggle('hidden', !show);
  });
}

function observeFadeIns() {
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}
