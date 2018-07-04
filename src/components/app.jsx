import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSModules from 'react-css-modules';
import Button from 'react-toolbox/lib/button';

import {
  addTodo,
  getTodos,
  deleteTodo,
  updateTodo
} from '../actions/todos.js';
import { setActiveTodo, unsetActiveTodo } from '../actions/activetodo.js';
import { showDialog, hideDialog } from '../actions/dialog.js';
import TodoDialog from './tododialog.jsx';
import Filter from './filter.jsx';
import TodoList from './todolist.jsx';
import styles from './app.css';

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
    isDialogActive: PropTypes.bool,
    showDialog: PropTypes.func,
    hideDialog: PropTypes.func,
    dialogTodo: PropTypes.object
  }

  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();
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

  addTodoClick = () => {
    const { showDialog, unsetActiveTodo } = this.props;
    unsetActiveTodo();
    showDialog();
  }
  
  render() {
    const {
      isDialogActive,
      activeTodo,
      addTodo,
      deleteTodo,
      updateTodo,
      setActiveTodo,
      unsetActiveTodo,
      showDialog,
      hideDialog,
      dialogTodo
    } = this.props;
    const todos = this.filterTodos();

    return (
      <Fragment>
        <header styleName='header'>
          <div styleName='container'>
            <div styleName='content'>
              todos
              <Button
                icon='add'
                label='Add todo'
                raised
                onClick={ this.addTodoClick }
              />
            </div>
          </div>
        </header>
        <main styleName='main'>
          <div styleName='container'>
            <TodoDialog
              addTodo={ addTodo }
              updateTodo={ updateTodo }
              deleteTodo={ deleteTodo }
              isActive={ isDialogActive }
              hideDialog={ hideDialog }
              todo={ dialogTodo }
            />
            <Filter />
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

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeTodo: state.activeTodo,
  isDialogActive: state.dialog,
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
  hideDialog
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(App, styles));