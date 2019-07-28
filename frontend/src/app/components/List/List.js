import React from 'react';
import Wrapper from './assets/style';
import ListItem from '../ListItem';

const List = () => {
  return (
    <Wrapper>
      <ListItem
        key={1}
        id={1}
        title="Go home"
        description="Go home soon you need to wait for Atefeh. Go home soon you need to wait for. Go home soon you need."
      />
      <ListItem key={2} id={2} title="Buy pizza" description="Your turn to cook" />
    </Wrapper>
  );
};

export default List;
