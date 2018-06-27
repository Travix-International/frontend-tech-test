/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { Router, browserHistory } from 'react-router';

import configureStore from "./store";

import App from './App';

require("style!raw!sass!./styles/main.scss")

const store = configureStore();

render(
  <Provider store={store}>
  	<App />
  </Provider>, document.getElementById("root")
);