import React from 'react';
import { 
  Container
} from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import HeaderContainer from './containers/HeaderContainer';
import TaskListContainer from './containers/TaskListContainer';
import FooterContainer from './containers/FooterContainer';

function App() {
  return (
    <Provider store={configureStore()}>
      <Container>
        <HeaderContainer />
        <TaskListContainer />
        <FooterContainer />
    </Container>
    </Provider>
  );
}

export default App;
