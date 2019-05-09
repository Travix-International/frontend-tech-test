import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Container
} from 'reactstrap';
import { VisibilityFilter } from '../VisibilityFilter';
import { TASK_FILTER } from '../../constants';
import { startCase } from 'lodash';
import { FiCheckSquare } from 'react-icons/fi';
import styles from './Header.module.scss';
import { flexCenter } from '../flexCenter';

const filters = Object.keys(TASK_FILTER).map(key => ({
  title: startCase(key.toLowerCase()),
  value: key
}));

const propTypes = {
  currentFilter: PropTypes.oneOf(filters.map(f => f.value)),
  setFilter: PropTypes.func,
  query: PropTypes.string
};

const defaultProps = {
  currentFilter: TASK_FILTER.SHOW_ALL,
  setFilter: () => {},
  query: ''
};

const NavBrand = flexCenter(NavbarBrand);

/**
 * Header component
 */
const Header = props => {
  const { currentFilter, setFilter, query, children } = props;

  return (
    <div className={styles['header']}>
      <Navbar>
        <NavBrand href="/">
          <FiCheckSquare /> To-Do
        </NavBrand>
        { children }
        <div>
          <VisibilityFilter
            filters={filters}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
        </div>
      </Navbar>
      {
        query.length > 0 && <Container>{`Searching for "${query}"`}</Container>
      }
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;