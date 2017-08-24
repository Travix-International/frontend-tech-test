import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

export default class LoadingMessage extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    renderMessage: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  get loadingView() {
    const { renderMessage } = this.props;

    return (
      <div>
        <div className="LoadingMessage-Spinner">
          <Spinner />
        </div>
        <div className="LoadingMessage-Message">
          {renderMessage()}
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, children } = this.props;
    return (
      <div className={`LoadingMessage ${this.props.className}`}>
        {isLoading ? this.loadingView : children}
      </div>
    );
  }
}
