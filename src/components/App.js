import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/App.scss';
import Navbar from './Navbar';
import Tasks from './Tasks';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Navbar />
          <div className="container">
            <Tasks />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
