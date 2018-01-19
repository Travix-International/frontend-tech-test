import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'travix-ui-kit';

import './App.scss';
import Task from './Task';
import NewTask from './NewTask';
import { addTask, fetchTasks } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind event handlers to class instance
    this.submitNewTask = this.submitNewTask.bind(this);
  }

  submitNewTask(title, description) {
    this.props.dispatch(addTask({ title, description }));
  }

  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  render() {
    const { status, tasks } = this.props;

    return (
      <div className="app">
        <div className="container">
          <NewTask onSubmit={this.submitNewTask} />

          <h3>Things to do</h3>
          {(status === 'fetching' || status === 'invalid') && <Spinner size="m" />}
          {status === 'errored' && <div>Error</div>}
          {status === 'succeeded' && <div className="container">
            {tasks.map((task, i) => (
              <div className="row" key={i}>
                <Task {...task} />
              </div>
            ))}
          </div>}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

App.defaultProps = {
  tasks: [],
};

function mapStateToProps({ tasks: { status, data } }) {
  return {
    status,
    tasks: data,
  };
}

export default connect(mapStateToProps)(App);
