import React from 'react';
import { observe, streamProps } from 'frint-react';
import InfiniteScroll from 'react-infinite-scroller';

import { loadMoreAsync } from '../actions/todos';
import Item from './Item';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMoreItems: true
    };
  }

  loadItems(page) {
    var self = this;
    this.props.loadMoreAsync();
    self.setState({
      hasMoreItems: false
    });
  }

  render() {
    var items = [];
    this.props.todos.map((todo, index) => {
      items.push(<Item
        key={`todo-${index}`}
        todo={todo}
      />);
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <div className="row-columns">
          {items}
        </div>
      </InfiniteScroll>
    );
  }
}

export default observe((app) => {
  const store = app.get('store');
  return streamProps()
    .set(
      app.get('store').getState$(),
      state => ({
        todos: state.todos.records,
      })
    )
    .setDispatch(
      {
        loadMoreAsync
      },
      store
    )
    .set({
      logger: app.get('logger')
    })
    .get$();
})(Root);
