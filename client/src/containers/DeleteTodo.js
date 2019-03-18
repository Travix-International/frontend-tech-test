import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(deleteTodo(ownProps.id))
});

export class DeleteTodo extends React.Component {
  render() {
    const { onClick, editable } = this.props;
    if (editable) return null;

    return (
      <span className="icon delete" onClick={onClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteTodo);
