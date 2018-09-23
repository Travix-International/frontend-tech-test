import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {  getTask, saveTask, deleteTask, updateTask } from '../../actions/taskActions';
import logo from '../../logo.svg';
import './App.css';

import { selectTasks } from '../../reducers/tasksReducer';

import ToDoList from '../ToDoList/ToDoList';
import ToDoItems from '../ToDoItems/ToDoItems';

class App extends Component {
  static propTypes = {
    getTask: PropTypes.func,
    saveTask: PropTypes.func,
    updateTask: PropTypes.func,
    tasks: PropTypes.any,
  };
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
    };
  }
  componentDidMount() {
    this.props.getTask();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.tasks !== nextProps.tasks) {
      this.setState({
        tasks: nextProps.tasks,
      });
    }
  }
  render() {
    let { tasks } = this.state;
    let {
      saveTask,
      deleteTask,
      updateTask,
    } = this.props;


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travix ToDo App</h1>
        </header>
        <ToDoList saveTask={saveTask} />
        <ToDoItems tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    );
  }
}

const mapStateToProps = ({tasksReducer}) => {
  return {
    tasks: selectTasks(tasksReducer),
  };
};

const mapDispatchToProps = {
  getTask,
  saveTask,
  deleteTask,
  updateTask,
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
