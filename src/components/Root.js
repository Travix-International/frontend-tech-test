import React, { Component } from 'react';
import { Observable } from 'rxjs';
import { observe, streamProps } from 'frint-react';

// our action creators
import { incrementCounter, decrementCounter } from '../actions/counter';

// components
import { Button } from 'travix-ui-kit';

// React component
class Root extends Component {
  render() {
    return (
      <div>
        <h1>Hello TODO App</h1>
        <div>
          <p>Counter value: {this.props.counter}</p>
          <Button size="s" onClick={() => this.props.incrementCounter()}>Inc +</Button>
          <Button size="s" onClick={() => this.props.decrementCounter()}>Dec -</Button>
        </div>
      </div>
    );
  }
}

export default observe(function (app) {
  return streamProps()
  // state
    .set(
      app.get('store').getState$(),
      state => ({ counter: state.counter.value })
    )

    // dispatchable actions
    .setDispatch({
      incrementCounter,
      decrementCounter
    }, app.get('store'))

    // generate and return final observable
    .get$();
})(Root);
