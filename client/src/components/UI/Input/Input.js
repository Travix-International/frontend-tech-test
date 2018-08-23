import React from 'react'

import styles from './Input.scss'

const Input = () => {
  return (
    <input
      type="text"
      placeholder="Your nest task..."
      className={styles.Input}
    />
  )
}

export default Input
