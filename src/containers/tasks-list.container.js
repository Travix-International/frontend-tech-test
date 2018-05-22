import React, {Component} from 'react';
import * as TaskActions from '../actions'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
import TasksList from '../components/tasks-list/tasks-list';


export class TasksListContainer extends Component {
  constructor(props) {
    super(props)
  }

  // Todo Container methods dispatch the actions to the reducer functions. Ordered by CRUD Order

  //Create - it's doing an update in order to assign the id on frontend side.
  // The PUT handler will check if the task already exists, if not it will create it
  createTask = (task) => {
    this.props.actions.UpdateTask({...task, id: Date.now()});
  }


  // No methods for reading, the first loading of data is done in App.js where the
  // getTodo Action is dispatched

  //Update
  startEditing = (id) => {
    this.props.actions.StartEditing(id)
  };

  cancelEditing = (id) => {
    this.props.actions.CancelEditing(id)
  };

  editTask = (task) => {
    this.props.actions.UpdateTask(task)
  };

  completeTask = (task) => {
    this.props.actions.UpdateTask({
      ...task,
      status: 'done'
    })
  };

  //Delete
  deleteTask = (task) => {
    this.props.actions.DeleteTask(task)
  };

  render() {
    return (
      <div className="todo-container">
        <TasksList
          tasks={this.props.tasks}
          createTask={this.createTask}
          startEditing={this.startEditing}
          cancelEditing={this.cancelEditing}
          editTask={this.editTask}
          completeTask={this.completeTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

// Define the property types of this Container Component

TasksListContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired
}

// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
  return {
    tasks: state.tasks
  }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TaskActions, dispatch)
  }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);