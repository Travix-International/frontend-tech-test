import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskItem from '../../components/TaskItem';
import './TaskList.scss';
import { TASKS_PER_PAGE } from '../../constants';
import { fetchTasks } from './actions';
import Paging from '../../components/Paging';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    props.fetchTasks(1, TASKS_PER_PAGE, props.filterBy);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.updatedDate !== this.props.updatedDate ||
      nextProps.filterBy !== this.props.filterBy
    )
      this.props.fetchTasks(
        this.props.pageNumber,
        TASKS_PER_PAGE,
        nextProps.filterBy
      );
  }

  handlePageChange(page) {
    this.props.fetchTasks(page, TASKS_PER_PAGE, this.props.filterBy);
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
    return (
      <Fragment>
        <div className="TaskList__wrapper">{taskUi}</div>{' '}
        <Paging
          currentPage={this.props.pageNumber}
          onPageClicked={this.handlePageChange}
          totalRecords={this.props.totalRecords}
        />
      </Fragment>
    );
  }
}

TaskList.defaultProps = {
  tasks: [],
  pageNumber: 1,
  totalRecords: 0,
  updatedDate: 0,
  filterBy: '',
};

TaskList.propTypes = {
  fetching: PropTypes.bool.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  filterBy: PropTypes.string,
  handleTaskSelection: PropTypes.func.isRequired,
  pageNumber: PropTypes.number,
  tasks: PropTypes.array,
  totalRecords: PropTypes.number,
  updatedDate: PropTypes.number,
};

const mapStateToProps = state => ({
  tasks: state.TaskListReducer.tasks,
  pageNumber: state.TaskListReducer.pageNumber,
  totalRecords: state.TaskListReducer.totalRecords,
  fetching: state.TaskListReducer.fetching,
});

export default connect(mapStateToProps, { fetchTasks })(TaskList);
