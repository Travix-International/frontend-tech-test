import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import todoListActions from '../../actions/todoListActions';

import AddTodoForm from '../../components/AddTodoForm/';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo: todoListActions.addTodo
}, dispatch);

function AddTodo(props) {
  const {
    addTodo
  } = props;
  
  return (
    <AddTodoForm
      onSubmit={values => {
        addTodo(values.title, values.description);
      }}
    />
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
