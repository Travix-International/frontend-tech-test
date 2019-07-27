import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';

/*
 * Define main routes of the app here.
 */
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={List} exact />
        <Route path="/tasks" component={List} />
        <Route path="/tasks/:id" component={List} />
        <Route path="/tasks/:id/add" component={List} />
        <Route path="/tasks/:id/edit" component={List} />
        <Route path="/tasks/:id/delete" component={List} />
      </Switch>
    </Router>
  );
};

export default Routes;
