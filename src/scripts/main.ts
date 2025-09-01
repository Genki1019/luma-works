import { initFadeIn } from "./effects/fadeIn";
import { typingEffect } from "./effects/typing";
import { router } from "./router";

router(window.location.pathname);

document.addEventListener("DOMContentLoaded", () => {
  typingEffect("#hero-title", "Luma Works", 120, 0, () => {
    typingEffect(
      "#hero-subtitle",
      "自然とモダンを融合したライフスタイル提案",
      60,
      500
    );
  });

  initFadeIn();
});

document.addEventListener("click", (e) => {
  const target = e.target as HTMLAnchorElement;
  if (target.matches("[data-link]")) {
    e.preventDefault();
    window.history.pushState(null, "", target.href);
    router(window.location.pathname);
  }
});

window.addEventListener("popstate", () => {
  router(window.location.pathname);
});