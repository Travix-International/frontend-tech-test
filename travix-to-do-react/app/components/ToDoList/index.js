import React from 'react';
import _ from 'lodash';

// Components
import ListItem from '../ListItem';

require('./style.less');

function ToDoList({ tasks, handleDelete, handleUpdate, handleItemClick, taskToEdit }) {
  return (
    <div className="to-do-list">
      {
        _.map(tasks, task => (
          <ListItem
            {...{
              key: task.id,
              handleDelete,
              task,
              handleUpdate,
              handleItemClick,
              taskToEdit,
            }}
          />)
        )
      }
    </div>
  );
}

ToDoList.propTypes = {
  tasks: React.PropTypes.array,
  handleDelete: React.PropTypes.func,
  handleUpdate: React.PropTypes.func,
  handleItemClick: React.PropTypes.func,
  taskToEdit: React.PropTypes.number,
};

export default ToDoList;
