import React from 'react';
import { observe, streamProps, Region } from 'frint-react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { Spinner } from 'travix-ui-kit';
import { AutoSizer, List } from 'react-virtualized';

import Header from './Header';
import AddTask from './AddTask';
import EditTask from './EditTask';
import Task from './Task';
import {
  initSocket,
  addTaskSocket,
  deleteTaskSocket,
  editTaskSocket,
  taskAddedListener,
  taskDeletedListener,
  taskEditedListener,
} from '../actions/socketActions';


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
    this.handleEditTaskFormChange = this.handleEditTaskFormChange.bind(this);
    this.renderTask = this.renderTask.bind(this);
  }

  componentDidMount() {
    socket = io.connect('http://127.0.0.1:3000');
    const {
      initSocket, taskAddedListener, taskDeletedListener, taskEditedListener,
    } = this.props;
    console.log(socket);
    initSocket(socket);
    taskAddedListener(socket);
    taskDeletedListener(socket);
    taskEditedListener(socket);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { selectedTask } = nextProps;
    this.setState({
      selectedTask,
    });
  }

  handleEditTaskFormChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const { selectedTask } = this.state;
    const { editTaskSocket } = this.props;
    selectedTask[name] = value;
    editTaskSocket(socket, selectedTask);
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

  renderTask({ index, key, style }) {
    const { tasks } = this.props;
    return (
      <div key={key} style={style}>
        <Task selectTask={this.selectTask} task={tasks[index]} />
      </div>
    );
  }


  render() {
    const { selectedTask } = this.state;
    const { tasks } = this.props;
    return (
      <div id="app">
        <section className={selectedTask.id ? 'task-selected' : ''} id="main-section">
          <Header />
          <AddTask handleAddTask={this.handleAddTask} />
          <ul id="todo-list-container">
            { tasks
              ? (
                <AutoSizer>
                  {
                    ({ width, height }) => (
                      <List
                        className="list"
                        height={height}
                        overscanRowCount={3}
                        rowCount={tasks.length}
                        rowHeight={55}
                        rowRenderer={this.renderTask}
                        {...tasks}
                        width={width}
                      />
                    )
                  }
                </AutoSizer>
              )
              : (
                <div className="spinner-container">

                  <Spinner size="m" />
                </div>
              )
            }
          </ul>
        </section>
        <section className={selectedTask.id ? 'active' : ''} id="side-bar">
          <EditTask
            handleCloseSideBar={this.handleCloseSideBar}
            handleDeleteTask={this.handleDeleteTask}
            handleEditTaskFormChange={this.handleEditTaskFormChange}
            selectedTask={selectedTask}
          />
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
