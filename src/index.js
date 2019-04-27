import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./client/containers/App.jsx";
import store from "./store";

const rootDivElement = document.querySelector("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDivElement
);
