import React from 'react';

interface Props {
    onClick?: () => void;

}

const Button: React.FC<Props> = ({ onClick, children }) => {
    const handleClick = () => {
        if (onClick) { onClick(); }
    };
    
    return (
        <button onClick={handleClick}>{children}</button>
    );
};

export default Button;