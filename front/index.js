import { createApp } from 'frint';
import { RegionService } from 'frint-react';
import { render, RegionService } from 'frint-react'

import storeReducers from './storeReducers'
import Todos from 'application/components/Todos'

import 'application/styles/base.less'

const renderApplication = () => {
  const applicationDOMElement = document.getElementById('app')
  const application = createApp({
    name: 'TODO',
    providers: [
      {
        name: 'component',
        useValue: Todos,
      },
      {
        name: 'store',
        useFactory: storeReducers,
        deps: ['app']
      },
      {
        name: 'region',
        useClass: RegionService
      }
    ],
  })

  render(new application(), applicationDOMElement)
}

const rootInstance = renderApplication()

if (module.hot) {
  module.hot.accept({
    getRootInstances: () => ([ rootInstance ])
  })
}
