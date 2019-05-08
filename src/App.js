import React from 'react';
import { 
  Container
} from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import HeaderContainer from './containers/HeaderContainer';
import TaskListContainer from './containers/TaskListContainer';
import FooterContainer from './containers/FooterContainer';
import styles from './App.module.scss';

function App() {
  return (
    <Provider store={configureStore()}>
      <Container className={styles['app']}>
        <HeaderContainer className={styles['app-header']} />
        <TaskListContainer />
        <FooterContainer />
    </Container>
    </Provider>
  );
}

export default App;
