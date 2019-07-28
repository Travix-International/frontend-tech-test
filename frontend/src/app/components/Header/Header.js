import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { routes } from '../../config';
import { Wrapper, Title } from './assets/style';

const Header = () => {
  return (
    <Wrapper>
      <NavLink to={routes.tasks.path}>
        <Title>Twodo</Title>
      </NavLink>
      <NavLink to={routes.newTask.path} title={routes.newTask.description} className="add-task">
        <MdAddCircleOutline />
      </NavLink>
    </Wrapper>
  );
};

export default Header;
