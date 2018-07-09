import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Header from '../header/header.jsx';
import TodoDialog from '../tododialog/tododialog.jsx';
import TodoList from '../todolist/todolist.jsx';
import Tags from '../tags/tags.jsx';
import styles from './main.css';

class Main extends Component {
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

  filterTodos() {
    const { match, todos } = this.props;
    const { filter } = match.params;
    return todos.filter(todo => (
      (filter === 'done' && todo.isDone)
      || (filter === 'notdone' && !todo.isDone)
      || !filter
    ));
  }

  render() {
    const {
      dialog,
      tags,
      activeTodo,
      addTodo,
      deleteTodo,
      updateTodo,
      setActiveTodo,
      unsetActiveTodo,
      showDialog,
      hideDialog,
      changeDialogField,
      changeDialogListField,
      changeDialogView,
      dialogTodo,
      setTag,
      unsetTag,
      clearTags
    } = this.props;

    const todos = this.filterTodos();

    return (
      <Fragment>
        <Header
          showDialog={ showDialog }
          unsetActiveTodo={ unsetActiveTodo }
        />
        <Tags 
          tags={ tags }
          clearTags={ clearTags }
          unsetTag={ unsetTag }
        />
        <main styleName='main'>
          <div styleName='container'>
            <TodoDialog
              addTodo={ addTodo }
              updateTodo={ updateTodo }
              deleteTodo={ deleteTodo }
              dialog={ dialog }
              hideDialog={ hideDialog }
              todo={ dialogTodo }
              changeDialogField={ changeDialogField }
              changeDialogListField={ changeDialogListField }
              changeDialogView={ changeDialogView }
            />
            <TodoList
              todos={ todos }
              tags={ tags }
              activeTodo={ activeTodo }
              deleteTodo={ deleteTodo }
              updateTodo={ updateTodo }
              setActiveTodo={ setActiveTodo }
              unsetActiveTodo={ unsetActiveTodo }
              showDialog={ showDialog }
              setTag={ setTag }
            />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default CSSModules(Main, styles);