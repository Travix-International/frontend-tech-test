import React from 'react';
import { 
  Container
} from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TaskListContainer from './containers/TaskListContainer';
import VisibilityFilterContainer from './containers/VisibilityFilterContainer';
import { TASK_FILTER } from './constants';
import { startCase } from 'lodash';

const filters = Object.keys(TASK_FILTER).map(key => ({
  title: startCase(key.toLowerCase()),
  value: key
}));

function App() {
  return (
    <Provider store={configureStore()}>
      <Container>
      <div>
        <VisibilityFilterContainer filters={filters} />
        <TaskListContainer />
      </div>
    </Container>
    </Provider>
  );
}

export default App;
