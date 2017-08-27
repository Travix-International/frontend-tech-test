import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorMessage extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    renderMessage: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
  }

  static defaultProps = {
    className: '',
    error: null,
  }

  get hasError() {
    const { error } = this.props;

    return !!error;
  }

  get errorView() {
    const { renderMessage, error } = this.props;

    return (
      <div>
        <div className="ErrorMessage-Sign">
          Here goes an error sign
        </div>
        <div className="ErrorMessage-Message">
          {renderMessage(error)}
        </div>
      </div>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <div className={`ErrorMessage ${this.props.className}`}>
        {this.hasError ? this.errorView : children}
      </div>
    );
  }
}
