export function typingEffect(
  selector: string,
  text: string,
  speed: number,
  delay: number,
  callback?: () => void
) {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;

  el.innerHTML = `<span class="text"></span><span class="cursor">|</span>`;
  const textEl = el.querySelector<HTMLElement>(".text")!;
  const cursorEl = el.querySelector<HTMLElement>(".cursor")!;

  setTimeout(() => {
    let i = 0;

    const interval = setInterval(() => {
      textEl.textContent = text.slice(0, i + 1);
      i++;

      if (i === text.length) {
        clearInterval(interval);
        // タイピング終了後カーソルを消す
        cursorEl.remove();
        if (callback) callback();
      }
    }, speed);
  }, delay);
}