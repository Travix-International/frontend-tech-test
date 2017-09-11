import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTasks, clearErrors } from '../redux/actions';
import Task from './Task';

class Tasks extends PureComponent {
  constructor(...args) {
    super(...args);

    this.onDismissError = this.onDismissError.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  onDismissError() {
    this.props.dispatch(clearErrors());
  }

  render() {
    const { isLoading, tasks, drafts, filterText, error } = this.props;
    const taskCount = tasks.length;
    const draftCount = drafts.length;

    return (
      <div className="tasks">
        {isLoading && <p className="text-center">Retrieving your tasks...</p>}
        {error &&
          <div className="alert alert-danger" role="alert">
            <button aria-label="Close" className="close" onClick={this.onDismissError} type="button">
              <span aria-hidden="true">&times;</span>
            </button>
            {error}
          </div>
        }
        {filterText !== '' &&
          <div className="alert alert-light" role="alert">
            {taskCount === 0 ? 'No' : taskCount} results for <strong>{filterText}</strong>
          </div>
        }
        {filterText === '' && taskCount === 0 && draftCount === 0 &&
          <p className="text-center">No tasks added.</p>
        }
        <div className="card-columns">
          {tasks.map(task => <Task key={task.id} {...task} />)}
          {drafts.map((draft, i) => <Task key={i} {...draft} />)}
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  tasks: PropTypes.array,
  drafts: PropTypes.array,
  filterText: PropTypes.string,
  error: PropTypes.string
};

const mapStateToProps = (state) => {
  const { isLoading, tasks, drafts, filterText, error } = state;

  const normalizedFilterText = filterText.toLowerCase().trim();
  const filteredTasks = filterText === '' ? tasks : tasks.filter(({ title }) =>
    title.toLowerCase().indexOf(normalizedFilterText) !== -1
  );

  return { isLoading, tasks: filteredTasks, drafts, filterText, error };
};

export default connect(mapStateToProps)(Tasks);
