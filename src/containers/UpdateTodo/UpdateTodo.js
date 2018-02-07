import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import todoListActions from '../../actions/todoListActions';

import UpdateTodoForm from '../../components/UpdateTodoForm/';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTodo: todoListActions.updateTodo
}, dispatch);

function UpdateTodo(props) {
  const {
    id,
    updateTodo
  } = props;
  
  return (
    <UpdateTodoForm
      onSubmit={
        values => {
          updateTodo(id, values.title, values.description);
        }
      }
    />
  );
}

UpdateTodo.propTypes = {
  id: PropTypes.number.isRequired,
  updateTodo: PropTypes.func.isRequired
};

UpdateTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTodo);

export default UpdateTodo;
