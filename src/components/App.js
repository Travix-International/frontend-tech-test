import React from "react";
import { hot } from "react-hot-loader";

import Form from "./Form";
import TaskList from "./TaskList";

import styles from "./App.scss";

const App = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1>Todo tasks</h1>
      </header>
      <div className={styles.underline} />
      <div className={styles.formContainer}>
        <Form />
      </div>
      <TaskList />
    </main>
  );
};

export default hot(module)(App);
