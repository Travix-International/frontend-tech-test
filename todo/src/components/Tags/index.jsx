import React, { Fragment } from 'react';
import { Button } from 'react-toolbox/lib/button';

const Tags = ({ onClick, items }) => {
  const tagButtons = items
    && items
        .split(',')
        .map(tag => <Button label={`#${tag}`} flat primary key={tag} onClick={_ => onClick(tag)} />);
  return (<Fragment>{ tagButtons }</Fragment>); 
};

export default Tags;