import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'travix-ui-kit';
import PencilIcon from 'react-icons/lib/fa/pencil';

export default function EditButton(props) {
  const {
    iconSize,
    onClick
  } = props;
  
  return (
    <Button
      onClick={onClick}
      variation={"link"}
    >
      <PencilIcon
        size={iconSize}
      />
    </Button>
  );
}

EditButton.propTypes = {
  iconSize: PropTypes.number,
  onClick: PropTypes.func.isRequired
};
EditButton.defaultProps = {
  iconSize: 18
};
