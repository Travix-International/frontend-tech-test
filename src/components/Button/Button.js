import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';


const Button = (props) => {
    return (
        <button
            className={`${props.className} ${props.disabled ? ' disabled' : ''}`}
            onClick={props.onAction}
            type={props.type}
        >
            {props.text}
        </button>
    )
  }

  Button.propTypes = {
    className: PropTypes.string,
    onAction: PropTypes.func,
    disabled: PropTypes.bool,
    text: PropTypes.string,
  }

  export default Button;