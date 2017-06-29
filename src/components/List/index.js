import React from 'react';
import PropTypes from 'prop-types';

import debounce from 'lodash/debounce';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

import style from './style.scss';

const propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

const TodosList = ({ todos, deleteTodo, editTodo }) => {
  const debounceUpdate = debounce(editTodo, 250);

  const handleTitleChange = (event, todo) => (
    debounceUpdate({ ...todo, title: event.target.value }, todo.id)
  );

  const rowRenderer = (data) => {
    const {
      key,
      index
    } = data;
    const innerStyle = data.style;
    const l = todos[index];

    return (
      <div key={key} style={innerStyle}>
        <div className={style.item} key={l.id}>
          <button
            className={style.active}
            onClick={() => editTodo({ ...l, completed: !l.completed }, l.id)}
          >
            { l.completed && (<span className={style.checkIcon}>&#x2713;</span>) }
          </button>

          <input
            className={`${style.editInput} ${l.completed && style.completed}`}
            defaultValue={l.title}
            onChange={e => handleTitleChange(e, l)}
          />

          <button
            className={style.remove}
            onClick={() => deleteTodo(l.id)}
          >
            &times;
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={style.wrapper}>
      <AutoSizer>
        {({ width }) => (
          <List
            height={320}
            rowCount={todos.length}
            rowHeight={43}
            rowRenderer={data => rowRenderer(data, todos)}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  );
};

TodosList.propTypes = propTypes;

export default TodosList;
