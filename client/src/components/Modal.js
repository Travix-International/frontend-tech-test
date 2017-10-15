import React from 'react';
import PropTypes from 'prop-types';
import '../style/Modal.scss';

const Modal = (props) => {
  return (
    <div className="Modal">
      <div className={props.showModal ? 'visibleModal' : 'hiddenModal'}>
        <div className="modal-header">
          <span>{props.modalTitle}</span>
          <button className="icon-close-btn" onClick={props.closeModal} />
        </div>
        {props.children}
      </div>
      <div
        role="presentation"
        className={props.showModal ? 'visibleBackdrop' : ''}
        onClick={props.closeModal} />
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
