/* global */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, List } from 'react-virtualized';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import EditIcon from 'material-ui-icons/Edit';
import AddIcon from 'material-ui-icons/Add';
import './TodoList.scss';

const Todo = (props) => {
  const { task, index, style, selectTaskIndex, removeTask } = props;

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
        <IconButton className="list-row__button" onClick={() => selectTaskIndex(index)}>
          <EditIcon />
        </IconButton>
        <IconButton className="list-row__button" onClick={() => removeTask(task.id, index)}>
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};

Todo.propTypes = {
  selectTaskIndex: PropTypes.func,
  removeTask: PropTypes.func,
  index: PropTypes.number,
  style: PropTypes.object,
  task: PropTypes.object
};

class TodoList extends Component {
  componentWillMount() {
    this.props.loadTasks();
  }

  render() {
    const { todos, removeTask, selectTaskIndex } = this.props;
    return (
      <div className="todo-list">
        <Button
          aria-label="add"
          className="todo-list__add-button"
          color="primary"
          fab
        >
          <AddIcon />
        </Button>
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
                    removeTask={removeTask}
                    selectTaskIndex={selectTaskIndex}
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
  loadTasks: PropTypes.func,
  addTask: PropTypes.func,
  removeTask: PropTypes.func,
  selectTaskIndex: PropTypes.func,
  todos: PropTypes.array.isRequired
};

export {
  TodoList as default,
  Todo
};
