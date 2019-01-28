import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.selectedTask.title,
      description: props.selectedTask.description,
      formHasError: false,
    };
    this.handleEditTaskFormChange = this.handleEditTaskFormChange.bind(this);
    this.handleEditTaskSubmit = this.handleEditTaskSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { selectedTask } = nextProps;
    this.setState({ title: selectedTask.title, description: selectedTask.description });
  }

  handleEditTaskFormChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
      formHasError: false,
    });
  }

  handleEditTaskSubmit() {
    const { title, description } = this.state;
    const { selectedTask, handleEditTask } = this.props;
    if (title && title.length > 0) {
      selectedTask.title = title;
      selectedTask.description = description;
      handleEditTask(selectedTask);
    } else {
      this.setState({ formHasError: true });
    }
  }

  render() {
    const {
      handleCloseSideBar, handleDeleteTask, selectedTask,
    } = this.props;
    const { title, description, formHasError } = this.state;
    return (
      <div id="view-todo">
        { !selectedTask.id ? <div />
          : (
            <form id="view-todo-container" onSubmit={(event) => { event.preventDefault(); }}>

              <div className={formHasError ? ' title has-error' : 'title'}>
                <input
                  autoComplete="off"
                  className=" edit-input "
                  name="title"
                  onChange={this.handleEditTaskFormChange}
                  placeholder="Edit tour task"
                  type="text"
                  value={title}
                />
              </div>

              <div className="description">
                <textarea
                  autoComplete="off"
                  name="description"
                  onChange={this.handleEditTaskFormChange}
                  placeholder="Add a description .. "
                  value={description}
                />
              </div>

              <div className="controller">
                <FontAwesomeIcon
                  className="delete-todo-icon"
                  icon={faTrash}
                  onClick={() => { handleDeleteTask(selectedTask); }}
                />
                {title !== selectedTask.title || description !== selectedTask.description ? (
                  <FontAwesomeIcon
                    className="save-todo-icon"
                    icon={faSave}
                    onClick={this.handleEditTaskSubmit}
                  />
                ) : '' }
                <FontAwesomeIcon
                  className="close-view-todo-icon"
                  icon={faArrowLeft}
                  onClick={() => { handleCloseSideBar(); }}
                />


              </div>
            </form>
          )
              }
      </div>
    );
  }
}
EditTask.propTypes = {
  handleCloseSideBar: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
};

export default EditTask;
