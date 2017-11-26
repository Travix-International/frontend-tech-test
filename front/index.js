import { createApp } from 'frint';
import { RegionService } from 'frint-react';
import { render } from 'frint-react'

import storeReducers from './storeReducers'
import Main from './components/Main'

import 'application/styles/base.less'

const store = storeReducers()

const renderApplication = () => {
  const applicationDOMElement = document.getElementById('app')
  const application = createApp({
    name: 'TODO',
    providers: [
      {
        name: 'component',
        useValue: Main,
      },
      {
        name: 'store',
        useValue: new Store()
      }
    ],
  })

  render(application, applicationDOMElement)
}

const rootInstance = renderApplication()

if (module.hot) {
  module.hot.accept({
    getRootInstances: () => ([ rootInstance ])
  })
}
