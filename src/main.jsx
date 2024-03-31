// === Библиотечные модули ===
import React from "react";
import ReactDOM from "react-dom/client";

// === Кмпоненты проекта ===
import App from "./App.jsx";

// === Стили ===
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
