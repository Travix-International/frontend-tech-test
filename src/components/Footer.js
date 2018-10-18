import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div className="columns is-multiline is-mobile has-text-centered">
    <div className="column">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
      </FilterLink>
    </div>
    <div className="column">
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
      </FilterLink>
    </div>
    <div className="column">
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
      </FilterLink>
    </div>
  </div>
);

export default Footer;
