import React, {Component} from 'react';

import {Button, Table} from 'semantic-ui-react'

class EditTask extends Component {

  constructor(props) {
    super(props);
    // If props.todo exists this component is used to  Edit a Todo,
    // else this is a Create New Todo Component

    if (this.props.task) {
      this.state = {
        ...this.props.task
      }
    } else {
      this.state = {
        ...this.emptyTask()
      }
    }
  }

  //Initializes a Empty Todo Object

  emptyTask = () => {
    return {
      title: "",
      description: ""
    }
  };


  changeNewTitle = (event) => {
    this.setState({title: event.target.value})
  };

  changeNewDescription = (event) => {
    this.setState({description: event.target.value})
  };

  createTask = (event) => {
    this.resetTask();
    this.props.createTask(this.state)
  };

  editTask = (event) => {
    this.props.editTask(this.state)
  };

  resetTask = () => {
    this.setState({
      title: "",
      description: ""
    });
  };

  cancelEditing = () => {
    this.props.cancelEditing();
  };

  render() {
    return (
      <div className={"row border m-1 m-5-md p-5 d-flex align-items-center " + (this.state.status ? 'border-success' : 'border-primary')}>
        <div className="col-12 col-md-3 input-group input-group-sm mt-2 mt-0-md">
          <input className="form-control" placeholder='Title' value={this.state.title} onChange={this.changeNewTitle}/>
        </div>
        <div className="col-12 col-md-6 input-group input-group-sm mt-2 mt-0-md">
          <input className="form-control" placeholder='Description' value={this.state.description} onChange={this.changeNewDescription}/>
        </div>
        <div className="col-12 col-md-3 my-2 my-0-md d-flex justify-content-center">
          <Options
            task={this.props.task}
            editTask={this.editTask}
            createTask={this.createTask}
            resetTask={this.resetTask}
            cancelEdit={this.cancelEditing}
          />
        </div>
      </div>
    )
  }
}

export default EditTask;


// The option component decides the component usage

const Options = (props) => {
  if (props.task && props.task.editing) {
    return EditOptions(props);
  } else {
    return AddOptions(props);
  }
};

// The two local components - EditOptions and AddOptions simply maps their events
// to the state events of their parent compoent through the props
const EditOptions = (props) => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-outline-success" onClick={props.editTask}>Edit</button>
      <button type="button" className="btn btn-outline-primary" onClick={props.editTask}>Cancel</button>
    </div>
  );
};

const AddOptions = (props) => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-outline-success" onClick={props.createTask}>Create</button>
      <button type="button" className="btn btn-outline-primary" onClick={props.resetTask}>Reset</button>
    </div>
  );
};
