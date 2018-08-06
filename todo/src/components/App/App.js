import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './../Main';
import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </div>
);

export default App;
