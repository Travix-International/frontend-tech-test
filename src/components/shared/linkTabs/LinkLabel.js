import PropTypes from 'prop-types'
import React from 'react'

export default function LinkLabel({ label }) {
  return <span>{label}</span>
}

LinkLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
}
