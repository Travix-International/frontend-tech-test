import React from 'react'
import {render} from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import Template from './Template'
import Routes from './routes'

/* Client render (optional) */
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('outlet')
  render( (<Provider store={store}><Router history={browserHistory} routes={Routes} /></Provider>), outlet)
}

/* Exported static site renderer */
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({
    routes: Routes,
    location: location
  }, function(error, redirectLocation, renderProps) {
    var html = ReactDOMServer.renderToStaticMarkup(
      <Provider store={store}>
        <Template>
          <RouterContext {...renderProps} />
        </Template>
      </Provider>
    );
    callback(null, html)
  })
}
