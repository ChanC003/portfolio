'use strict';

// Screenshot lightbox — opened from a project modal's "Screenshots" button.
// Shows the project's `screenshots[]` in-page with prev/next + keyboard nav.

let _lbShots = [];
let _lbIndex = 0;

function _lbRender() {
  const shot = _lbShots[_lbIndex];
  if (!shot) return;
  const img = document.getElementById('lightboxImg');
  img.src = shot.src;
  img.alt = shot.caption || 'screenshot';
  document.getElementById('lightboxCaption').textContent = shot.caption || '';
  document.getElementById('lightboxCounter').textContent =
    _lbShots.length > 1 ? `${_lbIndex + 1} / ${_lbShots.length}` : '';
  // Hide nav arrows when there's only one image.
  const multi = _lbShots.length > 1;
  document.getElementById('lightboxPrev').style.display = multi ? '' : 'none';
  document.getElementById('lightboxNext').style.display = multi ? '' : 'none';
}

function _lbStep(delta) {
  if (!_lbShots.length) return;
  _lbIndex = (_lbIndex + delta + _lbShots.length) % _lbShots.length;
  _lbRender();
}

function openLightbox(projectId) {
  const project = (typeof PROJECTS !== 'undefined' ? PROJECTS : []).find(p => p.id === projectId);
  if (!project || !project.screenshots || !project.screenshots.length) return;
  _lbShots = project.screenshots;
  _lbIndex = 0;
  _lbRender();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

(function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', e => { e.stopPropagation(); _lbStep(-1); });
  document.getElementById('lightboxNext').addEventListener('click', e => { e.stopPropagation(); _lbStep(1); });
  // Click on the dark backdrop (not the image) closes it.
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') _lbStep(-1);
    else if (e.key === 'ArrowRight') _lbStep(1);
  });
})();
