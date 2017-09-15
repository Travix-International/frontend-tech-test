import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.number,
  activeTodoCount: PropTypes.number
};

// travix-ui-kit
import { Button, Badge } from 'travix-ui-kit';

const Footer = ({ sort, updateSort, activeTodoCount }) => (
  <Badge position="right">
    <Badge position="bottom" title={<span>{activeTodoCount} item{activeTodoCount>1?"s":""} left</span>}>
      <div>
        <Button onClick={() => updateSort(0)} mods={['todo', sort==null?'active':'']} size="s">All Todos</Button>
        <Button onClick={() => updateSort(1)} mods={['todo', sort==1?'active':'']} size="s">Active</Button>
        <Button onClick={() => updateSort(2)} mods={['todo', sort==2?'active':'']} size="s">Completed</Button>
      </div>
    </Badge>
  </Badge>
);

Footer.propTypes = propTypes;

export default Footer;
