import * as React from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import TodoFrom from './TodoForm';
import TodoList from './TodoList';
import { getSelectedTask } from '../selectors/task.selector';
import { createTask, modifyTask, deleteTask, selectTaskFromStore, fetchTodo } from '../actions/todo.action';

class TodoComponent extends React.Component {

  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(title, description) {
    console.log(" inside add task ");
    this.props.createTask(title, description);
  }

  selectTask(e, taskId) {
    e.preventDefault();
    this.props.selectTaskFromStore(taskId);
  }

  editTask(taskId, title, description) {
    this.props.modifyTask(taskId, title, description);
  }

  deleteTask(taskId) {
    this.props.deleteTask(taskId);
  }

  render() {

    const { loading, error, operation, operationStatus, selectedTask, selectedTaskId } = this.props;

    if (loading) {
      return (
        <p>loading Tasks....</p>
      )
    }

    if (error) {
      return (
        <p>Error occured while fetching tasks</p>
      )
    }

    const todoFormConfiguration = {
      formTitle: "Task Form",
      add: this.addTask,
      editTask: this.editTask,
      selectedTask: selectedTask,
      selectedTaskId: selectedTaskId
    }

    const todoListConfiguration = {
      searchBar: true, // configure search bar on todo list table
      selectTask: this.selectTask,
      deleteTask: this.deleteTask,
    }

    return (
      <div className="wrapper">
        <div className="line-break-50" />
        <ErrorBoundary>
          {operation && operationStatus ? <h3>{operation ? operation : false} {operationStatus == true ? "Success" : "Fail"}</h3> : false}
          <TodoFrom
            {...this.props}
            todoFormConfiguration={todoFormConfiguration}
          />
        </ErrorBoundary>
        <div className="line-break-50" />
        <ErrorBoundary>
          <TodoList {...this.props} todoListConfiguration={todoListConfiguration} />
        </ErrorBoundary>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    tasks: state.todo.tasks,
    error: state.todo.error,
    loading: state.todo.loading,
    operation: state.todo.operation,
    operationStatus: state.todo.operationStatus,
    selectedTask: getSelectedTask(state),
    selectedTaskId: state.todo.selectedTaskId,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    createTask: (title, description) => {
      createTask(title, description).then(action => {
        dispatch(action);
        fetchTodo().then(action => dispatch(action));
      });
    },
    selectTaskFromStore: (taskId) => dispatch(selectTaskFromStore(taskId)),
    modifyTask: (taskId, title, description) => {
      modifyTask(taskId, title, description).then(action => {
        dispatch(action);
        fetchTodo().then(action => dispatch(action));
      });
    },
    deleteTask: (taskId) => {
      deleteTask(taskId).then(action => {
        dispatch(action);
        fetchTodo().then(action => { dispatch(action) })
      });;
      ;
    },
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(TodoComponent);