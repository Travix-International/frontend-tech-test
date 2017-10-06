import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Tasks from '../ecosystems/Tasks/index'
import StoreConfigurator from '../../ducks/StoreConfigurator'

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
