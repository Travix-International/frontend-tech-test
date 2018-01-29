import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'frint-router-react';
import { observe } from 'frint-react';
import { map, scan } from 'rxjs/operators';
import Item from '../Item';

function ItemPage(props) {
  const { todo } = props;

  return (
    <div>
      <Link to="/">
        Back to Dashboard
      </Link>
      <Item todo={todo} />
    </div>
  );
}

ItemPage.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default observe((app, { value }) => {
  const { id } = value.match.params;
  const store = app.get('store');
  const state$ = store.getState$();

  const router = app.get('router');

  const stateProps$ = state$
    .pipe(
      map((state) => {
        const todo = state.todoList.filter(i => i.id === id)[0];
        if (!todo) {
          return router.go('/');
        }
        return { todo };
      }),
    );

  return stateProps$.pipe(
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    })),
  );
})(ItemPage);
