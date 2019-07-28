import React from 'react';
import { Item, Link, Title, Description } from './assets/style';

const ListItem = ({ title, description }) => {
  return (
    <Item>
      <Link href="/">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
    </Item>
  );
};

export default ListItem;
