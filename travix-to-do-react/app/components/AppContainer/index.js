import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTasks, addNewTask, deleteTask, updateTask, activateTaskEdit } from '../../redux/reducer';

// Components
import NewTask from '../NewTask';
import ToDoList from '../ToDoList';
import NoPendingTask from '../NoPendingTask';

// Style
require('./style.less');

class AppContainer extends Component {
  static propTypes = {
    tasks: React.PropTypes.array,
    getAllTasks: React.PropTypes.func,
    addNewTask: React.PropTypes.func,
    deleteTask: React.PropTypes.func,
    taskToEdit: React.PropTypes.number,
    updateTask: React.PropTypes.func,
    activateTaskEdit: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  componentDidMount() {
    this.props.getAllTasks();
  }

  render() {
    return (
      <div className="page-container" id="app-container">
        <div className="header">
          <h1 className="header-title">Your to-do list</h1>
          <div className="row center-xs">
            <div className="col-xs-10">
              <NewTask
                {...{
                  handleDescriptionChange: this.handleDescriptionChange,
                  handleSubmit: this.handleSubmit,
                  value: this.state.description,
                }}
              />
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-10">
            <ToDoList
              {...{
                tasks: this.props.tasks,
                handleDelete: this.deleteTask,
                handleUpdate: this.updateTask,
                handleItemClick: this.activateTaskEdit,
                taskToEdit: this.props.taskToEdit,
              }}
            />
          </div>
          <div className="col-xs-10" style={{ display: this.props.tasks.length ? 'none' : 'block' }}>
            <NoPendingTask />
          </div>
        </div>
      </div>
    );
  }

  handleDescriptionChange = ({ target }) => {
    this.setState({ description: target.value });
  }

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      this.props.addNewTask(this.state.description);
      this.setState({ description: '' });
    }
  }

  deleteTask = (id) => {
    this.props.deleteTask(id);
  }

  updateTask = (e) => {
    if (e.key === 'Enter') {
      this.props.updateTask(e.target.value);
    }
  }

  activateTaskEdit = (id) => {
    this.props.activateTaskEdit(id);
  }
}

const mapState = ({ tasks, taskToEdit }) => ({ tasks, taskToEdit });
const mapDispatch = { getAllTasks, addNewTask, deleteTask, updateTask, activateTaskEdit };
export default connect(mapState, mapDispatch)(AppContainer);
