import React from 'react';
import PropTypes from 'prop-types';

export default class Description extends React.Component {
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
      <p className={`Description ${this.props.className}`}>
        {children}
      </p>
    );
  }
}
