import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './../Main';
import Header from './../Header';
import Detail from './../Detail';
import styles from './App.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <section className={styles.content}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/new" exact component={Detail} />
          <Route path="/item/:id" component={Detail} />
        </Switch>
      </section>
    </div>
  );
};

export default App;
