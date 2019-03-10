import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Empty = styled.div`
  width: 100%;
  height: calc(100% - 2rem);
  box-sizing: border-box;
  padding: 1.5rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #707070;
  margin: 1.5rem;
  font-weight: 600;
`

const Descriptions = styled.p`
  font-size: 1.5rem;
  color: #707070;
  text-align: center;
`

const EmptyComponent = () => {
  return (
    <Empty>
      <Title>List Empty</Title>
      <Descriptions>To add a todo click on the orange button below.</Descriptions>
    </Empty>
  )
}

EmptyComponent.propTypes = {
  children: PropTypes.array,
}

export default EmptyComponent
