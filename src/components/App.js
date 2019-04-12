import React, { Component } from "react";
import { hot } from "react-hot-loader";

import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <main className={styles.main}>
        <div>Hello</div>
      </main>
    );
  }
}

export default hot(module)(App);
