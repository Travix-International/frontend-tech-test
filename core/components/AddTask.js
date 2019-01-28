import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAddTodo: false,
      title: '',
      description: '',
      formHasError: false,
    };
    this.handleAddTaskFormChange = this.handleAddTaskFormChange.bind(this);
    this.handleFocusAddTodo = this.handleFocusAddTodo.bind(this);
    this.submitAddTaskForm = this.submitAddTaskForm.bind(this);
    this.handleAddTaskFormChange = this.handleAddTaskFormChange.bind(this);
  }

  handleFocusAddTodo() {
    this.setState({
      activeAddTodo: true,
      formHasError: false,
    });
  }

  handleAddTaskFormChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
      activeAddTodo: true,
      formHasError: false,
    });
  }

  submitAddTaskForm(event) {
    event.preventDefault();
    const { title, description } = this.state;
    const { handleAddTask } = this.props;
    if (title && title.length > 0) {
      handleAddTask({ title, description });
      this.setState({
        title: '',
        description: '',
        formHasError: false,
        activeAddTodo: false,
      });
    } else {
      this.setState({ formHasError: true });
    }
  }

  render() {
    const {
      activeAddTodo, title, description, formHasError,
    } = this.state;
    const addTaskFromClasses = classNames({
      active: activeAddTodo,
      'has-error': formHasError,
    });

    return (
      <form className={addTaskFromClasses} id="add-todo" name="addTask" onSubmit={this.submitAddTaskForm}>
        <div className="title-div">
          <FontAwesomeIcon
            className="add-icon"
            icon={faPlus}
            onClick={this.submitAddTaskForm}
          />
          <input
            autoComplete="off"
            className="add-todo-input"
            name="title"
            onChange={this.handleAddTaskFormChange}
            onFocus={this.handleFocusAddTodo}
            placeholder="Add to-do ..."
            type="text"
            value={title}
          />
        </div>

        <textarea
          autoComplete="off"
          className="description"
          name="description"
          onChange={this.handleAddTaskFormChange}
          placeholder="Add a description!!"
          value={description}
        />
      </form>
    );
  }
}
AddTask.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};
export default AddTask;
