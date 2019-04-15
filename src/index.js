import "normalize.css/normalize.css";
import "./initial.scss";
// import "./images/favicon-32x32.png";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./services/redux";

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
