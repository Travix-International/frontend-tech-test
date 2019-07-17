import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({children}) => (
  <div className={styles.Card}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card;