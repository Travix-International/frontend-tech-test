import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string
};

const Footer = ({ sort, updateSort }) => (
  <footer>
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
  </footer>
);

Footer.propTypes = propTypes;

export default Footer;
