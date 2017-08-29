import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import TasksList from './containers/Tasks';
import SingleTask from './containers/Task';

class App extends React.Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <Switch>
          <Route exact path="/" component={TasksList} />
          <Route path="/task/:id" component={SingleTask} />
        </Switch>
      </Provider>
    )
  }
}

export default App;