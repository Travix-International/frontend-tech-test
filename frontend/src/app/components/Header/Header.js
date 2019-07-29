import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { Wrapper, Title } from './assets/style';

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/" title="Task list">
        <Title>Twodo</Title>
      </NavLink>
      <NavLink to="/tasks/add" title="Add new task" className="add-task">
        <MdAddCircleOutline />
      </NavLink>
    </Wrapper>
  );
};

export default Header;
