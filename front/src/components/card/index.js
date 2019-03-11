import React from 'react'
import PropTypes from 'prop-types'
import Card from './components/card'

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
