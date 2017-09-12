import React, { PropTypes } from 'react';
import { Observable } from 'rxjs';
import { observe, streamProps } from 'frint-react';

// our action creators
import { incrementCounter, decrementCounter } from '../../actions/counter';

// components
import Form from '../Form';
// ui-kit
import { Button } from 'travix-ui-kit';

const propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired
};

const Root = props => (
  <div>
    <h1>Hello TODO App</h1>
    <Form/>
    <div>
      <p>Counter value: {props.counter}</p>
      <Button size="s" onClick={() => props.incrementCounter()}>Inc +</Button>
      <Button size="s" onClick={() => props.decrementCounter()}>Dec -</Button>
    </div>
  </div>
);

Root.propTypes = propTypes;

export default observe(app => (
  streamProps({})
    .set(app.get('store').getState$(), state => ({ counter: state.counter.value }))
    .setDispatch({incrementCounter, decrementCounter}, app.get('store'))
    .get$()
))(Root);
