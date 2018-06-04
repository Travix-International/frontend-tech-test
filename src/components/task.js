import React from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../reducers/tasks';

const Task = (props) => {
  return (
      <div className="row">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" onClick={() => {
            props.editTask(props.Obj.id)}} className="btn">Edit</button>
          <button type="button" onClick={() => props.deleteTask(props.Obj.id)} className="btn">Delete</button>
        </div>
        <h3>{props.Name}</h3>
        <h3>{props.Description}</h3>
      </div>
  );
};

const mapDispatch = {editTask, deleteTask};
export default connect(null, mapDispatch)(Task);
