import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

if (process.env.NODE_ENV === "development") {
  const { makeServer } = require("./mocks/server");
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);