import React from 'react';
import PropTypes from 'prop-types';
import LoadingMessage from '../../common/LoadingMessage';
import ErrorMessage from '../../common/ErrorMessage';
import EmptyMessage from '../../common/EmptyMessage';
import TasksList from './TasksList';

export default class ShowTasks extends React.Component {
  static propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.any),
    className: PropTypes.string,
    isFetching: PropTypes.bool,
    error: PropTypes.any,
  }

  static defaultProps = {
    className: '',
    tasks: [],
    error: null,
    isFetching: false,
  }

  componentWillMount() {
    this.props.fetchTasks();
  }

  get areTasksEmpty() {
    const { tasks } = this.props;

    return !(tasks && tasks.length > 0);
  }

  get tasksList() {
    const { tasks, className } = this.props;

    return (
      <TasksList
        className={`ShowTasks-TasksList ${className}`}
        tasks={tasks}
      />
    );
  }

  getErrorMessage(error) {
    return (
      <div>{error}</div>
    );
  }

  getLoadingMessage() {
    return (
      <div>Loading Tasks</div>
    );
  }

  getEmptyMessage() {
    return (
      <div>No Tasks Found</div>
    );
  }

  render() {
    const { isFetching, error } = this.props;

    return (
      <LoadingMessage
        isLoading={isFetching}
        renderMessage={this.getLoadingMessage}
      >
        <ErrorMessage
          error={error}
          renderMessage={this.getErrorMessage}
        >
          <EmptyMessage
            isEmpty={this.areTasksEmpty}
            renderMessage={this.getEmptyMessage}
          >
            {this.tasksList}
          </EmptyMessage>
        </ErrorMessage>
      </LoadingMessage>
    );
  }
}
