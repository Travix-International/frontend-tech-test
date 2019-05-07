import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
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
    }))
  }

  toggleTask = id => {
    this.props.onToggleTask(id);
  }

  render () {
    const { tasks } = this.props;
    const { activeTask, openTaskEditor } = this.state;
    return (
      <React.Fragment>
        <ListGroup flush>
          {
            tasks.map((task, ind) => {
              const key = `task_${task.id}_${ind}`;
              return (
                <TaskItem
                  key={key}
                  task={task}
                  onToggleTask={this.toggleTask}
                  onClickTask={this.editTask}
                />
              );
            })
          }
        </ListGroup>
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