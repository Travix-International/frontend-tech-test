import React from 'react';
import PropTypes from 'prop-types';
import { observe } from 'frint-react';
import { map, merge, scan } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { Route, Switch } from 'frint-router-react';
import { Modal } from 'travix-ui-kit';
import HomePage from './HomePage';
import ItemPage from './ItemPage';

import './root.scss';

function Root(props) {
  const { error, hideError } = props;

  return ([
    <Modal
      active={error !== ''}
      key="ErrorModal"
      onClose={hideError}
    >
      {error}
    </Modal>,
    <Switch key="Switch">
      <Route
        component={HomePage}
        exact
        path="/"
      />
      <Route
        component={ItemPage}
        path="/:id"
      />
    </Switch>]);
}

Root.propTypes = {
  error: PropTypes.string.isRequired,
  hideError: PropTypes.func.isRequired,
};

export default observe((app) => {
  const store = app.get('store');
  const state$ = store.getState$();

  const error$ = new BehaviorSubject('').pipe(
    map(error => ({ error })),
  );

  const hideError = () => error$.next('');

  const stateProps$ = state$
    .pipe(
      map((state) => {
        hideError();
        if (state.app.error.message) {
          error$.next(state.app.error.message);
        }
        return state;
      }),
    );

  return stateProps$.pipe(
    merge(error$,
      of({
        hideError,
      }),
    ),
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    })),
  );
})(Root);
