import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from 'travix-ui-kit';
import classNames from 'classnames';

import './App.scss';
import Task from './Task';
import { addTask, fetchTasks } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind event handlers to class instance
    this.submitNewTask = this.submitNewTask.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    // Initial state
    this.state = {
      newTaskTitle: '',
      newTaskDescription: '',
      errorTitle: false,
      errorDescription: false,
    };
  }

  submitNewTask() {
    const { newTaskTitle, newTaskDescription } = this.state;
    if (newTaskTitle.trim() && newTaskDescription.trim()) {
      this.props.dispatch(addTask({ title: newTaskTitle, description: newTaskDescription }));
      this.setState({
        newTaskTitle: '',
        newTaskDescription: '',
      });
    } else {
      this.setState({
        errorTitle: newTaskTitle.trim() === '',
        errorDescription: newTaskDescription.trim() === '',
      });
    }

    this.newTitleInput.focus();
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      // Note that the state is bound to element's attribute `name`
      [name]: value,

      // Clear validation errors when typing
      errorTitle: false,
      errorDescription: false,
    });
  }

  handleKeyDown({ keyCode }) {
    if (keyCode === 13) {
      this.submitNewTask();
    }
  }

  componentDidMount() {
    this.newTitleInput.focus();
    this.props.dispatch(fetchTasks());
  }

  render() {
    const { status, tasks } = this.props;
    const { errorTitle, errorDescription } = this.state;

    return (
      <div className="app">
        <div className="container">
          <h1>Things to do</h1>
          {(status === 'fetching' || status === 'invalid') && <Spinner size="m" />}
          {status === 'errored' && <div>Error</div>}
          {status === 'succeeded' && <div className="container">
            {tasks.map((task, i) => (
              <div className="row" key={i}>
                <Task {...task} />
              </div>
            ))}
          </div>}

          <div className="container">
            <div className="row">
              <h2>What do you want to achieve today?</h2>
            </div>
            <div className="row">
              <div className="col-5">
                <Input
                  name="newTaskTitle" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}
                  placeholder="Title" ref={(input) => { this.newTitleInput = input; }}
                  status={classNames({ error: errorTitle })} value={this.state.newTaskTitle}
                />
              </div>
              <div className="col-5">
                <Input
                  name="newTaskDescription" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown}
                  placeholder="Description" status={classNames({ error: errorDescription })}
                  value={this.state.newTaskDescription}
                />
              </div>
              <div className="col-2">
                <Button onClick={this.submitNewTask}>Add</Button>
              </div>
            </div>
          </div>
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
