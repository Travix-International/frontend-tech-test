/* global */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, List } from 'react-virtualized';
import IconButton from 'material-ui/IconButton';
import { CircularProgress } from 'material-ui/Progress';
import CloseIcon from 'material-ui-icons/Close';
import EditIcon from 'material-ui-icons/Edit';
import './TodoList.scss';

const Todo = (props) => {
  const { task, index, style, selectTodoIndex, removeTodo } = props;

  return (
    <div
      className="list-row"
      style={style}
    >
      <div
        className="list-row__wrapper"
      >
        <div className="list-row__id">{task.id}</div>
        <div className="list-row__title">{task.title}</div>
        <div className="list-row__description">{task.description}</div>
        <IconButton
          className="list-row__button"
          color="primary"
          onClick={() => selectTodoIndex(index)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          className="list-row__button"
          onClick={() => removeTodo(task.id, index)}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};

Todo.propTypes = {
  selectTodoIndex: PropTypes.func,
  removeTodo: PropTypes.func,
  index: PropTypes.number,
  style: PropTypes.object,
  task: PropTypes.object
};

class TodoList extends Component {
  componentWillMount() {
    this.props.loadTodos();
  }

  render() {
    const { todos, loading, removeTodo, selectTodoIndex } = this.props;

    return (
      <div className="todo-list">
        {loading && (
          <div className="todo-list__loading-wrapper">
            <CircularProgress mode="indeterminate" />
          </div>
        )}
        <AutoSizer>
          {({ width, height }) => (
            <List
              className="todo-list__main"
              height={height}
              rowCount={todos.length}
              rowHeight={48}
              rowRenderer={({ index, key, style }) => {
                return (
                  <Todo
                    index={index}
                    key={key}
                    removeTodo={removeTodo}
                    selectTodoIndex={selectTodoIndex}
                    style={style}
                    task={todos[index]}
                  />
                );
              }}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

TodoList.propTypes = {
  loadTodos: PropTypes.func,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  selectTodoIndex: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired
};

export {
  TodoList as default,
  Todo
};
