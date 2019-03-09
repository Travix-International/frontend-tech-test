import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Edit from './edit.svg'
import Remove from './remove.svg'

const Icons = `
  width: 2rem;
  height: 2rem;
  fill: #707070;
  margin: 0 1rem;
  cursor: pointer;
`

const EditIcon = styled(Edit)`
  ${Icons}
`
const RemoveIcon = styled(Remove)`
  ${Icons}
`

const Title = styled.h1`
  color: ${props => props.done ? '#CFCFCF': '#707070'};
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  font-size: 1.6rem;
  font-weight: 400;
  display: inline-block;
  margin-top: .7rem;
  margin-bottom: .5rem;
  vertical-align: top;
`

const Description = styled.p`
  color: ${props => props.done ? '#CFCFCF': '#707070'};
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  font-size: 1.2rem;
  margin: 0 0 1rem;
`
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: rgba(0,0,0, .05);
  }
`

const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`
const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: .5rem;
`

const GridItem = ({
  done,
  title,
  description,
  handleRemove,
  handleEdit
}) => {
  return (
    <Item>
      <InfosContainer>
        <TitlesContainer>
          <Title done={done}>{title}</Title>
          <Description done={done}>{description}</Description>
        </TitlesContainer>
      </InfosContainer>
      <div>
        <EditIcon onClick={handleEdit}/>
        <RemoveIcon onClick={handleRemove}/>
      </div>
    </Item>
  )
}

GridItem.propTypes = {
  title: PropTypes.string,
  handleRemove: PropTypes.func,
  handleEdit: PropTypes.func,
  description: PropTypes.string,
  done: PropTypes.bool,
}

export default GridItem
