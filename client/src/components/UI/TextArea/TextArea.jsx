import React from 'react';

import styles from './TextArea.module.scss';

const TextArea = (props) => (<textarea rows="4" className={styles.TextArea} {...props} />)

export default TextArea;