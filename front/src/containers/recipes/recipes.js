import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Loading from '../UI/loading'
import Container from '../UI/container'
import Title from '../UI/title-list'
import Header from '../UI/header/header'
import GridRecipes from '../UI/grid-recipes'
import { getRecipes } from '../../modules/recipes/actions/request'
import { updateStars } from '../../modules/recipes/actions/updateStars'
import { updateFavorites } from '../../modules/recipes/actions/updateFavorites'

const ContentPage = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`
const ContainerLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const strings = {
  title: 'Delicious and Quick Recipes',
  subtitle: '2500+ easy-to-cook meals specially created by our chefs.'
}

export class RecipesComponent extends Component {

  constructor(props) {
    super(props)
    this.onChangeStars = this.onChangeStars.bind(this)
    this.onChangeFavorite = this.onChangeFavorite.bind(this)
  }

  componentDidMount() {
    const { recipes: { data }, getRecipes } = this.props
    if(!data.length) getRecipes()
  }

  onChangeStars(id) {
    const { updateStars } = this. props
    const eventChange = (e) => {
      updateStars(id, e.target.value)
    }
    return eventChange
  }

  onChangeFavorite(id) {
    const { updateFavorites } = this. props
    const eventChange = () => {
      updateFavorites(id)
    }
    return eventChange
  }

  render() {
    const { recipes: { loading, data } } = this.props
    return (
      <Container>
        <Header />
        <ContentPage>
          <Title title={strings.title} subtitle={strings.subtitle} />
        </ContentPage>
        {loading && <ContainerLoading><Loading /></ContainerLoading>}
        {!loading && <GridRecipes
          data={data}
          onChangeStars={this.onChangeStars}
          onChangeFavorite={this.onChangeFavorite}/>}
      </Container>
    )
  }

}

RecipesComponent.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  updateStars: PropTypes.func.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  recipes: PropTypes.object
}

export const mapStateToProps = ({
  recipes: { recipes }
}) => ({recipes})

export const mapDispatchToProps = dispatch => bindActionCreators({
  getRecipes,
  updateStars,
  updateFavorites
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesComponent)
