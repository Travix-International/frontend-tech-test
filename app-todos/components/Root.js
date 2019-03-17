import React from 'react';
import { observe } from 'frint-react';
import { map } from 'rxjs/operator/map';

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

export default observe(function (app) { // eslint-disable-line func-names
  const store = app.get('store');

  const state$ = store.getState$()
      :: map((state) => {
    return {
      todos: state.todos.records,
    };
  });

  return state$
})(Root);
