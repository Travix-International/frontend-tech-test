import React from 'react';
import styles from './index.scss';

interface Props {
    icon: any;
    text: string;
}

const StateScreen = ({ icon: Icon, text }: Props) =>
    (
        <div className={styles.container}>
            {React.cloneElement(Icon, {className: styles.icon})}
            <p className={styles.text}>{text}</p>
        </div>
    );

export default StateScreen;
