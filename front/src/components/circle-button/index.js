import React from 'react'
import PropTypes from 'prop-types'
import Circle from './components/circle'
import Logo from './components/logo'


const CircleButtonComponent = ({className, onClick}) => {
  return (
    <Circle className={className} onClick={onClick}>
      <Logo />
    </Circle>
  )
}

CircleButtonComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default CircleButtonComponent
