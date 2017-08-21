import React from 'react';
import { Provider } from 'react-redux'
import TasksList from './containers/tasks';

class App extends React.Component {
  render() {
    return (
      <Provider store={ this.props.store }>
          <TasksList />
      </Provider>
    )
  }
}

export default App;