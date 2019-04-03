import React from 'react';
import styles from './index.scss';

const QueryContainer: React.FC<{}> = ({children}) => {
    return <div className={styles.container}>{children}</div>
};

export default QueryContainer;