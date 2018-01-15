import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task from './Task.jsx';
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
      <div>
        <h1>To-do list</h1>
        {(status === 'fetching' || status === 'invalid') && <div>Loading...</div>}
        {status === 'errored' && <div>Error</div>}
        {status === 'succeeded' && <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              <Task {...task} />
            </li>
          ))}
        </ul>}

        <div>
          <input name="newTaskTitle" onChange={this.handleInputChange} type="text" value={this.state.newTaskTitle} />
          <input name="newTaskDescription" onChange={this.handleInputChange} type="text" value={this.state.newTaskDescription} />
          <button onClick={this.submitNewTask}>Add</button>
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
