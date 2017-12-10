import React from 'react';
import { Route } from 'react-router';
import { ListTasks } from './modules/Tasks';

export default(
  <Route>
    <Route
      component={ListTasks}
      path="/"
    />
  </Route>
);
