/* global */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, List } from 'react-virtualized';
import Button from 'material-ui/Button';
import './TodoList.scss';

const Todo = (props) => {
  const { todo } = props;
  let TodoComponent = <span>{todo.title}</span>;

  if (todo.isDone) {
    TodoComponent = <strike><Button>{todo.title}</Button></strike>;
  }

  return TodoComponent;
};

Todo.propTypes = {
  dispatch: PropTypes.func,
  todo: PropTypes.object
};

class TodoList extends Component {
  componentWillMount() {
    this.props.loadTasks();
  }

  render() {
    const { todos, removeTask } = this.props;
    return (
      <div className="todo-list">
        <AutoSizer>
          {({ width, height }) => (
            <List
              className="todo-list__main"
              height={height}
              rowCount={todos.length}
              rowHeight={30}
              rowRenderer={({ index, key, style }) => {
                const task = todos[index];
                return (
                  <div className="list-row" key={key} style={style}>
                    {task.id}, {task.title}, {task.description}
                    <Button onClick={() => removeTask(task.id, index)}>Delete</Button>
                  </div>
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
  todos: PropTypes.array.isRequired
};

export {
  TodoList as default,
  Todo
};
