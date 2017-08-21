import React from 'react';
import { Provider } from 'react-redux'
import TasksList from './containers/tasks';
import Input from './presentationals/Input';

class App extends React.Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <div>
          <Input />
          <TasksList />
        </div>
      </Provider>
    )
  }
}

export default App;