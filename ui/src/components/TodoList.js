import React from 'react';
import PropTypes from 'prop-types';

import { AutoSizer, List } from 'react-virtualized';

import './TodoList.css';

import TodoItem from './TodoItem';

const TodoList = ({ items, onTodoDelete, onTodoEdit, onTodoToggle }) => {
  const rowRenderer = (params) => {
    const item = items[params.index];

    return (
      <div key={item.id} style={params.style}>
        <TodoItem onDelete={onTodoDelete} onEdit={onTodoEdit} todo={item} />
      </div>
    );
  };

  return (
    <div className="todo-list">
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            rowCount={items.length}
            rowHeight={59}
            rowRenderer={data => rowRenderer(data)}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  );
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired
};

export default TodoList;
