import React from 'react';
import TasksContainer from './components/modules/tasks/tasksContainer/TasksContainer';
import MessageToast from './components/modules/messages/MessageToast';
import './App.scss';
import './styles/general.scss';


const App = props => {

  return (
    <>
      <MessageToast />
      <TasksContainer />
    </>
  );
}

export default App;
