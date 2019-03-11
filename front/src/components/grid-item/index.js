import React from 'react'
import PropTypes from 'prop-types'
import Item from './components/item'
import InfosContainer from './components/info-container'
import TitlesContainer from './components/title-container'
import Title from './components/title'
import Description from './components/description'
import {EditIcon, RemoveIcon} from './components/icons'

const GridItem = ({
  title,
  description,
  handleRemove,
  handleEdit
}) => {
  return (
    <Item>
      <InfosContainer>
        <TitlesContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
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
}

export default GridItem
