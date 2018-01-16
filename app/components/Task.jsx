import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { editTask, deleteTask } from '../actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { title, description } = this.props;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);

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

  edit() {
    const { dispatch, id } = this.props;
    const { newTitle, newDescription } = this.state;
    dispatch(editTask({ id, title: newTitle, description: newDescription }));
    this.toggleEditMode();
  }

  // State modifiers
  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { title, description } = this.props;
    const { editMode, newTitle, newDescription } = this.state;

    if (editMode) {
      return (
        <div>
          <input name="newTitle" onChange={this.handleInputChange} type="text" value={newTitle} />
          <input name="newDescription" onChange={this.handleInputChange} type="text" value={newDescription} />
          <button onClick={this.edit}>Save</button>
          <button onClick={this.toggleEditMode}>Cancel</button>
        </div>
      );
    }

    return (
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <button onClick={this.toggleEditMode}>Edit</button>
        <button onClick={this.delete}>Delete</button>
      </div>
    );
  }
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return ownProps;
}

export default connect(mapStateToProps)(Task);
