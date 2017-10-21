import React, { Component } from 'react';

// Bootstrap react components
import { Jumbotron } from 'react-bootstrap';

// User define components
import Header from '../common/header';
import TodoManager from '../todo/toDoManager';

class HomePage extends Component{
    render(){
        return(
            <div>
                <Header />
                <Jumbotron>
                    <h1>Hello Travix employees!</h1>
                    <p>Below you may find a simple TODO manager integrated with the express server you provided.</p>
                    <p>Please feel free to check out the "About" page for the detail steps and technologies that were taken/used.</p>
                </Jumbotron>
                <TodoManager />
            </div>
        );
    }
}

export default HomePage;