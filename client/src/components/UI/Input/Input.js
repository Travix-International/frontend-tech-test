import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Input.scss'

class Input extends Component {
  render() {
    const {
      onChangeValueHandler,
      value,
      onChangeDescHandler,
      title,
    } = this.props

    const input = title ? (
      <input
        type="text"
        name="title"
        placeholder="Your next task..."
        className={styles.Input}
        value={value}
        onChange={onChangeValueHandler}
      />
    ) : (
      <textarea
        rows="5"
        type="text"
        name="desc"
        placeholder="Please write some description..."
        className={styles.Input}
        value={value}
        onChange={onChangeDescHandler}
      />
    )

    return input
  }
}

Input.defaultProps = {
  title: null,
  onChangeDescHandler: null,
  onChangeValueHandler: null,
  value: '',
}

Input.propTypes = {
  onChangeDescHandler: PropTypes.func,
  onChangeValueHandler: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.bool,
}

export default Input
