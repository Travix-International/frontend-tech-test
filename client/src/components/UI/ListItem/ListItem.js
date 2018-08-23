import React from 'react'

import styles from './ListItem.scss'

const ListItem = () => {
  return (
    <div className={styles.Item}>
      <p className={styles.Text}>Text of task will be here</p>
    </div>
  )
}

export default ListItem
