import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import IngredientsComponent from './ingredients'

describe('IngredientsComponent', () => {
  it('execute with all values', async () => {
    const options = {
      ingredients: ['one', 'two', 'three']
    }
    const wrapper = shallow(<IngredientsComponent {...options} />)
    const itens = wrapper.find('li')
    expect(itens.at(0).text()).to.be.equal(options.ingredients[0])
    expect(itens.at(1).text()).to.be.equal(options.ingredients[1])
    expect(itens.at(2).text()).to.be.equal(options.ingredients[2])
  })
  it('execute without values load', async () => {
    const options = {}
    const wrapper = shallow(<IngredientsComponent {...options} />)

    const itens = wrapper.find('li')
    expect(itens.exists()).to.be.false
  })
})
