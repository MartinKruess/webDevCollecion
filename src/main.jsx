import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoadTheme } from "./comps/global/loadTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoadTheme>
      <App />
    </LoadTheme>
  </BrowserRouter>
);
