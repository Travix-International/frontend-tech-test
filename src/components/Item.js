import React from 'react';
import PropTypes from 'prop-types';
import ItemForm from './Form';
import { connect } from 'react-redux';

@connect(state => ({
  isDoing: state.task.form.saving
}), {})
export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'view'
    };

    this.onEditClick = this.onEditClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { isDoing } = this.props;
    const { isDoing: nextIsDoing } = nextProps;

    if (isDoing !== nextIsDoing && nextIsDoing === false) {
      this.setState({mode: 'view'});
    }
  }

  onEditClick() {
    const { mode } = this.state;
    this.setState({
      mode: mode === 'view' ? 'edit' : 'view'
    });
  }

  renderEditMode() {
    const { id, title, description, onFormSubmit } = this.props;

    return (
      <ItemForm onSubmit={onFormSubmit} title={title} id={id} description={description} />
    );
  }

  renderViewMode() {
    const { id, title, description, onDeleteClick } = this.props;

    return (
      <div>
        <button className="task-action" type="button" onClick={onDeleteClick}>Delete</button>
        <button className="task-action" type="button" onClick={this.onEditClick}>Edit</button>

        <div className="id"># {id}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    );
  }

  render() {
    const { mode } = this.state;

    return (
      <div className="task-item">
        { mode !== 'view' && this.renderEditMode() }
        { mode === 'view' && this.renderViewMode() }
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  isDoing: PropTypes.bool,
  onFormSubmit: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};
