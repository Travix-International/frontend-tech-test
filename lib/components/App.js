import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../scss/base.global.scss';
import styles from './App.scss';
import * as taskActions from '../actions/taskActions';

import Loading from './Loading/Loading';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.actions.loadTasks();
  }

  /* eslint-disable-next-line class-methods-use-this */
  render() {
    return (
      <div className={styles.root}>
        {this.props.isLoading && <Loading />}
        <Header />
        <Main />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(taskActions, dispatch)
});

const mapStateToProps = ({ isLoading }) => ({ isLoading });

export default connect(mapStateToProps, mapDispatchToProps)(App);
