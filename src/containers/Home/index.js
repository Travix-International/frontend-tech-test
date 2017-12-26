import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import './style.scss';

export class HomeComponent extends Component {
  static propTypes = {
    dummy: PropTypes.string,
  }

  static defaultProps = {
    dummy: 'dummy',
  }

  render() {
    return (
      <div className="page--home">
        <Helmet>
          <title>Home</title>
          <meta content="home page shows posts" name="description" />
          <meta content="home page" name="og:title" />
        </Helmet>
        Home
        {this.props.dummy}

      </div>
    );
  }
}

export function mapStateToProps() {
  return {
    dummy: 'dummy',
  };
}

export function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
