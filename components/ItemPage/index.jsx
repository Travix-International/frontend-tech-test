import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'frint-router-react';
import { observe } from 'frint-react';
import { map, scan } from 'rxjs/operators';
import Item from '../Item';

function ItemPage(props) {
  const { id, todo } = props;

  return ([
    <Link className="ui-link" key="itemPageLink" to="/">
      Back to Dashboard
    </Link>,
    <Item id={id} key="item" todo={todo} />,
  ]);
}

ItemPage.propTypes = {
  id: PropTypes.string.isRequired,
  todo: PropTypes.object,
};

ItemPage.defaultProps = {
  todo: {},
};

export default observe((app, { value }) => {
  const { id } = value.match.params;
  const store = app.get('store');
  const state$ = store.getState$();

  const router = app.get('router');

  const stateProps$ = state$
    .pipe(
      map((state) => {
        if (state.server) {
          return {
            ...state,
            id,
          };
        }
        const todo = state.todoList.filter(i => i.id === id)[0];
        if (!todo) {
          return router.replace('/', state);
        }
        return {
          id,
          todo,
        };
      }),
    );

  return stateProps$.pipe(
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    })),
  );
})(ItemPage);
