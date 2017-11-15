import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// User define components
import Home from './home/homePage';
import About from './about/aboutPage';

class App extends Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
          <div>
            <Route exact path="/" component = {Home} />
            <Route path="/about" component = {About} />
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
