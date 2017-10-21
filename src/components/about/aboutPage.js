import React, { Component } from 'react';
import { Accordion,Panel } from 'react-bootstrap';
// User define components
import Header from '../common/header';

class AboutPage extends Component{
    render(){
        return(
            <div>
                <Header />
                <Accordion>
                    <Panel header="Available Commands" eventKey="1">
                        <p><strong>build-css:</strong>  node-sass-chokidar src/ -o src/  (Converts scss files into css) </p> 
                        <p><strong>watch-css:</strong>  npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive (Watchs for any modification ont eh css file to dynamically create the css)</p>
                        <p><strong>start-js:</strong>  react-scripts start (Starts the functionality of react-create)</p>
                        <p><strong>start:</strong>  npm-run-all -p watch-css start-js (Regular npm start that also watches the scss files)</p>
                        <p><strong>build:</strong>  npm run build-css && react-scripts build (Creates PROD optimized version of the code)</p>
                        <p><strong>test:</strong>  react-scripts test --env=jsdom (Executes tests)</p>
                        <p><strong>eject:</strong>  react-scripts eject (Decouple the code from the react-create libs)</p>
                    </Panel>
                    <Panel header="Used Technologies" eventKey="2">
                         <p><strong>create-react-app:</strong> In charge of creating the boiler plate that takes cares of multiple standard configurations (Webpack, abbel,m etc)</p>
                         <p><strong>axios:</strong> Library in charge of HTTP communications (Promise based)</p>
                         <p><strong>bootstrap-sass:</strong> Bootstrap v3 standard library but optimize to use scss</p>
                         <p><strong>node-sass-chokidar:</strong> Library used to enable the watch command of the scss to css</p>
                         <p><strong>react-bootstrap:</strong> Bootstrap element optimize for the react framework</p>
                         <p><strong>react-redux:</strong> Enables the Provider and connect tag/command to cascade the redux store/dispatcher to all components </p>
                         <p><strong>react-router:</strong> React standarize routing library </p>
                         <p><strong>redux-logger:</strong> Middleware in charge of logging all dispatched actions</p>
                         <p><strong>redux-promise-middleware:</strong> Middle ware that allows for handeling promises ina much cleaner way</p>
                         <p><strong>redux-thunk:</strong> Allow for actions creator to return functions </p>
                         <p><strong>react, redux, react-dom:</strong> Main libraries for react and redux</p>
                    </Panel>
                    <Panel header="Solution explain" eventKey="3">
                        <p><strong>Steps</strong></p>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </Panel>
                </Accordion>
            </div>
        );
    }
}

export default AboutPage;