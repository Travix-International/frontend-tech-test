import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(editTodo(ownProps.id))
});

export const EditTodo = ({ completed, editable, onClick }) => {
  if (completed || editable) return null;

  return (
    <span className="icon edit" onClick={onClick}>
      <FontAwesomeIcon icon={faEdit} />
    </span>
  );
};
export default connect(
  null,
  mapDispatchToProps
)(EditTodo);
