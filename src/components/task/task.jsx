import React, {Component} from 'react';

// The Todo Row component is a simple stateless component, It simply takes the props
// and maps the specific events to the methods of parent component

const Task = (props) => {
  return (

    // getClass Name assigns the class names of this element
    <div className={"row border m-1 m-5-md p-1 p-5-md d-flex align-items-center " + (props.task.status ? 'border-success' : 'border-primary')}>
      <div className="col-12 col-md-3 font-weight-bold mt-2 mt-0-md">
        {props.task.title}
      </div>
      <div className="col-12 col-md-6 mt-2 mt-0-md">
        {props.task.description}
      </div>

      <div className="col-12 col-md-3 btn-group my-2 my-0-md d-flex justify-content-center">
        {props.task.status !== 'done' &&
        <button type="button" className="btn btn-outline-success" onClick={props.completeTask}>Done!</button>
        }
        <button type="button" className="btn btn-outline-primary" onClick={props.startEditing}>Edit</button>
        <button type="button" className="btn btn-outline-danger" onClick={props.deleteTask}>Delete</button>
      </div>
    </div>
  );
};

export default Task;