import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import TodoForm from './components/TodoForm';
import List from './components/List';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <TodoForm />
              </div>
              <div className="col-md-8">
                <List />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
