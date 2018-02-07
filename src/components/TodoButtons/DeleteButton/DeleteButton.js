import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'travix-ui-kit';
import TrashIcon from 'react-icons/lib/fa/trash';

export default function DeleteButton(props) {
  const {
    iconSize,
    onClick
  } = props;
  
  return (
    <Button
      onClick={onClick}
      variation={"link"}
    >
      <TrashIcon
        size={iconSize}
      />
    </Button>
  );
}

DeleteButton.propTypes = {
  iconSize: PropTypes.number,
  onClick: PropTypes.func.isRequired
};
DeleteButton.defaultProps = {
  iconSize: 18
};
