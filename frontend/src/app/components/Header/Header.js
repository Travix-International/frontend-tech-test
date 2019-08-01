import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdAdd, MdArrowBack, MdLens } from 'react-icons/md';
import { hasDraft } from '../../utils';
import { Wrapper, Title } from './assets/style';

const Header = ({ task }) => {
  return (
    <Wrapper>
      <NavLink to="/" title="Task list">
        <Title>Twodo</Title>
      </NavLink>
      <NavLink
        to="/"
        title="Back"
        className="back"
        activeClassName="active"
        isActive={() => window.location.pathname === '/tasks/add'}
      >
        <MdArrowBack />
      </NavLink>
      <NavLink to="/tasks/add" title="Add new task" className="add-task" activeClassName="active">
        <MdAdd />
        {hasDraft(task) ? <MdLens className="task-draft" title="Unsaved" /> : null}
      </NavLink>
    </Wrapper>
  );
};

export default Header;
