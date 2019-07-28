import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { routes } from '../../config';
import { Wrapper, Title } from './assets/style';

const Header = () => {
  return (
    <Wrapper>
      <Link to={routes.tasks.path}>
        <Title>Twodo</Title>
      </Link>
      <Link to={routes.newTask.path} title={routes.newTask.description} className="add-task">
        <MdAddCircleOutline />
      </Link>
    </Wrapper>
  );
};

export default Header;
