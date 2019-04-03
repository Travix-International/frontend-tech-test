import React from 'react';
import styles from './index.scss';

const Card: React.FC<{}> = ({children}) => (
    <div className={styles.card}>
        {children}
    </div>
);

export default Card;