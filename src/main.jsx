import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Store from "./context";
import "./assets/style.css";
import "./i18n";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <Store>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Store>
);
