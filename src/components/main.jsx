import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Header from './header.jsx';
import TodoDialog from './tododialog.jsx';
import TodoList from './todolist.jsx';
import styles from './main.css';

class Main extends PureComponent {
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
      activeTodo,
      addTodo,
      deleteTodo,
      updateTodo,
      setActiveTodo,
      unsetActiveTodo,
      showDialog,
      hideDialog,
      changeDialogField,
      changeDialogView,
      dialogTodo
    } = this.props;

    const todos = this.filterTodos();

    return (
      <Fragment>
        <Header
          showDialog={ showDialog }
          unsetActiveTodo={ unsetActiveTodo }
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
              changeDialogView={ changeDialogView }
            />
            <TodoList
              todos={ todos }
              activeTodo={ activeTodo }
              deleteTodo={ deleteTodo }
              updateTodo={ updateTodo }
              setActiveTodo={ setActiveTodo }
              unsetActiveTodo={ unsetActiveTodo }
              showDialog={ showDialog }
            />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default CSSModules(Main, styles);