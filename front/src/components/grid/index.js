import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Grid = styled.ul`
  list-style: none;
  width: 100%;
  height: calc(100% - 2rem);
  box-sizing: border-box;
  padding: 1.5rem;
  overflow: auto;
`

const GridComponent = ({ children }) => {
  return (
    <Grid>
      { children }
    </Grid>
  )
}

GridComponent.propTypes = {
  children: PropTypes.array,
}

export default GridComponent
