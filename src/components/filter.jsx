import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-toolbox/lib/button';
import CSSModules from 'react-css-modules';

import styles from './filter.css';
const Filter = () => (
  <ul styleName='list'>
    <li styleName='item'>
      <NavLink to='/'><Button label='All' raised mini></Button></NavLink>
    </li>
    <li styleName='item'>
      <NavLink to='/done'><Button label='Done' raised mini></Button></NavLink>
    </li>
    <li styleName='item'>
      <NavLink to='/notdone'><Button label='Not done' raised mini></Button></NavLink>
    </li>
  </ul>
);

export default CSSModules(Filter, styles);