import React from 'react';
import PropTypes from 'prop-types';
import { observe, streamProps } from 'frint-react';

import style from './style.scss';

console.log('style', style);

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
  <div className={style.body}>
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
