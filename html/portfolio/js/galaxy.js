'use strict';

(function initGalaxy() {
  const canvas = document.getElementById('galaxyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const STAR_COUNT = 600;
  const NEBULA_COLORS = [
    'rgba(34,197,94,',   // green
    'rgba(59,130,246,',  // blue
    'rgba(168,85,247,',  // purple
    'rgba(255,255,255,', // white
  ];

  let stars = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomStar() {
    // 70% white stars, 30% colored
    const isColored = Math.random() < 0.30;
    const colorBase = isColored
      ? NEBULA_COLORS[Math.floor(Math.random() * (NEBULA_COLORS.length - 1))]
      : NEBULA_COLORS[NEBULA_COLORS.length - 1];
    // mix of tiny background stars and a few brighter ones
    const isBright = Math.random() < 0.12;
    return {
      x:      Math.random() * W,
      y:      Math.random() * H,
      r:      isBright ? Math.random() * 1.8 + 0.8 : Math.random() * 0.9 + 0.15,
      alpha:  isBright ? Math.random() * 0.6 + 0.35 : Math.random() * 0.55 + 0.15,
      speed:  Math.random() * 0.004 + 0.0008,
      phase:  Math.random() * Math.PI * 2,
      color:  colorBase,
    };
  }

  function buildStars() {
    stars = Array.from({ length: STAR_COUNT }, randomStar);
  }

  function drawNebula() {
    // Soft nebula glow blobs
    const blobs = [
      { x: W * 0.15, y: H * 0.35, rx: W * 0.28, ry: H * 0.35, color: 'rgba(34,197,94,0.045)' },
      { x: W * 0.78, y: H * 0.22, rx: W * 0.22, ry: H * 0.40, color: 'rgba(59,130,246,0.04)'  },
      { x: W * 0.50, y: H * 0.75, rx: W * 0.20, ry: H * 0.28, color: 'rgba(168,85,247,0.035)' },
      { x: W * 0.88, y: H * 0.70, rx: W * 0.18, ry: H * 0.25, color: 'rgba(34,197,94,0.03)'   },
    ];
    blobs.forEach(b => {
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, Math.max(b.rx, b.ry));
      g.addColorStop(0, b.color);
      g.addColorStop(1, 'transparent');
      ctx.save();
      ctx.scale(b.rx / Math.max(b.rx, b.ry), b.ry / Math.max(b.rx, b.ry));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(
        b.x / (b.rx / Math.max(b.rx, b.ry)),
        b.y / (b.ry / Math.max(b.rx, b.ry)),
        Math.max(b.rx, b.ry), 0, Math.PI * 2
      );
      ctx.fill();
      ctx.restore();
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    drawNebula();
    frame++;

    stars.forEach(s => {
      const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(s.phase + frame * s.speed));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color + (s.alpha * twinkle).toFixed(3) + ')';
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  buildStars();
  draw();

  window.addEventListener('resize', () => { resize(); buildStars(); });
})();
