import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import MdEdit from 'react-icons/lib/md/edit';
import MdDelete from 'react-icons/lib/md/delete';
import MdDone from 'react-icons/lib/md/done';
import { addTask, editTask, deleteTask, discardDraft } from '../redux/actions';
import '../styles/Task.scss';

export class Task extends PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      isEditing: false,
      title: '',
      description: ''
    };

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onEdit(e) {
    e.preventDefault();

    this.setState({
      isEditing: true,
      title: this.props.title,
      description: this.props.description
    });
  }

  onDelete(e) {
    e.preventDefault();

    const { dispatch, id, title, description } = this.props;
    dispatch(deleteTask({ id, title, description }));
  }

  onSave(e) {
    e.preventDefault();

    const { dispatch, id } = this.props;
    const { title, description } = this.state;

    if (this.isDraft()) {
      dispatch(addTask({ title, description }));
    } else {
      dispatch(editTask({ id, title, description }));
    }

    this.setState({
      isEditing: false
    });
  }

  onCancel(e) {
    e.preventDefault();

    if (this.isDraft()) {
      this.props.dispatch(discardDraft());
    } else {
      this.setState({
        isEditing: false
      });
    }
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  isDraft() {
    return this.props.id == null;
  }

  isEditing() {
    return this.isDraft() || this.state.isEditing;
  }

  canSave() {
    return this.state.title !== '' && this.state.description !== '';
  }

  render() {
    const isEditing = this.isEditing();

    return (
      <div className="task card">
        <div className="card-body">
          {isEditing
            ? (
              <div className="form-group">
                <label>Title</label>
                <input
                  autoFocus className="form-control" onChange={this.onTitleChange} placeholder="Title"
                  type="text" value={this.state.title}
                />
              </div>
            ) : <h4 className="task-title card-title">{this.props.title}</h4>
          }
          {isEditing
            ? (
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control" onChange={this.onDescriptionChange} placeholder="Description" rows="5"
                  type="text" value={this.state.description}
                />
              </div>
            ) : <p className="task-description card-text">{this.props.description}</p>
          }
          <div className="text-right">
            {isEditing
              ? [
                <a
                  className={classNames("task-action", "card-link", { "disabled": !this.canSave() })} href="#" key="save"
                  onClick={this.onSave}
                >
                  {this.isDraft() ? 'Add' : 'Save'}
                </a>,
                <a className="task-action card-link" href="#" key="cancel" onClick={this.onCancel}>Cancel</a>
              ] : [
                <a className="task-action card-link" href="#" key="edit" onClick={this.onEdit} title="Edit"><MdEdit /></a>,
                <a className="task-action card-link" href="#" key="delete" onClick={this.onDelete} title="Delete"><MdDelete /></a>,
                <a className="task-action card-link" href="#" key="complete" onClick={this.onDelete} title="Complete"><MdDone /></a>
              ]}
          </div>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
};

export default connect()(Task);
