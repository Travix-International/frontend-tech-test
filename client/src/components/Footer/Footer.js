import React from 'react'

import {Button, Input} from '../UI'
import styles from './Footer.scss'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Input />
      <div className={styles.Buttons}>
        <Button text="delete" delete />
        <Button text="add" add />
      </div>
    </div>
  )
}

export default Footer
