import React from 'react';
import { observe, streamProps, Region } from 'frint-react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';

import Header from './Header';
import AddTask from './AddTask';
import EditTask from './EditTask';
import {
  initSocket,
  addTaskSocket,
  deleteTaskSocket,
  editTaskSocket,
  taskAddedListener,
  taskDeletedListener,
  taskEditedListener,
} from '../actions/socketActions';
import TasksList from './TasksList';


let socket;
class Root extends React.Component {
  constructor(props) {
    super(props);
    const { selectedTask } = props;
    this.state = {
      selectedTask,
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.handleCloseSideBar = this.handleCloseSideBar.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
  }

  componentDidMount() {
    socket = io.connect('http://127.0.0.1:3000');
    const {
      initSocket, taskAddedListener, taskDeletedListener, taskEditedListener,
    } = this.props;
    initSocket(socket);
    taskAddedListener(socket);
    taskDeletedListener(socket);
    taskEditedListener(socket);
  }

  componentWillReceiveProps(nextProps) {
    const { selectedTask } = nextProps;
    this.setState({
      selectedTask,
    });
  }

  handleEditTask(task) {
    const { editTaskSocket } = this.props;
    editTaskSocket(socket, task);
  }

  handleAddTask(task) {
    const { addTaskSocket } = this.props;
    addTaskSocket(socket, task);
  }

  handleDeleteTask(task) {
    const { deleteTaskSocket } = this.props;
    deleteTaskSocket(socket, task);
  }

  selectTask(task) {
    this.setState({
      selectedTask: task,
    });
  }

  handleCloseSideBar() {
    this.setState({ selectedTask: {} });
  }

  render() {
    const { selectedTask } = this.state;
    const { tasks } = this.props;
    return (
      <div id="app">
        <section className={selectedTask.id ? 'active' : ''} id="side-bar">
          <EditTask
            handleCloseSideBar={this.handleCloseSideBar}
            handleDeleteTask={this.handleDeleteTask}
            handleEditTask={this.handleEditTask}
            selectedTask={selectedTask}
          />
        </section>
        <section className={selectedTask.id ? 'task-selected' : ''} id="main-section">
          <Header />
          <AddTask handleAddTask={this.handleAddTask} />
          <TasksList selectTask={this.selectTask} tasks={tasks} />

        </section>
      </div>
    );
  }
}
Root.propTypes = {
  initSocket: PropTypes.func.isRequired,
  addTaskSocket: PropTypes.func.isRequired,
  deleteTaskSocket: PropTypes.func.isRequired,
  editTaskSocket: PropTypes.func.isRequired,
  taskAddedListener: PropTypes.func.isRequired,
  taskDeletedListener: PropTypes.func.isRequired,
  taskEditedListener: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
};
export default observe(app => streamProps({})
  .set(
    app.get('store').getState$(),
    state => ({
      tasks: state.socketReducer.tasks,
      selectedTask: state.socketReducer.selectedTask,
    }),
  )

  .setDispatch(
    {
      initSocket,
      addTaskSocket,
      deleteTaskSocket,
      editTaskSocket,
      taskAddedListener,
      taskDeletedListener,
      taskEditedListener,
    },
    app.get('store'),
  )
  .get$())(Root);
