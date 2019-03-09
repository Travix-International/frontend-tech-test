import React from 'react'
import { expect } from 'chai'
import { mock } from 'sinon'
import { shallow } from 'enzyme'

import { RecipesComponent, mapStateToProps, mapDispatchToProps } from './recipes'

describe('RecipesComponent', () => {
  it('execute with values load', async () => {
    const options = {
      getRecipes: mock('getRecipes'),
      updateStars: mock('updateStars').withArgs('11', 1),
      updateFavorites: mock('updateFavorites').withArgs('11'),
      recipes: {
        data: [
          {
            id: '1'
          },
          {
            id: '2'
          }
        ]
      }
    }
    const wrapper = shallow(<RecipesComponent {...options} />)
    expect(wrapper.find('HeaderComponent').exists()).to.be.true

    const title = wrapper.find('TitleListComponent').props()
    expect(title.title).to.be.equal('Delicious and Quick Recipes')
    expect(title.subtitle).to.be.equal('2500+ easy-to-cook meals specially created by our chefs.')

    const cards = wrapper.find('GridRecipesComponent')
    expect(cards.exists()).to.be.true

    wrapper.instance().onChangeStars('11')({target: { value: 1}})
    wrapper.instance().onChangeFavorite('11')()
    options.updateStars.verify()
    options.updateFavorites.verify()
  })
  it('execute without values load', async () => {
    const options = {
      getRecipes: mock('getRecipes'),
      updateStars: () => {},
      updateFavorites: () => {},
      recipes: {
        data: []
      }
    }
    shallow(<RecipesComponent {...options} />)
    options.getRecipes.verify()
  })
  it('execute without values load and render Loading', async () => {
    const options = {
      getRecipes: mock('getRecipes'),
      updateStars: () => {},
      updateFavorites: () => {},
      recipes: {
        data: [],
        loading: true
      }
    }
    const wrapper = shallow(<RecipesComponent {...options} />)
    expect(wrapper.find('Loading').exists()).to.be.true
  })
  it('execute maps methods', () => {
    mapStateToProps({
      recipes: {
        recipes: []
      }
    })
    mapDispatchToProps({})
  })
})
