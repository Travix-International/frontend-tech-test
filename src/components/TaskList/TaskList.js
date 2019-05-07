import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import { TaskItem } from '../TaskItem'; 
import { TaskEditor } from '../TaskEditor';

class TaskList extends React.PureComponent {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      TaskItem.propTypes.task
    ),
    fetchAllTasks: PropTypes.func,
    onToggleTask: PropTypes.func,
    onSubmitTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
  }

  static defaultProps = {
    tasks: [],
    fetchAllTasks: () => {},
    onToggleTask: () => {},
    onSubmitTask: () => {},
    onDeleteTask: () => {}
  }

  constructor (props) {
    super(props);
    this.state = {
      activeTask: null,
      openTaskEditor: false
    };
  }

  componentDidMount () {
    this.props.fetchAllTasks();
  }

  editTask = task => {
    this.setState(prevState => ({
      activeTask: task,
      openTaskEditor: true
    }));
  }

  toggleTaskEditor = e => {
    this.setState(prevState => ({
      openTaskEditor: !prevState.openTaskEditor
    }));
  }

  toggleTask = id => {
    this.props.onToggleTask(id);
  }

  renderTaskItem = (args) => {
    const { index, style } = args;
    const task = this.props.tasks[index];
    return (
      <TaskItem
        task={task}
        style={style}
        onToggleTask={this.toggleTask}
        onClickTask={this.editTask}
      />
    );
  }

  render () {
    const { tasks } = this.props;
    const { activeTask, openTaskEditor } = this.state;
    return (
      <React.Fragment>
        <FixedSizeList
          height={400}
          width={'100%'}
          itemCount={tasks.length}
          itemSize={52}
        >
          { props => this.renderTaskItem(props) }
        </FixedSizeList>
        <TaskEditor 
          task={activeTask}
          open={openTaskEditor}
          onToggle={this.toggleTaskEditor} 
          onSubmit={this.props.onSubmitTask}
          onDelete={this.props.onDeleteTask}
        />
      </React.Fragment>
    );
  }
}

export default TaskList;