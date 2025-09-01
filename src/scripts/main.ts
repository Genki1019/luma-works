import { router } from "./router";

router(window.location.pathname);

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
})