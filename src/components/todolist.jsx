import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './todolist.css';
import Todo from './todo.jsx';

class TodoList extends PureComponent {
  static propTypes = {
    updateTodo: PropTypes.func,
    setActiveTodo: PropTypes.func,
    todos: PropTypes.array,
    showDialog: PropTypes.func
  }

  render() {
    const {
      todos,
      updateTodo,
      setActiveTodo,
      showDialog
    } = this.props;

    return (
      <div styleName='todos'>
        {
          todos && todos.reduceRight((res, todo) => {
            res.push(
              <Todo
                { ...todo }
                key={ todo.id }
                setActiveTodo={ setActiveTodo }
                showDialog={ showDialog }
                updateTodo={ updateTodo }
              />
            );
            return res;
          }, [])
        }
      </div>
    );
  }
}

export default CSSModules(TodoList, styles);