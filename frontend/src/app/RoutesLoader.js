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
          render={({ history, match }) => {
            document.title = routes[route].description;
            const Component = routes[route].component;
            return <Component history={history} match={match} />;
          }}
          exact={routes[route].exact}
          key={routes[route].path}
        />
      ))}
    </Switch>
  );
};

export default Routes;
