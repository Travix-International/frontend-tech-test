import React from 'react';
import PropTypes from 'prop-types';
import { observe } from 'frint-react';
import { Link } from 'frint-router-react';
import { map, scan } from 'rxjs/operators';

export function ListRender(props) {
  return (
    <ul className="ui-list ui-list_align_vertical">
      {props.todoList.map(todo => (
        <li className="ui-list__item" key={todo.id}>
          <Link className="ui-link" to={`/${todo.id}`}>
            {todo.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

ListRender.propTypes = {
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
})(ListRender);
