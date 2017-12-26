import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { isFunction as _isFunction } from 'lodash';
import { withRouter } from 'react-router-dom';
import { getMatchedRoute, renderRoutes } from './utils';
import Nav from '../containers/Nav';
import Home from '../containers/Home';
import Footer from '../containers/Footer';
import FourOFour from '../containers/404';

/**
 * put 404 route to the last
 * since it's the last to match
 *
 * @returns {object} routesInfo - detail of routes
 * @property {string} routesInfo.entry - entry name of routes
 * @property {object[]} routesInfo.routes
 * @property {React Component} routesInfo.routes[].component - component to use
 * @property {string} routesInfo.routes[].path - path to match
 * @property {string} routesInfo.routes[].key - unique key for Route to use
 * @property {boolean} routesInfo.routes[].exact - is exact match
 * @property {boolean} routesInfo.routes[].strict - is strict match
 * @property {function} routesInfo.routes[].loadData - related action(s) to loadData, possibly given react router match and req query
 * @property {(function|boolean|string)} routesInfo.routes[].redirect - redirect logic
 *
 */
export const getRoutes = () => {
  return {
    entry: 'main',
    routes: [
      {
        path: '/',
        key: 'home',
        exact: true,
        component: Home,
        loadData: () => {
          // return last action,
          // it would be a promise if it's an aync request
          // return fetchPosts();
        },
        redirect: () => {
          return false;
        },
      },
      {
        key: '404',
        component: FourOFour,
      },
    ],
  };
};

export class MyRoute extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  render() {
    const { location } = this.props;
    const routesInfo = getRoutes();
    const currentRoute = getMatchedRoute(location.pathname, routesInfo);

    let redirect = false;

    if (currentRoute.redirect) {
      if (_isFunction(currentRoute.redirect)) {
        redirect = currentRoute.redirect();
      } else {
        redirect = currentRoute.redirect;
      }
    }

    return (
      <div>
        <Helmet titleTemplate="%s - by ddhp">
          <title>title set in entry-main</title>
          <meta content="react isomorphic boilerplate by ddhp" name="description" />
          <meta content="title set in entry-main" name="og:title" />
        </Helmet>
        <Nav />
        {renderRoutes(routesInfo.routes, redirect)}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

// withRouter exposes history, match, location to props
// see HOC(higher order component)
// https://reactjs.org/docs/higher-order-components.html
// ... you can use a function composition utility
// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
export default compose(withRouter, connect(mapStateToProps, null))(MyRoute);
