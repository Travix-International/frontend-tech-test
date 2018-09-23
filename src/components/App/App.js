import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {  getTask, saveTask, deleteTask, updateTask } from '../../actions/taskActions';
import { selectTasks } from '../../reducers/tasksReducer';

import TodoList from '../TodoList/TodoList';
import TodoItems from '../TodoItems/TodoItems';

import logo from '../../logo.svg';
import './App.css';

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
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Travix ToDo App</h1>
        </header>
        <TodoList saveTask={saveTask} />
        <TodoItems tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
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
