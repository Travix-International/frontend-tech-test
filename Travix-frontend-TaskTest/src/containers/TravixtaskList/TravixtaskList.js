import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TravixtaskItem from '../../components/TravixtaskItem';
import './TravixtaskList.scss';
import { TASKS_PER_PAGE } from '../../Globalconstants';
import { fetchTravixTasksList } from './TLactions';
import Recordspaging from '../../components/Recordspaging';

class TravixtaskList extends React.Component {
  constructor(props) {
    super(props);
    props.fetchTravixTasksList(1, TASKS_PER_PAGE, props.filterBy);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.updatedDate !== this.props.updatedDate ||
      nextProps.filterBy !== this.props.filterBy
    )
      this.props.fetchTravixTasksList(
        this.props.pageNumber,
        TASKS_PER_PAGE,
        nextProps.filterBy
      );
  }

  onPageChange(page) {
    this.props.fetchTravixTasksList(page, TASKS_PER_PAGE, this.props.filterBy);
  }

  render() {
    if (this.props.fetching) return null;
    const taskUi = this.props.tasks.map(task => (
      <TravixtaskItem
        keyVal={task.id}
        onTaskSelected={this.props.handleTaskSelection}
        task={task}
        key = {task.id}
      />
    ));
    return (
      <Fragment>
        <div className="TaskListwrap">{taskUi}</div>{' '}
        <Recordspaging
          currentPage={this.props.pageNumber}
          onPageClick={this.onPageChange}
          totalRecords={this.props.totalRecords}
        />
      </Fragment>
    );
  }
}

TravixtaskList.defaultProps = {
  tasks: [],
  pageNumber: 1,
  totalRecords: 0,
  updatedDate: 0,
  filterBy: '',
};

TravixtaskList.propTypes = {
  fetching: PropTypes.bool.isRequired,
  fetchTravixTasksList: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { fetchTravixTasksList })(TravixtaskList);
