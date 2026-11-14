import { reducedMotion } from "./motion";

const CELL = 22; // grid spacing in px
const RAMP = ["·", "·", ":", "+", "*", "#"]; // quiet -> loud
const POINTER_RADIUS = 150;
const RIPPLE_SPEED = 420; // px per second
const RIPPLE_LIFE = 2.2; // seconds

interface Ripple {
  x: number;
  y: number;
  born: number;
}

/**
 * Paints a slow field of ASCII characters on a canvas. The field drifts on
 * its own, lights up near the pointer, and sends out a ring on `ripple()`.
 */
export function initAsciiField(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return { ripple: (_x: number, _y: number) => {} };

  const still = reducedMotion();
  const ripples: Ripple[] = [];
  const pointer = { x: -9999, y: -9999 };
  let width = 0;
  let height = 0;
  let fg = "#000";
  let accent = "#0080ff";
  let visible = true;
  let last = 0;

  const readColors = () => {
    const styles = getComputedStyle(canvas);
    fg = styles.getPropertyValue("--fg").trim() || fg;
    accent = styles.getPropertyValue("--primary").trim() || accent;
  };

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.font = `13px "IBM Plex Mono", ui-monospace, monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    draw(performance.now());
  };

  const draw = (now: number) => {
    const t = now / 1000;
    ctx.clearRect(0, 0, width, height);

    while (ripples.length && t - ripples[0].born > RIPPLE_LIFE) ripples.shift();

    for (let y = CELL / 2; y < height; y += CELL) {
      for (let x = CELL / 2; x < width; x += CELL) {
        // Two overlapping waves give a slow, uneven drift.
        const wave =
          0.5 +
          0.25 * Math.sin(x * 0.012 + t * 0.5) +
          0.25 * Math.sin(y * 0.02 - t * 0.35 + Math.sin(x * 0.006 + t * 0.2) * 2);

        const distance = Math.hypot(x - pointer.x, y - pointer.y);
        const glow = Math.max(0, 1 - distance / POINTER_RADIUS);

        let ring = 0;
        for (const ripple of ripples) {
          const age = t - ripple.born;
          const gap = Math.hypot(x - ripple.x, y - ripple.y) - age * RIPPLE_SPEED;
          ring += Math.exp(-(gap * gap) / 900) * (1 - age / RIPPLE_LIFE);
        }

        const energy = Math.min(1, wave * 0.66 + glow * 0.9 + ring);
        const hot = glow > 0.15 || ring > 0.25;

        ctx.globalAlpha = hot ? 0.25 + energy * 0.75 : 0.05 + energy * 0.4;
        ctx.fillStyle = hot ? accent : fg;
        ctx.fillText(RAMP[Math.floor(energy * (RAMP.length - 1))], x, y);
      }
    }
  };

  const loop = (now: number) => {
    // ~30fps is plenty for this and keeps laptops cool.
    if (visible && !document.hidden && now - last > 32) {
      last = now;
      draw(now);
    }
    requestAnimationFrame(loop);
  };

  const hero = canvas.parentElement ?? canvas;
  hero.addEventListener("pointermove", (event) => {
    const box = canvas.getBoundingClientRect();
    pointer.x = event.clientX - box.left;
    pointer.y = event.clientY - box.top;
  });
  hero.addEventListener("pointerleave", () => {
    pointer.x = pointer.y = -9999;
  });

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  }).observe(canvas);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      readColors();
      draw(performance.now());
    });

  readColors();
  resize();
  document.fonts?.ready.then(() => draw(performance.now()));
  if (!still) requestAnimationFrame(loop);

  return {
    /** Send a ring out from a point given in viewport coordinates. */
    ripple(clientX: number, clientY: number) {
      if (still) return;
      const box = canvas.getBoundingClientRect();
      ripples.push({
        x: clientX - box.left,
        y: clientY - box.top,
        born: performance.now() / 1000,
      });
    },
  };
}
