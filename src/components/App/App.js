import React from 'react'

import Header from '../Header/Header'
import TodoList from '../../containers/TodoList'
import AddTask from '../../containers/AddTask'
import Notifications from '../Notifications/Notifications'

import './App.css'

const App = () => (
  <main>
    <Header />
    <div className="container">
    <h2 className="add-title">New Task</h2>
    <AddTask />
    <h2 className="list-title">My Tasks</h2>
    <TodoList />
    </div>
    <Notifications />
  </main>
)

export default App
