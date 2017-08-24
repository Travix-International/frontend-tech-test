import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
  }

  static defaultProps = {
    className: '',
  }


  render() {
    const { children } = this.props;
    return (
      <h5 className={`Title ${this.props.className}`}>
        {children}
      </h5>
    );
  }
}
