import React from 'react';
import PropTypes from 'prop-types';
import { observe } from 'frint-react';
import { Link } from 'frint-router-react';
import { map, scan } from 'rxjs/operators';

function Root(props) {
  return (
    <div>
      <ul>
        {props.todoList.map(todo => (
          <li key={todo.id}>
            <Link to={`/${todo.id}`}>
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Root.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default observe((app) => {
  const store = app.get('store');
  const state$ = store.getState$();

  const stateProps$ = state$
    .pipe(
      map(state => ({ todoList: state.todoList })),
    );

  return stateProps$.pipe(
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    }),
    {
      todoList: [],
    }),
  );
})(Root);
