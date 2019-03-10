import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from './plus.svg'

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #FFB874;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.2);
  }
  &:active {
    box-shadow: 0px 0px 10px 0px rgba(235,70,70,1);
  }
`
const LogoStyle = styled(Logo)`
  fill: #fff;
  & path {
   fill: #fff;
  }
`

const CircleButtonComponent = ({className, onClick}) => {
  return (
    <Circle className={className} onClick={onClick}>
      <LogoStyle />
    </Circle>
  )
}

CircleButtonComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default CircleButtonComponent
