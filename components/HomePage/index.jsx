import React from 'react';
import PropTypes from 'prop-types';
import { observe } from 'frint-react';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, merge, scan } from 'rxjs/operators';
import { LoadingOverlay } from 'travix-ui-kit';
import Form from '../Form';
import List from '../List';
import { addTodo } from '../../actions/todos';

function HomePage(props) {
  if (props.loading) {
    return (<LoadingOverlay
      loading
      spinner
    >
      <h2 key="dashboardTitle">Dashboard</h2>
      <Form
        action={props.addTodo}
        actionBtnTitle="Add"
        formTitle="Create a new Todo item"
        key="dashboardForm"
      />
    </LoadingOverlay>);
  }

  return ([
    <h2 key="dashboardTitle">Dashboard</h2>,
    <Form
      action={props.addTodo}
      actionBtnTitle="Add"
      formTitle="Create a new Todo item"
      key="dashboardForm"
    />,
    <List key="dashboardList" />,
  ]);
}

HomePage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default observe((app) => {
  const store = app.get('store');
  const loading$ = new BehaviorSubject(false).pipe(
    map(loading => ({ loading })),
  );

  const state$ = store.getState$();

  const stateProps$ = state$
    .pipe(
      map((state) => {
        loading$.next(state.server);
      }),
    );

  const actions$ = of({
    addTodo: (...args) => store.dispatch(addTodo(...args)),
  });

  return stateProps$.pipe(
    merge(actions$, loading$),
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    })),
  );
})(HomePage);
