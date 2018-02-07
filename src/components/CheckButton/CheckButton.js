import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'travix-ui-kit';


export default function CheckButton(props) {
  const {
    onClick
  } = props;
  
  return (
    <Button onClick={onClick} variation="link">
      {props.children}
    </Button>
  );
}

CheckButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
