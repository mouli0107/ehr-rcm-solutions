import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Global error handler to prevent JSON parsing errors from crashing the app
window.addEventListener('error', (event) => {
  if (event.message?.includes('Unexpected end of input') || 
      event.message?.includes('JSON')) {
    event.preventDefault();
    event.stopPropagation();
    console.warn('Suppressed JSON parsing error:', event.message);
    return false;
  }
});

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason?.message?.includes('Unexpected end of input') ||
      event.reason?.message?.includes('JSON')) {
    event.preventDefault();
    console.warn('Suppressed unhandled JSON rejection:', event.reason?.message);
  }
});

createRoot(document.getElementById("root")!).render(<App />);
