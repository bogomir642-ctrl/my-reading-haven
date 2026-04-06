import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle redirect from 404.html for GitHub Pages SPA routing
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.location.href = redirect;
}

createRoot(document.getElementById("root")!).render(<App />);
