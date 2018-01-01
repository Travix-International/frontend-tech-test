import React from "react";
import PropTypes from "prop-types";
import "./styles.less";

const Popup = props => (props.visible ? (
    <div className={`popup ${props.visible ? "popup_visible" : ""}`}>
        <div className="popup__overlay" onClick={props.onHide} />
        <div className="popup__content">
            {props.title ? (
                <div className="popup__title">{props.title}</div>
            ) : null}
            {props.message ? (
                <div className="popup__body">{props.message}</div>
            ) : (
                <div className="popup__body">{props.children}</div>
            )}
            <div className="popup__close" onClick={props.onHide} />
        </div>
    </div>
) : null);

export default Popup;

Popup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    message: PropTypes.string,
    onHide: PropTypes.func,
    title: PropTypes.string,
    visible: PropTypes.bool,
};

Popup.defaultProps = {
    children: null,
    onHide: () => {},
    message: null,
    title: "",
    visible: false,
};
