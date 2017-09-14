import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.number,
  activeTodoCount: PropTypes.number
};

// travix-ui-kit
import { ToggleButton, Badge } from 'travix-ui-kit';

const Footer = ({ sort, updateSort, activeTodoCount }) => (
  <Badge position="right">
    <Badge position="bottom" title={<span>{activeTodoCount} item{activeTodoCount>1?"s":""} left</span>}>
      <footer>
        <ToggleButton items={['All Todos', 'Active', 'Completed']} handleSelect={(stype) => updateSort(stype)} mods={['todo_filter']}/>
      </footer>
    </Badge>
  </Badge>
);

Footer.propTypes = propTypes;

export default Footer;
