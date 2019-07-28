import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Title, Description } from './assets/style';

const ListItem = ({ id, title, description }) => {
  return (
    <Item>
      <Link to={`/task/${id}`} className="link">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
    </Item>
  );
};

export default ListItem;
