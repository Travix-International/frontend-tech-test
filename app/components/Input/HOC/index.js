import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default WrappedComponent => {
  class HOC extends Component {
    handleChange = ({ target: { value } }) => {
      const { name, onChange } = this.props;

      onChange(value, name);
    }

    render() {
      return <WrappedComponent {...this.props} onChange={this.handleChange} />;
    }
  }

  HOC.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
  };

  return HOC;
};
