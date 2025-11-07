import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";

const el = document.querySelector("#root");
const root = ReactDom.createRoot(el);

root.render(<App />);
