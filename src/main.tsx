import React from "react";
import ReactDOM from "react-dom/client";
import DefaultLayout from "./Layouts/DefaultLayout";
import "./assets/css/TailwindCSS.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DefaultLayout>
      <div>Test</div>
    </DefaultLayout>
  </React.StrictMode>,
);
