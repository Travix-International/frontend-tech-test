import React from 'react';
import PropTypes from 'prop-types';

import { AutoSizer, List } from 'react-virtualized';

import Item from './Item';
import style from './style.scss';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired
};

const TodoList = ({isEmpty, isFetching, editTodo, deleteTodo, todos}) => {
  const rowRenderer = (data) => {
    const { index } = data;
    const innerStyle = data.style;
    const todo = todos[index];

    return (
      <div key={todo.id} style={innerStyle}>
        <Item
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          todo={todo}
        />
      </div>
    );
  };

  return (
    <div className={style.list}>
      { isFetching && ( <div className={style.loading}>LOADING</div> ) }
      { !isEmpty ? (
        <AutoSizer>
          {({ width }) => (
            <List
              height={320}
              rowCount={todos.length}
              rowHeight={40}
              rowRenderer={data => rowRenderer(data, todos)}
              style={{ outline: 'none' }}
              width={width}
            />
          )}
        </AutoSizer>
      ) : null }

      { isEmpty && !isFetching ? (
        <div className={style.emptyList}>
          <img className={style.icon} />
          <p className={style.emptyMessage}>
            Congratulations!
          </p>
          <p className={style.emptyMessage}>
            Your todo list is empty
          </p>
        </div>
      ) : null }
    </div>
  );
}

TodoList.propTypes = propTypes;

export default TodoList;
