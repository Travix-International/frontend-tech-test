import React from 'react';
import PropTypes from 'prop-types';
import { observe } from 'frint-react';
import { of } from 'rxjs/observable/of';
import { map, merge, scan } from 'rxjs/operators';
import { LoadingOverlay } from 'travix-ui-kit';
import Form from '../Form';
import List from '../List';
import { addTodo } from '../../actions/todos';

function HomePage(props) {
  return (<LoadingOverlay
    loading={props.loading}
    spinner
  >
    <h2 key="dashboardTitle">Dashboard</h2>
    <Form
      action={props.addTodo}
      actionBtnTitle="Add"
      formTitle="Create a new Todo item"
      key="dashboardForm"
    />
    <List key="dashboardList" />
  </LoadingOverlay>);
}

HomePage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default observe((app) => {
  const store = app.get('store');

  const stateProps$ = store.getState$()
    .pipe(
      map(state => ({
        loading: state.app.loading,
      })),
    );

  const actions$ = of({
    addTodo: (...args) => store.dispatch(addTodo(...args)),
  });

  return stateProps$.pipe(
    merge(actions$),
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    })),
  );
})(HomePage);
