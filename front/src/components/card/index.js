import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 7rem);
  background: #fff;
  border-radius: .4rem;
  min-width: 27.5rem;
  box-sizing: border-box;
  padding-bottom: 2.5rem;
`

const CardComponent = ({children}) => (
  <Card>
    {children}
  </Card>)

CardComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default CardComponent
