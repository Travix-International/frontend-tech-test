import React, { Component } from 'react'
import './App.css'

import TaskItems from './components/molecules/TaskItems/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskItems
          items={[
            { id: 1, title: 'Title', description: 'Description' },
            { id: 2, title: 'Title 2', description: 'Description 2' },
            { id: 3, title: 'Title 3', description: 'Description 3' }
          ]}
          updateTask={() => { console.log('updateTask') }}
          deleteTask={() => { console.log('deleteTask') }}
        />
      </div>
    )
  }
}

export default App
