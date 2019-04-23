import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./components/contacts/List";
import AddTask from "./components/contacts/AddTask";
import EditTask from "./components/contacts/EditTask";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="main-container">
            <Header branding="TODO Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={List} />
                <Route exact path="/todo/add" component={AddTask} />
                <Route exact path="/todo/edit/:id" component={EditTask} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
