import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.number
};

// travix-ui-kit
import { ToggleButton } from 'travix-ui-kit';

const Footer = ({ sort, updateSort }) => (
  <footer>
    <ToggleButton items={['All Todos', 'Active', 'Completed']} handleSelect={(stype) => updateSort(stype)} mods={['todo_filter']}/>
  </footer>
);

Footer.propTypes = propTypes;

export default Footer;
