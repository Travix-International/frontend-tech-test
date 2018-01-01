import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const Button = ({ className, children, icon, ...restProps }) => {
    const buttonClass = className ? `button ${className}` : 'button';

    return (
        <button className={buttonClass} {...restProps}>
            {icon ? <img className="button__icon" src={icon} /> : null}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    className: PropTypes.string,
    icon: PropTypes.string,
};

Button.defaultProps = {
    className: '',
    children: null,
    icon: '',
};

export default Button;
