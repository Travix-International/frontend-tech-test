import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

export class NavComponent extends Component {
  static propTypes = {
    dummy: PropTypes.string,
  }

  static defaultProps = {
    dummy: 'dummy',
  }

  render() {
    return (
      <nav>
        <Link to="/">Todo.</Link>

        <div className="user-info">
          your are {this.props.dummy}
        </div>
      </nav>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps, null)(NavComponent);
