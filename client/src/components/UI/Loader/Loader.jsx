import React from 'react';

import styles from './Loader.module.scss';
import Spinner from '../../../assets/images/spinner.gif';

const Loader = () => (
  <div className={styles.Loader}>
    <img alt="loading" src={Spinner} />
  </div>
);

export default Loader;
