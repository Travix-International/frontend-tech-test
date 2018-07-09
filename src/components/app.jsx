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
import {
  showDialog,
  hideDialog,
  changeDialogField,
  changeDialogListField,
  changeDialogView
} from '../actions/dialog.js';
import {
  setTag,
  unsetTag,
  clearTags
} from '../actions/tags.js';
import { setActiveTodo, unsetActiveTodo } from '../actions/activetodo.js';
import Main from './main/main.jsx';

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
    changeDialogListField: PropTypes.func,
    changeDialogView: PropTypes.func,
    dialogTodo: PropTypes.object,
    tags: PropTypes.array,
    setTag: PropTypes.func,
    unsetTag: PropTypes.func,
    clearTags: PropTypes.func
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
  dialogTodo: state.todos.find(todo => todo.id === state.activeTodo),
  tags: state.tags
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
  changeDialogListField,
  changeDialogView,
  setTag,
  unsetTag,
  clearTags
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);