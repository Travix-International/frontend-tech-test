import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from './store';
import MainContainer from './modules/main/component';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={MainContainer} />
    </Switch>
  </Router>
);

export default Routes;
