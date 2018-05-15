import React from 'react'
import PropTypes from 'prop-types'
import { PropagateLoader } from 'react-spinners'
import styles from './spinner.scss'

export default function Spinner({ color, size, loading }) {
  return (
    <div className={styles.spinner}>
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
  color: '#0062cc',
  size: 15,
  loading: true
}
