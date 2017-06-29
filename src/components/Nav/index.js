import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string
};

const Nav = ({ sort, updateSort }) => (
  <div className={style.wrapper}>
    <button
      className={`${style.button} ${sort === null && style.active}`}
      onClick={() => updateSort(null)}
    >
      All
    </button>

    <button
      className={`${style.button} ${sort === 'active' && style.active}`}
      onClick={() => updateSort('active')}
    >
      Active
    </button>

    <button
      className={`${style.button} ${sort === 'completed' && style.active}`}
      onClick={() => updateSort('completed')}
    >
      Completed
    </button>
  </div>
);

Nav.propTypes = propTypes;

export default Nav;
