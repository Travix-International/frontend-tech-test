import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './config';

/**
 * Dynamic components loading
 * Routes are defined in config folder
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
