import React from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';

import 'styles/main.scss';

// import {
//   incrementCounter,
//   decrementCounter
// } from '../actions/counter';

const propTypes = {
  todos: PropTypes.array.isRequired,
  // incrementCounter: PropTypes.func.isRequired,
  // decrementCounter: PropTypes.func.isRequired
};

const Root = ({ todos }) => (
  <div className="container">
    <h2>Todo App</h2>

    <ul>
      { todos.map(l => (
        <li key={l.id}>{ l.title }</li>
      ))}
    </ul>
  </div>
);

Root.propTypes = propTypes;

export default observe(app => (
  streamProps({})
    .set(
      app.get('store').getState$(),
      ({ todos }) => ({ todos })
    )
    // .setDispatch({
    //   incrementCounter,
    //   decrementCounter,
    // }, app.get('store'))
    .get$()
))(Root);
