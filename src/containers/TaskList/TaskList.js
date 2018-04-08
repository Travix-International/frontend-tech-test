import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskItem from '../../components/TaskItem';
import './TaskList.scss';
import { TASKS_PER_PAGE } from '../../constants';
import { fetchTasks } from './actions';
// import { tasks } from '../../../tasks.json';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    props.fetchTasks(1, TASKS_PER_PAGE);
  }

  render() {
    if (this.props.fetching) return null;
    const taskUi = this.props.tasks.map(task => (
      <TaskItem
        key={task.id}
        onTaskSelected={this.props.handleTaskSelection}
        task={task}
      />
    ));
    return <div className="TaskList__wrapper">{taskUi}</div>;
  }
}

TaskList.defaultProps = {
  tasks: [],
};

TaskList.propTypes = {
  fetching: PropTypes.bool.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  handleTaskSelection: PropTypes.func.isRequired,
  tasks: PropTypes.array,
};

const mapStateToProps = state => ({
  tasks: state.TaskListReducer.tasks,
  fetching: state.TaskListReducer.fetching,
});

export default connect(mapStateToProps, { fetchTasks })(TaskList);
