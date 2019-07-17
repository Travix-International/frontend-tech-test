import React from 'react';

import styles from './Button.module.scss';

const Button = props => (
  <button {...props} className={styles.Button}>{props.children}</button>
);

export default Button;