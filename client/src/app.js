import * as React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import PromiseMiddleware from 'redux-promise-middleware';
import { Grid, Row } from 'react-bootstrap';

import createStore from './store';
import reducers from './modules/reducers';
import ListTasks from './modules/tasks/list';


const store = createStore({ reducers, middlewares: [new PromiseMiddleware(), logger] });

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Grid>
            <Row>
              <ListTasks />
            </Row>
          </Grid>
        </Provider>
      </div>
    );
  }
}
