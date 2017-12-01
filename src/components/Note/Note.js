import React from 'react'
import PropTypes from 'prop-types'

import styles from './Note.css'

function Note(props) {
  const {
    children,
  } = props

  return (
    <div className={styles.note}>
      {children}
    </div>
  )
}

Note.propTypes = {
  children: PropTypes.node,
}

export default Note
