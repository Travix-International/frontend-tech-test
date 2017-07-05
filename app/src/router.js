import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { history } from './store';
import Main from './modules/main/component';
import TaskContainer from './modules/taskRegister/container';

const Routes = () => (
  <Router /* history={history} */>
    <Switch>
      <Route path="/task/:id" component={TaskContainer} />
      <Route component={Main} />
    </Switch>
  </Router>
);

export default Routes;
