import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PageComponent from '../UI/page'
import Loading from '../UI/loading'
import Title from './UI/titles'
import Description from './UI/description'
import Ingredients from './UI/ingredients'
import Nutrition from './UI/nutrition'
import { getRecipe } from '../../modules/recipes/actions/getRecipe'
import { getRecipes } from '../../modules/recipes/actions/request'
import { updateStars } from '../../modules/recipes/actions/updateStars'
import { updateFavorites } from '../../modules/recipes/actions/updateFavorites'

const PageContainerWithMargin = styled(PageComponent)`
  margin-top: -6rem;
`

const LoadingPage = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1140px;
  width: 100%;
  min-height: 15rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`

export class RecipeComponent extends Component {

  constructor(props) {
    super(props)
    this.onChangeStars = this.onChangeStars.bind(this)
    this.onChangeFavorite = this.onChangeFavorite.bind(this)
  }

  async componentDidMount() {
    const {
      match: { params: { id } },
      getRecipe,
      getRecipes,
      recipes: { data }
    } = this.props
    if(!data.length) await getRecipes()
    await getRecipe(id)
  }

  shouldComponentUpdate(nextProps){
    const { recipe: { data } } = nextProps
    if(!data.id) return false
    return true
  }

  async componentWillUnmount(){
    const {
      getRecipe
    } = this.props
    await getRecipe()
  }

  onChangeStars(e) {
    const {
      match: { params: { id } },
      updateStars,
      getRecipe
    } = this.props

    updateStars(id, e.target.value)
    getRecipe(id)
  }

  onChangeFavorite() {
    const {
      match: { params: { id } },
      updateFavorites,
      getRecipe,
    } = this. props

    updateFavorites(id)
    getRecipe(id)
  }

  render() {
    const { recipe: { data } } = this.props

    if(!data.id) return <LoadingPage><Loading /></LoadingPage>
    return (
      <Fragment>
        <PageContainerWithMargin img={data.image}>
          <Title
            id={data.id}
            rating={data.rating}
            title={data.name}
            headline={data.headline}
            favorited={data.favorited}
            onChangeFavorite={this.onChangeFavorite}
            onChangeStars={this.onChangeStars}
          />
          <Description
            description={data.description}
            time={data.time}
            difficulty={data.difficulty}/>
        </PageContainerWithMargin>
        <BoxContainer>
          <Ingredients ingredients={data.ingredients}/>
          <Nutrition
            calories={data.calories}
            carbos={data.carbos}
            fats={data.fats}
            proteins={data.proteins} />
        </BoxContainer>
      </Fragment>
    )
  }

}

RecipeComponent.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  getRecipe: PropTypes.func.isRequired,
  updateStars: PropTypes.func.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  recipes: PropTypes.object,
  recipe: PropTypes.object,
  match: PropTypes.object
}

export const mapStateToProps = ({
  recipes: { recipe, recipes }
}) => ({recipe, recipes})

export const mapDispatchToProps = dispatch => bindActionCreators({
  getRecipe,
  getRecipes,
  updateStars,
  updateFavorites
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeComponent)
