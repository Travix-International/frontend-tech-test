import React from 'react';
import PropTypes from 'prop-types';
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

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default ListItem;
