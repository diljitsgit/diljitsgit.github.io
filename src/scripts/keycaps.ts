import { reducedMotion } from "./motion";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * The Ctrl + Alt + Build keys. They tap themselves every few seconds,
 * follow the real Ctrl and Alt keys, and call `onBuild` whenever
 * "Build" goes down (by the demo, by the shortcut, or by a click).
 */
export function initKeycaps(root: HTMLElement, onBuild: (key: HTMLElement) => void) {
  const key = (name: string) => root.querySelector<HTMLElement>(`[data-key="${name}"]`);
  const ctrl = key("Control");
  const alt = key("Alt");
  const build = key("Build");
  if (!ctrl || !alt || !build) return;

  const held = new Set<string>();
  let lastTouch = 0;

  const press = (el: HTMLElement, down: boolean) => el.classList.toggle("is-down", down);

  const fire = async () => {
    press(build, true);
    onBuild(build);
    await wait(180);
    press(build, false);
  };

  const sync = (event: KeyboardEvent, down: boolean) => {
    if (event.key !== "Control" && event.key !== "Alt") return;
    lastTouch = Date.now();
    down ? held.add(event.key) : held.delete(event.key);
    press(ctrl, held.has("Control"));
    press(alt, held.has("Alt"));
    if (down && !event.repeat && held.size === 2) fire();
  };

  window.addEventListener("keydown", (event) => sync(event, true));
  window.addEventListener("keyup", (event) => sync(event, false));
  window.addEventListener("blur", () => {
    held.clear();
    press(ctrl, false);
    press(alt, false);
  });
  build.addEventListener("click", () => {
    lastTouch = Date.now();
    onBuild(build);
  });

  if (reducedMotion()) return;

  // Self-running demo. It stays out of the way while the visitor is playing.
  const demo = async () => {
    if (Date.now() - lastTouch > 4000 && !document.hidden) {
      press(ctrl, true);
      await wait(220);
      press(alt, true);
      await wait(220);
      await fire();
      press(ctrl, false);
      press(alt, false);
    }
    setTimeout(demo, 5200);
  };
  setTimeout(demo, 1400);
}
