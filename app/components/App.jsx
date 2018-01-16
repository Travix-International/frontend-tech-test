import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from 'travix-ui-kit';

import './App.scss';
import Task from './Task';
import { addTask, fetchTasks } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind event handlers to class instance
    this.submitNewTask = this.submitNewTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    // Initial state
    this.state = {
      newTaskTitle: '',
      newTaskDescription: '',
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
      // TODO: Focus textbox
    } else {
      // TODO: Show validation error
    }
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  render() {
    const { status, tasks } = this.props;
    return (
      <div className="app">
        <div className="container">
          <h1>Things to do</h1>
          {(status === 'fetching' || status === 'invalid') && <Spinner size="m" />}
          {status === 'errored' && <div>Error</div>}
          {status === 'succeeded' && <ul>
            {tasks.map((task, i) => (
              <li key={i}>
                <Task {...task} />
              </li>
            ))}
          </ul>}

          <div>
            <h2>What do you want to achieve today?</h2>
            <Input name="newTaskTitle" onChange={this.handleInputChange} type="text" value={this.state.newTaskTitle} />
            <Input name="newTaskDescription" onChange={this.handleInputChange} type="text" value={this.state.newTaskDescription} />
            <Button onClick={this.submitNewTask}>Add</Button>
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
