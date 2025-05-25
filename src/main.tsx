import React from "react";
import ReactDOM from "react-dom/client";
import DefaultLayout from "./Layouts/DefaultLayout";
import "./assets/css/TailwindCSS.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
