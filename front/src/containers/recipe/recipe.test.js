import React from 'react'
import { expect } from 'chai'
import { mock } from 'sinon'
import { shallow } from 'enzyme'

import { RecipeComponent, mapStateToProps, mapDispatchToProps } from './recipe'

describe('RecipeComponent', () => {
  it('execute all functions', async () => {
    const options = {
      getRecipe: mock('getRecipe').withArgs('123'),
      recipe: {
        data: {}
      },
      match: {params: { id: '123'}},
      getRecipes: mock('getRecipes'),
      updateStars: mock('updateStars').withArgs('123', 1),
      updateFavorites: mock('updateFavorites').withArgs('123'),
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
    options.getRecipe.thrice()

    const wrapper = shallow(<RecipeComponent {...options} />)

    wrapper.instance().onChangeStars({target: { value: 1}})
    options.updateStars.verify()

    wrapper.instance().onChangeFavorite('11')
    options.updateFavorites.verify()


    wrapper.instance().shouldComponentUpdate(options)
    options.getRecipe.verify()

    options.recipe.data.id = '123'
    wrapper.instance().shouldComponentUpdate(options)

  })

  it('execute without values load and unmount', async () => {
    const options = {
      getRecipe: mock('getRecipe').withArgs(),
      recipe: {
        data: {}
      },
      match: {params: { id: '123'}},
      getRecipes: mock('getRecipes'),
      updateStars: mock('updateStars').withArgs('123', 1),
      updateFavorites: mock('updateFavorites').withArgs('123'),
      recipes: {
        data: []
      }
    }

    const wrapper = shallow(<RecipeComponent {...options} />)
    options.getRecipes.verify()

    wrapper.instance().componentWillUnmount(options)
    options.getRecipe.verify()

  })
  it('execute with values load', async () => {
    const options = {
      getRecipe: mock('getRecipe').withArgs(),
      recipe: {
        data: {
          calories: '516 kcal',
          carbos: '47 g',
          description: 'There\u2019s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!',
          difficulty: 0,
          fats: '8 g',
          favorites: 1,
          headline: 'with Sweet Potato Wedges and Minted Snap Peas',
          id: '533143aaff604d567f8b4571',
          image: 'https://d3hvwccx09j84u.cloudfront.net/web/image/533143aaff604d567f8b4571.jpg',
          ingredients: [
            '375g Sweet Potatoes',
            '1 Tsp Paprika',
            '2 Tbsps Parmesan Cheese',
            '1 Lemon',
            'A Few Sprigs Thyme',
            '25g Panko Breadcrumbs',
            '1 Tbsp Butter',
            '2 Cod Fillets',
            '150g Sugar Snap Peas',
            'A Few Sprigs Mint',
            '75ml Sour Cream'
          ],
          name: 'Crispy Fish Goujons ',
          proteins: '43 g',
          rating: 5,
          thumb: 'https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143aaff604d567f8b4571.jpg',
          time: 'PT35M'
        }
      },
      match: {params: { id: '123'}},
      getRecipes: mock('getRecipes'),
      updateStars: mock('updateStars').withArgs('123', 1),
      updateFavorites: mock('updateFavorites').withArgs('123'),
      recipes: {
        data: []
      }
    }

    const wrapper = shallow(<RecipeComponent {...options} />)
    expect(wrapper.find('Styled(PageComponent)').exists()).to.be.true
    expect(wrapper.find('TitlePageComponent').exists()).to.be.true
    expect(wrapper.find('DescriptionPageComponent').exists()).to.be.true
    expect(wrapper.find('IngredientsPageComponent').exists()).to.be.true
    expect(wrapper.find('NutritionPageComponent').exists()).to.be.true

  })

  it('execute maps methods', () => {
    mapStateToProps({
      recipes: {
        recipes: []
      },
      recipe: {
        recipe: {}
      }
    })
    mapDispatchToProps({})
  })
})
