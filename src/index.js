// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function Root() {
  useEffect(() => {
    // ✅ Force Light Theme — ignores system or library dark mode
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");

    document.documentElement.style.colorScheme = "light";
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";

    // 🔁 Prevent any library (like DaisyUI/Shadcn) from re-adding dark mode
    const observer = new MutationObserver(() => {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
