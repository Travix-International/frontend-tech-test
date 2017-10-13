import React from 'react';

require('./style.less');

function EditTask({ task, handleUpdate }) {
  return (
    <div className="edit-task">
      <input className="edit-description" defaultValue={task.description} onKeyPress={handleUpdate}/>
    </div>
  );
}

EditTask.propTypes = {
  task: React.PropTypes.object,
  handleUpdate: React.PropTypes.func,
};

export default EditTask;
