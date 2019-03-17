import React from 'react';
import { observe } from 'frint-react';
import { concatMap } from 'rxjs/operator/concatMap';
import { map } from 'rxjs/operator/map';
import { merge } from 'rxjs/operator/merge';
import { scan } from 'rxjs/operator/scan';
import PropTypes from 'prop-types';

import { Add } from './Icons';

class Root extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    modal: PropTypes.bool,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    changeColor: PropTypes.func,
    changeColorAsync: PropTypes.func,
    regionProps: PropTypes.object
  };

  render() {
    return (
      <div className="top-bar">

        <div className="top-bar-inner">
          <div className="top-bar-left">
            <h1>todo</h1>
          </div>
          <div className="top-bar-right">
            <span
              className="icons"
              onClick={() => this.props.openModal(false)}
            >
              <Add />
              <span>add task</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}


export default observe(function (app) { // eslint-disable-line func-names
  // self
  const store = app.get('store');
  const region = app.get('region');

  const state$ = store.getState$();

  const regionProps$ = region.getProps$()
    :: map((regionProps) => {
    return {
      regionProps,
    };
  });

  // other app: ModalApp
  const modalApp$ = app.getAppOnceAvailable$('ModalApp');
  const modalAppState$ = modalApp$
    :: concatMap((modalApp) => {
    return modalApp
      .get('store')
      .getState$();
  })
    :: map((modelState) => {
    return {
      modal: modelState.modal.value
    };
  });

  const modalAppActions$ = modalApp$
    :: map((modalApp) => {
    const modalStore = modalApp.get('store');
    return {
      openModal: (showEditMode) => {
        return modalStore.dispatch({ type: 'OPEN_MODAL', showEditMode });
      }
    };
  });

  // combine them all into props
  return state$
    :: merge(regionProps$)
    :: merge(modalAppState$)
    :: merge(modalAppActions$)
    :: scan((props, emitted) => {
    return {
      ...props,
      ...emitted,
    };
  }, {
      // default props to start with
      modal: false,
    });
})(Root);
