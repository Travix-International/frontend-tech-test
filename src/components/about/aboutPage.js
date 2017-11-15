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
                        <p><strong>watch-css:</strong>  npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive (Watches for any modification on the css file to dynamically create the css)</p>
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
                         <p><strong>react-router:</strong> React standardized routing library </p>
                         <p><strong>redux-logger:</strong> Middleware in charge of logging all dispatched actions</p>
                         <p><strong>redux-promise-middleware:</strong> Middleware that allows for handling promises in a much cleaner way</p>
                         <p><strong>redux-thunk:</strong> Allow for actions creator to return functions </p>
                         <p><strong>react, redux, react-dom:</strong> Main libraries for react and redux</p>
                         <p><strong>nodemon:</strong> Enables de watch command to auto restart changes on the server</p>
                         <p><strong>axios-mock-adapter:</strong> Enables the mocking of the axios calls</p>
                    </Panel>
                    <Panel header="Solution explained" eventKey="3">
                        <p>Solution it self its base on the create-react-app boilerplate, after cloning the original project the react-scripts were install and then the folder
                        structure was made up.</p>

                        FRONTEND-TECH-TEST
                        <ul>
                           <li>build: PROD Version of the code</li>
                           <li>public: Holds index.html and favicon</li>
                           <li>src:</li>
                            <ul>
                                <li>actions: Hold all the actions that that modify the data</li>
                                <li>common: Holds all the common components </li>
                                <li>home: Holds the main page</li>
                                <li>todo: Holds the todo page were all operations occur</li>
                                <li>about: Holds the about page</li>
                                <li>reducer: Holds the todo reducer and the index file for future merging</li>
                            </ul>
                        </ul>
                        <p>For the UX/UI bootstrap was added and it was used on the 2 pages that compose the solution (TODO and About). Axios is handeling the API call
                            and the promises are used to handle the informaiton in an async way.

                            All tasks are picked up from the test file and all the CRUD operations are reflected on the REDUX store, however, the modifications are 
                            not reflected back to the file.

                            Test coverage for the redux part was added to validate the handeling of the data.
                        </p>
                    </Panel>

                    <Panel header="Known Issues" eventKey="4">
                        <p><strong>There is one known issue that is a bit hard to reproduce an identify</strong></p>
                        <p><strong>Issue:</strong> Sometimes the "Edit" and "Delete" button don't respond to the user clicking</p>
                        <p><strong>Work aroud:</strong> Clicking a few time on them will make them respond fine</p>
                        <p><strong>Note:</strong> Funcionality is not affected by this just a minor hit to the user experience</p>
                    </Panel>
                </Accordion>
            </div>
        );
    }
}

export default AboutPage;