import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import EditTask from '../EditTask';
export default props => {
  const { show, newItem } = props;
  return show ? (
    <EditTask
      {...{
        ...props,
        item: props.item,
      }}
    />
  ) : (
    <div>
      <Fab
        color="primary"
        aria-label="Add Task"
        onClick={newItem}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
