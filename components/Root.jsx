import React from 'react';
import { Route, Switch } from 'frint-router-react';
import HomePage from './HomePage';
import ItemPage from './ItemPage';

export default function Root() {
  return (
    <Switch>
      <Route
        component={HomePage}
        exact
        path="/"
      />
      <Route
        component={ItemPage}
        path="/:id"
      />
      <Route
        component={HomePage}
      />
    </Switch>
  );
}
