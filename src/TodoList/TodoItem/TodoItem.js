/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import './TodoItem.scss'

export default function TodoItem({ onClick, id, isComplete, text }) {
  function TodoContent({ children }) {
    if (isComplete) {
      return (
        <strike>
          {children}
        </strike>
      )
    }

    return (
      <span>
        {children}
      </span>
    )
  }

  return (
    <div
      key={id}
      className={`Todo__Item${isComplete ? '--Complete' : ''}`}
      onClick={onClick}
    >
      <TodoContent>
        {text}
      </TodoContent>
    </div>
  )
}

TodoItem.propTypes = {
  isComplete: PropTypes.bool,
  text: PropTypes.string,
}

TodoItem.defaultProps = {
  isComplete: false,
  text: '',
}
