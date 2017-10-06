import React from 'react'
import Spinner from 'react-spinkit'
import './index.css'

const LoadingIndicator = () => {
  return (
    <div className='loading-indicator'>
      <Spinner name='line-scale' />
    </div>
  )
}

export default LoadingIndicator
