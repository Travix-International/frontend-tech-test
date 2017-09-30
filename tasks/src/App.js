import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'

import Tasks from './components/ecosystems/Tasks/index'
import StoreConfigurator from './ducks/StoreConfigurator'

const storeConfigurator = new StoreConfigurator()
const store = storeConfigurator.configure()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tasks />
      </Provider>
    )
  }
}
