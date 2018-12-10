/**
 * @fileoverview main component, contains the login form as
 * well as the app layout. After logging in and receiving a valid
 * token, app layout will be displayed.
 */
import React, { Component } from 'react';
import Layout from '../layout';
import { Input, Button } from 'travix-ui-kit';
import LABELS from '../../constants/labels';
import types from '../../constants/types';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      'username': ''
    }
  }

  /**
   * @description on form submit event handler.
   * @param {Object} e 
   */
  _onFormSubmit (e) {
    e.preventDefault ();
    const { username } = this.state;
    if (username) {
      this.props.registerUser (username);
    }
  }

  render() {
    const { userid, registerError } = this.props;
    if (userid) {
      return <Layout />
    }
    if (registerError) {
      return <div className='app-connect-error'>
        { registerError }
      </div>
    }
    return (
      <form className='app-login' onSubmit={ this._onFormSubmit.bind (this) }>
        <Input
          value={ this.state.username }
          onChange={ e => this.setState ({ username: e.target.value })}
          placeholder='Enter username'></Input>
        <Button
          onClick={ this._onFormSubmit.bind (this) }> 
          { LABELS.LOGIN_BUTTON }
        </Button>
      </form>
    );
  }
}

App.propTypes = {
  registerError: types._string,
  userid: types._string
}

export default App;
