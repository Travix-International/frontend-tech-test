import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './Routes';

/**
 * Dynamic components loading
 */
const Routes = () => {
  return (
    <Switch>
      {Object.keys(routes).map(route => (
        <Route
          path={routes[route].path}
          render={() => {
            document.title = routes[route].description;
            const Component = routes[route].component;
            return <Component />;
          }}
          exact={routes[route].exact}
          key={routes[route].path}
        />
      ))}
    </Switch>
  );
};

export default Routes;
