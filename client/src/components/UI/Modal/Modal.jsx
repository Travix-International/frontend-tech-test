import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';
import Close from '../../../assets/images/close.png';

const Modal = ({ children, closeModal }) => (
  <div className={styles.Modal}>
    <div className={styles.Window}>
      <div className={styles.Actions}>
        <img className={styles.Close} onClick={closeModal} src={Close} />
      </div>
      <div>{children}</div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;