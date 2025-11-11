import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import { Provider } from "./context/books.js";

const el = document.querySelector("#root");
const root = ReactDom.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
