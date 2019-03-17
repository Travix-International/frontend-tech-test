import React from 'react';
import { observe } from 'frint-react';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';
import { merge } from 'rxjs/operators/merge';
import { scan } from 'rxjs/operators/scan';

import { getTodosAsync } from '../actions/todos';

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

  const actions$ = of({
    getTodosAsync: () => store.dispatch(getTodosAsync())
  });

  return stateProps$.pipe(
    merge(actions$),
    scan((props, emitted) => ({
      ...props,
      ...emitted,
    }))
  );
})(Root);
