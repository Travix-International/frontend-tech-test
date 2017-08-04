/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types' // eslint-disabel-line

import './TodoInput.scss'

export default function TodoItem(props) {

  let inputElm = null

  const handleKeyPress = (event) => {
    const ENTER = 13
    if (event.which === ENTER) {
      props.onAdd(inputElm.value)
      inputElm.value = ''
    }
  }

  return (
    <div
      className="Todo__Input"
    >
      <input
        type="text"
        ref={(elm) => inputElm = elm}
        placeholder="Add todo"
        onKeyDown={handleKeyPress}
      />
      <br />
      <span>
        Hit [Enter] to Add
      </span>
    </div>
  )
}

TodoItem.propTypes = {
}

TodoItem.defaultProps = {
}
