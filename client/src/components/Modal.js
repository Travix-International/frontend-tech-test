import React from 'react';
import '../style/Modal.scss';

const Modal = (props) => {
  return (
		<div className="Modal">
			<div className={ props.showModal ? "visibleModal" : "hiddenModal" }>
				<div className="modal-header">
					<span>{props.modalTitle}</span>
					<button className="icon-close-btn" onClick={props.closeModal} />
				</div>
				{props.children}
			</div>
			<div className={ props.showModal ? "visibleBackdrop" : "" }
				onClick={props.closeModal} />
		</div>
  );
}

export default Modal;
