import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Task.scss';
import TaskLabel from './TaskLabel';
import EditableTask from './EditableTask';
import { editTask, deleteTask, toggleCompleteTask } from '../actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { title, description } = this.props;

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);

    this.state = {
      editMode: false,
      newTitle: title,
      newDescription: description,
    };
  }

  // Transactions
  delete() {
    const { dispatch, id } = this.props;
    dispatch(deleteTask(id));
  }

  edit(newTitle, newDescription) {
    const { dispatch, id } = this.props;
    dispatch(editTask({ id, title: newTitle, description: newDescription }));
    this.toggleEditMode();
  }

  toggleCompleted() {
    const { dispatch, id } = this.props;
    dispatch(toggleCompleteTask(id));
  }

  // State modifiers
  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    const { id, title, description, completed } = this.props;
    const { editMode } = this.state;

    if (editMode) {
      return (
        <EditableTask
          description={description} onCancel={this.toggleEditMode} onSave={this.edit} title={title}
        />
      );
    }

    return (
      <TaskLabel
        completed={completed} description={description} id={id} onDelete={this.delete}
        onToggleCompleted={this.toggleCompleted} onToggleEditMode={this.toggleEditMode} title={title}
      />
    );
  }
}

Task.propTypes = {
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return ownProps;
}

export default connect(mapStateToProps)(Task);
