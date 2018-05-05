import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.scss';

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    styles: PropTypes.string
  };

  static defaultProps = {
    styles: '',
    show: false
  };

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={`${styles.root} ${this.props.styles}`}>
        <div className={styles.content}>{this.props.children}</div>
        <div className={styles.footer}>
          <button className={styles.cancel} onClick={this.props.onClose}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Modal;
