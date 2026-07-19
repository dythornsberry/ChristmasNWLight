import { createRoot, hydrateRoot } from "react-dom/client";
import App, { preloadInitialPage } from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!;
const initialPath = window.location.pathname.replace(/\/+$/, "") || "/";

async function startApp() {
  const InitialPage = await preloadInitialPage(initialPath);
  const app = <App initialPath={initialPath} InitialPage={InitialPage} />;

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
}

void startApp();
