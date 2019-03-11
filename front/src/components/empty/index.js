import React from 'react'
import PropTypes from 'prop-types'
import Empty from './components/empty'
import Title from '../title'
import Description from './components/description'

const EmptyComponent = () => {
  return (
    <Empty>
      <Title>List Empty</Title>
      <Description>To add a todo click on the orange button below.</Description>
    </Empty>
  )
}

EmptyComponent.propTypes = {
  children: PropTypes.array,
}

export default EmptyComponent
