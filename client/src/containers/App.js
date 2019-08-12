import React, {Component} from 'react';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import "assets/vendors/style"
import AppLocale from '../lngProvider';

import MainApp from 'app/index';
import SignIn from './SignIn';
import {setInitUrl} from '../actions/Auth';
import asyncComponent from 'util/asyncComponent';

const RestrictedRoute = ({component: Component, authUser, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      authUser
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: {from: props.location}
          }}
        />}
  />;

class App extends Component {

  componentWillMount() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (this.props.initURL === '') {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
  }

  render() {
    const {match, location, locale, authUser, initURL} = this.props;
    if (location.pathname === '/') {
      if (authUser === null) {
        return ( <Redirect to={'/signin'}/> );
      } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
        return ( <Redirect to={'/app/dashboard'}/> );
      } else {
        return ( <Redirect to={initURL}/> );
      }
    }


    const currentAppLocale = AppLocale[locale.locale];
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}>
              <div className="app-main">
                <Switch>
                  <RestrictedRoute path={`${match.url}app`} authUser={authUser}
                                   component={MainApp}/>
                  <Route path='/signin' component={SignIn}/>
                  <Route
                    component={asyncComponent(() => import('components/Error404'))}/>
                </Switch>
              </div>
          </IntlProvider>
        </MuiPickersUtilsProvider>
    );
  }
}

const mapStateToProps = ({settings, auth}) => {
  const {sideNavColor, locale} = settings;
  const {authUser, initURL} = auth;
  return {sideNavColor, locale, authUser, initURL}
};

export default connect(mapStateToProps, {setInitUrl})(App);

