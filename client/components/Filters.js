import React from 'react';
import { Link } from 'frint-router-react';

// import filters from './filters.scss';

const Filters = () => (
  <div className="filters-container">
    <ul className="filters">
      <li><Link activeClassName="selected" exact to="/">All</Link></li>
      <li><Link activeClassName="selected" to="/active">Active</Link></li>
      <li><Link activeClassName="selected" to="/completed">Completed</Link></li>
    </ul>
  </div>
);

export default Filters;
