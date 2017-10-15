import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as todoActions } from '../../redux/modules/todos';

class TodosView extends Component {
  static propTypes = {
    todoActions: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    todoIds: PropTypes.array.isRequired,
    todos: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.todoActions.listTodos();
  }

  render() {
    const todos = this.props.todoIds.map((id) => {
      return this.props.todos[id];
    });
    console.log(todos);
    return (
      <p className="app-intro">
        Hello World! <br />
      </p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  todoActions: bindActionCreators(todoActions, dispatch)
});

const mapStateToProps = (state) => ({
  isLoading: state.todos.isLoading,
  todoIds: state.todos.todoIds,
  todos: state.todos.todos
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
