import React from 'react';
import styles from './index.scss';

type ButtonType = 'primary' | 'normal' | 'icon';

interface Props {
    type?: ButtonType;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ type = 'normal', onClick, children }) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (onClick) { onClick(); }
    };

    return (
        <button className={`${styles.btn} ${styles[type]}`} onClick={handleClick}>{children}</button>
    );
};

export default Button;