import React from 'react';
import { observe, streamProps } from 'frint-react';
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
  return streamProps()
    .set(
      app.get('store').getState$(),
      state => ({
        todos: state.todos.records,
      })
    )
    .set({
      logger: app.get('logger')
    })
    .get$();
})(Root);
