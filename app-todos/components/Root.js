import React from 'react';
import { observe } from 'frint-react';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { merge } from 'rxjs/operator/merge';
import { scan } from 'rxjs/operator/scan';

import { getTodosAsync } from '../actions/todos';

import Item from './Item';

class Root extends React.Component {
  componentDidMount() {
    this.props.getTodosAsync();
  }

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

export default observe(function (app) { // eslint-disable-line func-names
  const store = app.get('store');

  const state$ = store.getState$()
      :: map((state) => {
    return {
      todos: state.todos.records,
    };
  });

  const actions$ = Observable.of({
    getTodosAsync: () => {
      return store.dispatch(getTodosAsync());
    },
  });

  return state$
    :: merge(actions$)
    ::scan((props, emitted) => {
      return {
        ...props,
        ...emitted,
      };
    }, {
      records: [],
    });

})(Root);
