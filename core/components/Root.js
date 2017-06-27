import React, { PropTypes } from 'react';
import { observe, streamProps } from 'frint-react';

import {
  incrementCounter,
  decrementCounter
} from '../actions/counter';

const propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired
};

const Root = props => (
  <div className="container">
    <div className="row">
      <div className="eight columns">
        <h3>Counter App</h3>

        <p>Counter value: <code>{props.counter}</code></p>

        <div>
          <button
            className="button button-primary"
            onClick={() => props.incrementCounter()}
          >
            +
          </button>

          <button
            className="button"
            onClick={() => props.decrementCounter()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  </div>
);

Root.propTypes = propTypes;

export default observe(app => (
  streamProps({})
    .set(
      app.get('store').getState$(),
      state => ({ counter: state.counter.value })
    )
    .setDispatch({
      incrementCounter,
      decrementCounter,
    }, app.get('store'))
    .get$()
))(Root);
