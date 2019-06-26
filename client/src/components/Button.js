import React from 'react';

const Button = props => {
    const {type, className, text} = props;
    return (
        <button type={type} className={className}>{text}</button>
    );
};

export default Button;