import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button, Checkbox } from 'travix-ui-kit';
import classNames from 'classnames';

import './Task.scss';
import { editTask, deleteTask, toggleCompleteTask } from '../actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { title, description } = this.props;

    this.handleInputChange = this.handleInputChange.bind(this);
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

  edit() {
    const { dispatch, id } = this.props;
    const { newTitle, newDescription } = this.state;
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

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { id, title, description, completed } = this.props;
    const { editMode, newTitle, newDescription } = this.state;

    if (editMode) {
      return (
        <div className="row edit">
          <div>
            <Input name="newTitle" onChange={this.handleInputChange} type="text" value={newTitle} />
            <Input name="newDescription" onChange={this.handleInputChange} type="text" value={newDescription} />
          </div>
          <div>
            <Button onClick={this.edit}>Save</Button>
            <Button onClick={this.toggleEditMode}>Cancel</Button>
          </div>
        </div>
      );
    }

    return [
      <div className={classNames('col-9', { completed })}>
        <Checkbox checked={completed} name={id} onChange={this.toggleCompleted}>
          <span className="font-heavy">{title}</span>
          {' '}
          <span>{description}</span>
        </Checkbox>
      </div>,
      <div className="col-3">
        <Button onClick={this.toggleEditMode} size="xs">Edit</Button>
        <Button onClick={this.delete} size="xs">Delete</Button>
      </div>,
    ];
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
