import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';
import { VisibilityFilter } from '../VisibilityFilter';
import { TASK_FILTER } from '../../constants';
import { startCase } from 'lodash';

const filters = Object.keys(TASK_FILTER).map(key => ({
  title: startCase(key.toLowerCase()),
  value: key
}));

const propTypes = {
  currentFilter: PropTypes.oneOf(filters.map(f => f.value)),
  setFilter: PropTypes.func
};

const defaultProps = {
  currentFilter: TASK_FILTER.SHOW_ALL,
  setFilter: () => {}
};

const Header = props => {
  const { currentFilter, setFilter } = props;

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">To-Do</NavbarBrand>
        <div>
          <VisibilityFilter
            filters={filters}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
        </div>
      </Navbar>
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;