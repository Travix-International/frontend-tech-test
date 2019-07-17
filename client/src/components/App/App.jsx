import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import TaskDetails from '../../containers/TaskDetails/TaskDetails';
import TaskManager from '../../containers/TaskManager/TaskManager';
import Container from '../UI/Container/Container';
import styles from './App.module.scss';
import routes from '../../constants/routes';


const App = () => (
  <div className={styles.App}>
    <Container>
      <h1>
        <Link className={styles.Logo} to="/">Task Manager</Link>
      </h1>
      <Switch>
        <Route component={TaskDetails} exact path={routes.taskPath} />
        <Route component={TaskManager} exact path={routes.tasks} />
      </Switch>
    </Container>
    
  </div>
);

export default App;
