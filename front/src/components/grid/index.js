import React from 'react'
import PropTypes from 'prop-types'
import Grid from './components/grid'

const GridComponent = ({ children }) => {
  return (
    <Grid>
      { children }
    </Grid>
  )
}

GridComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default GridComponent
