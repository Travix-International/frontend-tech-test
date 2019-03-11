import React from 'react'
import PropTypes from 'prop-types'
import Button from './components/button'

const ButtonComponent = ({className, onClick, children}) => {
  return (
    <Button className={className} onClick={onClick}>{children}</Button>
  )
}

ButtonComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export default ButtonComponent
