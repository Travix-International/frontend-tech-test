import React from 'react';
import { observe } from 'frint-react';
import { map } from 'rxjs/operators/map';
import { scan } from 'rxjs/operators/scan';

import Item from './Item';

class Root extends React.Component {
  render() {
    return (
      <div className="row-columns">
        {this.props.todos.map((todo, index) => (
          <Item
            key={`todo-${index}`}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}

export default observe((app) => {
  const store = app.get('store');
  const state$ = store.getState$();

  const stateProps$ = state$
    .pipe(
      map(state => {
        return {
          todos: state.todos.records,
        };
      })
    );

  return stateProps$.pipe(
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    }))
  );
})(Root);
