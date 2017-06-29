import React from 'react';
import PropTypes from 'prop-types';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

import sunIcon from 'assets/sun.svg';
import Item from './Item';
import style from './style.scss';

const propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

const TodosList = ({ todos, isFetching, deleteTodo, editTodo }) => {
  const rowRenderer = (data) => {
    const {
      index
    } = data;
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
    <div className={style.wrapper}>
      { isFetching && (
        <div className={style.loading}>LOADING</div>
      ) }

      { todos.length ? (
        <AutoSizer>
          {({ width }) => (
            <List
              height={320}
              rowCount={todos.length}
              rowHeight={43}
              rowRenderer={data => rowRenderer(data, todos)}
              style={{ outline: 'none' }}
              width={width}
            />
          )}
        </AutoSizer>
      ) : null }

      { !todos.length && !isFetching ? (
        <div className={style.emptyList}>
          <img className={style.icon} src={sunIcon} />
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
};

TodosList.propTypes = propTypes;

export default TodosList;
