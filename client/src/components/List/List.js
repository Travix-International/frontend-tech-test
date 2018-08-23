import React, {Component} from 'react'

import {ListItem} from '../UI'
import styles from './List.scss'

class List extends Component {
  render() {
    return (
      <div className={styles.List}>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    )
  }
}

export default List
