import React from 'react';
import ReactServer from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { /* get as _get, */ isFunction as _isFunction } from 'lodash';
import renderFullPage from './layout';
import configureStore from '../configureStore';
import { entryRouteComponentMap, getEntryAndRoute, entryReducerMap } from './entryAndRoute';

function applyInitStore(req) {
  const entryRouteInfo = getEntryAndRoute(req.path);
  const currentEntry = entryRouteInfo.entry;
  const rootReducer = entryReducerMap[currentEntry];
  const store = configureStore({}, rootReducer);
  req.reduxStore = store;
  req.entryRouteInfo = entryRouteInfo;
  // next();
}

function applyRouteCheckResult(req) {
  const { path, reduxStore: store, query, entryRouteInfo } = req;
  const promises = [];
  const currentEntry = entryRouteInfo.entry;
  const route = entryRouteInfo.route;
  const match = matchPath(path, route);
  const { loadData } = route;

  // set currentEntry to req
  req.currentEntry = currentEntry;

  // it's possible no loadData set
  if (_isFunction(loadData)) {
    let action = loadData(match, query);
    if (action) {
      if (_isFunction(action) || action.type) {
        action = store.dispatch(action);
        if (action.then) {
          promises.push(action);
        }
      }
    }
  }

  return Promise.all(promises);
}

function responsePage(req, res, clientStats) {
  const { url, reduxStore: store, currentEntry } = req;
  const routerContext = {};
  const reduxStateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

  const RouteComponent = entryRouteComponentMap[currentEntry];

  const content = (
    <Provider store={store}>
      <Router context={routerContext} location={url}>
        <RouteComponent />
      </Router>
    </Provider>
  );

  // render to sting to get helmet setting
  const contentString = ReactServer.renderToString(content);
  const head = Helmet.renderStatic();
  const htmlString = renderFullPage(contentString, reduxStateString, head, currentEntry, clientStats);

  res.send(htmlString);
}

export default function renderer({ clientStats }) {
  return (req, res) => {
    applyInitStore(req);
    return applyRouteCheckResult(req).then(() => {
      return responsePage(req, res, clientStats);
    });
  };
}
