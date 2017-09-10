import React from 'react';
import { Switch, Route } from 'frint-router-react';

import ItemList from './ItemList';

export default function Root() {
  return (
    <div>
      <Route component={ItemList} path="/:filter?" />
    </div>
  );
}
