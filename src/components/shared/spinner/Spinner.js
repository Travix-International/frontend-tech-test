import React from 'react'
import PropTypes from 'prop-types'
import { PropagateLoader } from 'react-spinners'
import './spinner.scss'

export default function Spinner({ color, size, loading }) {
  return (
    <div className="spinner">
      <PropagateLoader
        color={color}
        size={size}
        loading={loading}
      />
    </div>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  loading: PropTypes.bool
}

Spinner.defaultProps = {
  color: '#c76837',
  size: 15,
  loading: true
}
