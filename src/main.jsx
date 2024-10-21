import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AllRouter from "../src/routers/AllRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllRouter />
  </React.StrictMode>
);
