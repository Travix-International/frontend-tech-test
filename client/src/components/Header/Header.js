import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.scss'

const Header = props => {
  return (
    <div className={styles.Header}>
      <h1>Travix ToDo list</h1>
      <div className={styles.Counter}>
        <p>Tasks To Do: {props.counter}</p>
      </div>
    </div>
  )
}

Header.propTypes = {
  counter: PropTypes.number.isRequired
}

export default Header
