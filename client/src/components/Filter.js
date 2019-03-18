import React from 'react';
import FilterLink from '../containers/FilterLink';
import { Filters } from '../actions/filterTypes';

const Filter = () => (
  <div id="filters">
    <FilterLink filter={Filters.SHOW_ALL}>Show All</FilterLink>
    <FilterLink filter={Filters.SHOW_ACTIVE}>Hide completed</FilterLink>
  </div>
);

export default Filter;
