import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'components/modules/Loader'
import TaskActive from 'components/modules/TaskActive'
import TaskCompleted from 'components/modules/TaskCompleted'
import TaskCreate from 'components/modules/TaskCreate'
import { toggleTask, fetchTasks, updateTask, createTask, deleteTask } from 'actions/Tasks'

export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: '',
    }

    this.onTaskDelete = this.onTaskDelete.bind(this);
    this.onTaskToggle = this.onTaskToggle.bind(this);
    this.onTaskUpdate = this.onTaskUpdate.bind(this);
    this.onTaskCreate = this.onTaskCreate.bind(this);
    this.renderActiveTasks = this.renderActiveTasks.bind(this);
    this.renderCompleteTasks = this.renderCompleteTasks.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.fetchTasks(), 1000);
    setInterval(() => this.props.fetchTasks(), 30000);
  }

  onTaskToggle({ id }) {
    const updatedTasks = this.props.tasks.tasks.map(item => {
      item.status = item.id === id ? !item.status : item.status;
      return item;
    });
    return this.props.toggleTask(updatedTasks, id)
  }

  onTaskDelete({ id }) {
    const updatedTasks = this.props.tasks.tasks.filter(item => item.id !== id);
    return this.props.deleteTask(updatedTasks, id)
  }

  onTaskUpdate(event, task, target) {

    if (event.type === 'submit') {
      event.preventDefault()
      const { tasks: { tasks, isFetching } } = this.props;
      return this.props.updateTask(tasks, task);
    }

    const updatedTasks = this.props.tasks.tasks.map(item => {
      item[target] = item.id === task.id ? event.target.value : item[target];
      return item;
    });

    if (event.type === 'change') return this.props.updateTask(updatedTasks);

    event.preventDefault()
    return this.props.updateTask(updatedTasks, task);
  }

  onTaskCreate(event, title) {
    if (event.type === 'change' || !title.length) return this.setState({ newTitle: event.target.value });

    event.preventDefault()
    this.setState({ newTitle: '' });
    return this.props.createTask(this.props.tasks.tasks, title);
  }

  renderTasks() {
    const { tasks: { tasks, isFetching } } = this.props;

    if (isFetching) return <Loader />;
    if (!tasks.length) return <div className="no-task">No task created yet...</div>
    return [this.renderActiveTasks(), this.renderCompleteTasks()]
  }

  renderActiveTasks() {
    const { tasks: { tasks } } = this.props;

    const activeTasks = tasks.filter(task => !task.status).sort((a, b) => b.id - a.id);
    return activeTasks.map(task =>
      <TaskActive
        task={task}
        onTaskToggle={this.onTaskToggle}
        onTaskDelete={this.onTaskDelete}
        onTaskUpdate={this.onTaskUpdate}
      />
    )
  }

  renderCompleteTasks() {
    const { tasks: { tasks } } = this.props;
    const completeTasks = tasks.filter(task => task.status).sort((a, b) => b.id - a.id);
    return completeTasks.map(task =>
      <TaskCompleted
        task={task}
        onTaskToggle={this.onTaskToggle}
        onTaskDelete={this.onTaskDelete}
      />
    )
  }

  render() {
    const { newTitle } = this.state

    return (
      <div className={`task-list-container`}>
        <ul className={`task-list`}>
          <TaskCreate title={newTitle} onTaskCreate={this.onTaskCreate}/>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ tasks }) {
  return { tasks }
}

function mapDespatchToProps(dispatch) {
  return bindActionCreators({ toggleTask, fetchTasks, updateTask, createTask, deleteTask }, dispatch)
}

export default connect(mapStateToProps, mapDespatchToProps)(TaskList);
