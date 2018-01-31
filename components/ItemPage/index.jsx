import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'frint-router-react';
import { observe } from 'frint-react';
import { map, scan } from 'rxjs/operators';
import { LoadingOverlay } from 'travix-ui-kit';
import Item from '../Item';

function ItemPage(props) {
  const { loading, todo } = props;

  return (<LoadingOverlay
    loading={loading}
    spinner
  >
    <Link className="ui-link" key="itemPageLink" to="/">
      Back to Dashboard
    </Link>
    <Item key="item" todo={todo} />
  </LoadingOverlay>);
}

ItemPage.propTypes = {
  loading: PropTypes.bool.isRequired,
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
        let todo = {};

        if (!state.app.loading && state.todoList.length) {
          todo = state.todoList.filter(i => i.id === id)[0];
          if (!todo) {
            return router.replace('/', state);
          }
        }

        return {
          todo,
          loading: state.app.loading,
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
