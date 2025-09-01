import Company from "./pages/company";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Recruit from "./pages/recruit";
import Service from "./pages/service";

const routes: Record<string, () => string> = {
  "/": Home,
  "/company": Company,
  "/service": Service,
  "/contact": Contact,
  "/recruit": Recruit,
};

export function router(path: string) {
  const view = routes[path] || (() => "<h1>404 Not Found</h1>");
  const app = document.getElementById("app");
  if (app) app.innerHTML = view();
}