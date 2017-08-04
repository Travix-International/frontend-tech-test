/* eslint-disable */
import 'rxjs'
import 'SRC/utils/styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import IntlWrapper from 'SRC/intl'
import configureStore from 'SRC/store'
import App from 'SRC/App'


const domRender = (HotComp) => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={configureStore()}>
        <IntlWrapper>
          <HotComp />
        </IntlWrapper>
      </Provider>
    </AppContainer>
  ),
  document.getElementById('root'))
}

domRender(App)

if (module.hot) {
  module.hot.accept('SRC/App', () => { domRender(App) })
}
