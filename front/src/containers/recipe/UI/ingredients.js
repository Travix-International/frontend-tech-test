import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PageComponent from '../../UI/page'

const BoxIngredients = styled(PageComponent)`
  margin-top: 3rem;
  width: 66.6%;
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
`

const List = styled.ul`
  columns: 2;
  & li {
    margin: 1rem;
  }
`

const strings = {
  ingredients: 'Ingredients',
  cookingDifficulty: 'Cooking difficulty',
  level: 'Level'
}

const IngredientsPageComponent = ({ingredients = []}) => {

  const ingredientsList = ingredients
    .map((item, key) => (<li key={key}>{item}</li>))

  return (
    <BoxIngredients>
      <Title>{strings.ingredients}</Title>
      <List>{ingredientsList}</List>
    </BoxIngredients>
  )
}

IngredientsPageComponent.propTypes = {
  ingredients: PropTypes.array
}

export default IngredientsPageComponent
