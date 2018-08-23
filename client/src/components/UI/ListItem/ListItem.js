import React from 'react'
import PropTypes from 'prop-types'

import styles from './ListItem.scss'

const ListItem = props => {
  return (
    <div
      className={props.selected ? styles.Item_Selected : styles.Item}
      onClick={props.onClick}
    >
      <p className={styles.Text}>{props.title}</p>
      <p className={styles.Desc}>{props.desc}</p>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
  selected: PropTypes.bool
}

export default ListItem
