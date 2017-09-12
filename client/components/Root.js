import React from 'react';
import { Switch, Route } from 'frint-router-react';

import ItemList from './ItemList';

import item from './Item.scss';
import filters from './filters.scss';
import itemList from './ItemList.scss';

export default function Root() {
  return (
    <div>
      <Route component={ItemList} path="/:filter?" />
    </div>
  );
}
