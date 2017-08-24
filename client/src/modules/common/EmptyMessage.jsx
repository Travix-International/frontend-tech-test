import React from 'react';
import PropTypes from 'prop-types';

export default class EmptyMessage extends React.Component {
  static propTypes = {
    isEmpty: PropTypes.bool.isRequired,
    renderMessage: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  get emptyView() {
    const { renderMessage } = this.props;

    return (
      <div>
        <div className="EmptyMessage-Sign">
          Here goes an empty sign
        </div>
        <div className="EmptyMessage-Message">
          {renderMessage()}
        </div>
      </div>
    );
  }

  render() {
    const { isEmpty, children } = this.props;
    return (
      <div className={`EmptyMessage ${this.props.className}`}>
        {isEmpty ? this.emptyView : children}
      </div>
    );
  }
}
