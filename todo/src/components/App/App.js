import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './../Main';
import Header from './../Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="content">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/new" exact component={Main} />
        </Switch>
      </section>
    </div>
  );
};

export default App;
