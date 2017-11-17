import React from 'react';
import EditTask from '../EditTask';

require('./style.less');

function ListItem({ task, handleDelete, handleUpdate, handleItemClick, taskToEdit }) {
  return (
    <div className="list-item">
      {
        task.id === taskToEdit
          ? (
            <div className="row">
              <div className="col-xs-12" onClick={handleItemClick.bind(this, task.id)}>
                <div className="text-container"><EditTask handleUpdate={handleUpdate} task={task}/></div>
              </div>
            </div>
          )
          : (
            <div className="row">
              <div className="col-xs-10">
                <div className="text-container">
                  <p className="title-description">{task.description}</p>
                </div>
              </div>
              <div className="col-xs-2">
                <div className="item-options">
                  <i aria-hidden="true" className="fa fa-times" onClick={handleDelete.bind(this, task.id)} />
                  <i aria-hidden="true" className="fa fa-pencil" onClick={handleItemClick.bind(this, task.id)} />
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
}
ListItem.propTypes = {
  task: React.PropTypes.object,
  deleteTask: React.PropTypes.func,
  handleUpdate: React.PropTypes.func,
  handleItemClick: React.PropTypes.func,
  taskToEdit: React.PropTypes.number,
  handleDelete: React.PropTypes.func,
};

export default ListItem;
