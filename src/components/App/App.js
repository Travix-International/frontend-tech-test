import React from 'react'
import Notifications from '../Notifications/Notifications'
import TodoList from '../../containers/TodoList'
import AddTask from '../../containers/AddTask'

const App = () => (
  <div>
    <AddTask />
    <TodoList />
    <Notifications />
  </div>
)

export default App
