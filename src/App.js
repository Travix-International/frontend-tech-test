import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ToDoListContainer from "./containers/ToDoListContainer";
import ToDoNewContainer from './containers/ToDoNewContainer';
import ToDoEditContainer from './containers/ToDoEditContainer';
import ToDoItemContainer from './containers/ToDoItemContainer';

class App extends Component {
  render() {
    return (
        <Router>
        	<div>
	        	<Header />
			        <main>
			        <Switch>
				        <Route exact path="/task/new/:id" component={ToDoNewContainer} />
				        <Route exact path="/task/edit/:id" component={ToDoEditContainer} />
				        <Route exact path="/task/:id" component={ToDoItemContainer} />
				        <Route exact path="/" component={ToDoListContainer} />
			        </Switch>
			        </main>
		        <Footer />
	        </div>
	    </Router>
    );
  }
}

export default App;