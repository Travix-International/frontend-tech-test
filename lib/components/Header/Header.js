import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Header.scss';
import Loading from './Loading';

const Header = ({ isLoading }) => {
  return (
    <header className={styles.root}>
      <h1 className={styles.logo}>Taskstack</h1>
      {isLoading && <Loading />}
    </header>
  );
};

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ isLoading }) => ({ isLoading });

export default connect(mapStateToProps)(Header);
