import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList } from 'react-window';
import { TaskItem } from '../TaskItem'; 
import { PendableTaskEditor } from '../TaskEditor';
import { TASK_ITEM_HEIGHT } from '../../constants';
import classNames from 'classnames';
import { debounce } from 'lodash';
import styles from './TaskList.module.scss';

/**
 * List for displaying task items
 */
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
      openTaskEditor: false,
      listHeight: 0,
      useFlex: true
    };

    this.onWindowResize = debounce(this.onWindowResize, 300);
    this._containerRef = React.createRef();
  }

  componentDidMount () {
    this.props.fetchAllTasks();
    this._heightDiff = window.innerHeight - this._containerRef.current.clientHeight;
    this.calculateListHeight();
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize);
  }

  componentDidUpdate (prevProps) {
    this.updateHeightDifference();
    const newTasksCount = this.getTasksCount();
    const prevTasksCount = this.getTasksCount(prevProps.tasks);
    if (newTasksCount !== prevTasksCount) {
      this.calculateListHeight();
    }
  }

  getTasksCount = (tasks = this.props.tasks) => {
    return Array.isArray(tasks) 
      ? tasks.length
      : 0;
  }

  onWindowResize = e => {
    e.preventDefault();
    this.updateHeightDifference();
    this.calculateListHeight();
  }

  updateHeightDifference = () => {
    // calculate minimal difference to fill the remaining space
    this._heightDiff = Math.min(this._heightDiff, document.body.clientHeight - this.state.listHeight);
  }

  calculateListHeight = () => {
    const tasksCount = this.getTasksCount();

    if (tasksCount > 0) {
      // If the list is higher than the remaining area,
      // set css { flex: 1 } in list container, and expand the list to fill the remaining space
      const remainingHeight = window.innerHeight - this._heightDiff;
      const totalHeight = TASK_ITEM_HEIGHT * tasksCount;
      const useFlex = totalHeight >= remainingHeight;
      const listHeight = useFlex ? remainingHeight : totalHeight;

      this.setState(prevState => ({
        useFlex,
        listHeight
      }));
      
    } else {
      this.setState(prevState => ({
        useFlex: false,
        listHeight: 0
      }));
    }
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
    const { activeTask, openTaskEditor, listHeight, useFlex } = this.state;
    const listClasses = classNames({
      [styles['task-list']]: true,
      [styles['flex']]: useFlex
    });
    return (
      <React.Fragment>
        <div 
          className={listClasses}
          ref={this._containerRef}
        >
          <FixedSizeList
            height={listHeight}
            width={'100%'}
            itemCount={tasks.length}
            itemSize={TASK_ITEM_HEIGHT}
          >
            {props => this.renderTaskItem(props)}
          </FixedSizeList>
        </div>
        <PendableTaskEditor 
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