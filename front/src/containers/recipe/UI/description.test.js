import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import DescriptionComponent from './description'

describe('DescriptionComponent', () => {
  it('execute with all values', async () => {
    const options = {
      description: 'Descriptions test',
      time: 'PT10M',
      difficulty: 1
    }
    const wrapper = shallow(<DescriptionComponent {...options} />)

    const description = wrapper.find('Description')
    expect(description.text()).to.be.equal(options.description)

    const values = wrapper.find('ValueInformation')
    const titles = wrapper.find('TitleInformation')

    const time = values.at(0)
    expect(time.text()).to.be.equal('10 minutes')

    const difficulty = values.at(1)
    expect(difficulty.text()).to.be.equal(`Level ${options.difficulty}`)

    const titleTime = titles.at(0)
    const titleDiff = titles.at(1)
    expect(titleTime.text()).to.be.equal('Preparation Time')
    expect(titleDiff.text()).to.be.equal('Cooking difficulty')
  })
})
