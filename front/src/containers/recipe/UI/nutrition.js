import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PageComponent from '../../UI/page'

const BoxNutriton = styled(PageComponent)`
  margin-top: 3rem;
  width: calc(100% - 66.6%);
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`

const Title = styled.h1`
  line-height: 3.2rem;
  font-size: 2.4rem;
  font-family: Montserrat, Verdana, Geneva, sans-serif;
  color: #343434;
  font-weight: 600;
  margin-bottom: 2rem;
  display: inline-box;
`

const SubTitle = styled.span`
  color: #7e7e7e;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  float: right;
  display: inline-box;
`

const List = styled.ul`
`
const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  color: #343434;
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif;
  & p:nth-child(1) {
    font-weight: 600;
  }
  & p:nth-child(2) {
    font-weight: 400;
  }
`
ItemList.displayName = 'ItemList'

const strings = {
  nutrition: 'Nutrition Values',
  perServing: '/ per serving',
  calories: 'Calories',
  carbos: 'Carbohydrate',
  fats: 'Fat',
  proteins: 'Protein',
}

const NutritionPageComponent = ({
  calories,
  carbos,
  fats,
  proteins
}) => {

  return (
    <BoxNutriton>
      <Title>{strings.nutrition}</Title>
      <SubTitle>{strings.perServing}</SubTitle>
      <List>
        <ItemList>
          <p>{strings.calories}</p>
          <p>{calories}</p>
        </ItemList>
        <ItemList>
          <p>{strings.carbos}</p>
          <p>{carbos}</p>
        </ItemList>
        <ItemList>
          <p>{strings.fats}</p>
          <p>{fats}</p>
        </ItemList>
        <ItemList>
          <p>{strings.proteins}</p>
          <p>{proteins}</p>
        </ItemList>
      </List>
    </BoxNutriton>
  )
}

NutritionPageComponent.propTypes = {
  calories: PropTypes.string,
  carbos: PropTypes.string,
  fats: PropTypes.string,
  proteins: PropTypes.string,
}

export default NutritionPageComponent
