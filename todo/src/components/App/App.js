import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './../Main';
import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/new" exact component={Main} />
    </Switch>
  </div>
);

export default App;
