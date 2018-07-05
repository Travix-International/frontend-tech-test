import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addTodo,
  getTodos,
  deleteTodo,
  updateTodo
} from '../actions/todos.js';
import { setActiveTodo, unsetActiveTodo } from '../actions/activetodo.js';
import {
  showDialog,
  hideDialog,
  changeDialogField,
  changeDialogView
} from '../actions/dialog.js';
import Main from './main.jsx';

class App extends PureComponent {
  static propTypes = {
    getTodos: PropTypes.func,
    addTodo: PropTypes.func,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    setActiveTodo: PropTypes.func,
    unsetActiveTodo: PropTypes.func,
    activeTodo: PropTypes.number,
    todos: PropTypes.array,
    match: PropTypes.object,
    dialog: PropTypes.object,
    showDialog: PropTypes.func,
    hideDialog: PropTypes.func,
    changeDialogField: PropTypes.func,
    changeDialogView: PropTypes.func,
    dialogTodo: PropTypes.object
  }

  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();
  }
  
  render() {
    return <Main { ...this.props } />;
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeTodo: state.activeTodo,
  dialog: state.dialog,
  dialogTodo: state.todos.find(todo => todo.id === state.activeTodo)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTodo,
  getTodos,
  deleteTodo,
  updateTodo,
  setActiveTodo,
  unsetActiveTodo,
  showDialog,
  hideDialog,
  changeDialogField,
  changeDialogView
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);