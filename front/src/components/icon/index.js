import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Icon = styled.svg`
  fill: black;
  & path {
    fill: red;
  }
`

const IconComponent = ({name, svg}) => (
  <Icon>
    <use href={`#${name}`} xlinkHref={`${svg}#${name}`} />
  </Icon>
)

IconComponent.propTypes = {
  name: PropTypes.string,
  svg: PropTypes.string
}

export default IconComponent
