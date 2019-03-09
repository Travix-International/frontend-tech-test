import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 6rem);
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
  children: PropTypes.obejct,
}

export default CardComponent
