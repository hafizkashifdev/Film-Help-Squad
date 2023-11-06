import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "./styles/common.scss";
import "./styles/global-styling.scss";
import "./styles/screen-media-query.scss";
import "./styles/utilities.scss";
import App from "./App";
import { ScrollToTop } from "./hooks/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>
);
