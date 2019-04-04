import React from 'react';
import styles from './index.scss';

type ButtonType = 'primary' | 'normal' | 'icon';

interface Props {
    type?: ButtonType;
    title?: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ type = 'normal', title, onClick, children }) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (onClick) { onClick(); }
    };

    return (
        <button title={title} className={`${styles.btn} ${styles[type as ButtonType]}`} onClick={handleClick}>{children}</button>
    );
};

export default Button;