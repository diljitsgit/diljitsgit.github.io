import { reducedMotion } from "./motion";

const GLYPHS = "/\\|-_<>*#";

/**
 * Cycles an element through a list of phrases, scrambling the characters
 * during each change. Phrases come from a JSON array in `data-scramble`.
 */
export function initScramble(el: HTMLElement, { hold = 2600, duration = 600 } = {}) {
  const phrases: string[] = JSON.parse(el.dataset.scramble ?? "[]");
  if (phrases.length < 2 || reducedMotion()) return;

  let index = 0;

  const change = () => {
    const from = phrases[index];
    index = (index + 1) % phrases.length;
    const to = phrases[index];
    const start = performance.now();

    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const length = Math.round(from.length + (to.length - from.length) * progress);
      const settled = Math.floor(to.length * progress);

      let text = "";
      for (let i = 0; i < length; i++) {
        const char = to[i] ?? " ";
        text +=
          i < settled || char === " "
            ? char
            : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = text;

      if (progress < 1) requestAnimationFrame(frame);
      else setTimeout(change, hold);
    };

    requestAnimationFrame(frame);
  };

  setTimeout(change, hold);
}
