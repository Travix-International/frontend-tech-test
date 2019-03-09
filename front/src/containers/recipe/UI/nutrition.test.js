import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import NutritionComponent from './nutrition'

describe('NutritionComponent', () => {
  it('execute with all values', async () => {
    const options = {
      calories: '10k',
      carbos: '100k',
      fats: '20k',
      proteins: '33k',
    }
    const wrapper = shallow(<NutritionComponent {...options} />)
    const itens = wrapper.find('ItemList')

    const calories = itens.at(0).find('p')
    const carbos = itens.at(1).find('p')
    const fat = itens.at(2).find('p')
    const protein = itens.at(3).find('p')

    expect(calories.at(0).text()).to.be.equal('Calories')
    expect(calories.at(1).text()).to.be.equal(options.calories)

    expect(carbos.at(0).text()).to.be.equal('Carbohydrate')
    expect(carbos.at(1).text()).to.be.equal(options.carbos)

    expect(fat.at(0).text()).to.be.equal('Fat')
    expect(fat.at(1).text()).to.be.equal(options.fats)

    expect(protein.at(0).text()).to.be.equal('Protein')
    expect(protein.at(1).text()).to.be.equal(options.proteins)
  })
})
