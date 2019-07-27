import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Wrapper, Title, AddIcon } from './assets/style';

const Header = () => {
  return (
    <Wrapper>
      <Title>Twodo</Title>
      <AddIcon href="#">
        <MdAddCircleOutline />
      </AddIcon>
    </Wrapper>
  );
};

export default Header;
