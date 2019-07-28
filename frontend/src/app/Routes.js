import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './config';

/*
 * Define main routes of the app here.
 */
const Routes = () => {
  return (
    <Router>
      <Switch>
        {Object.keys(routes).map(route => (
          <Route
            path={routes[route].path}
            render={routes[route].component}
            exact={routes[route].exact}
            key={routes[route].path}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
