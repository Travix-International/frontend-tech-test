import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Todo from '../todo/todo.jsx';
import styles from './todolist.css';

class TodoList extends PureComponent {
  static propTypes = {
    updateTodo: PropTypes.func,
    setActiveTodo: PropTypes.func,
    todos: PropTypes.array,
    showDialog: PropTypes.func,
    setTag: PropTypes.func,
    tags: PropTypes.array
  }

  todoFilter = () => {
    const { tags, todos } = this.props;
    
    return todos.reduce((result, todo) => {
      const foundTags = tags.filter(tag =>  todo.tags.findIndex(todoTag => tag === todoTag) + 1);
      if (foundTags.length !== tags.length) return result;
      result.push(todo);
      return result;
    }, []);
  }

  render() {
    const {
      updateTodo,
      setActiveTodo,
      showDialog,
      setTag
    } = this.props;
    const { todoFilter } = this;
    const filteredTodos = todoFilter();

    return (
      <div styleName='todos'>
        {
          filteredTodos && filteredTodos.reduceRight((res, todo) => {
            res.push(
              <Todo
                todo={ todo }
                key={ todo.id }
                setActiveTodo={ setActiveTodo }
                showDialog={ showDialog }
                updateTodo={ updateTodo }
                setTag={ setTag }
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