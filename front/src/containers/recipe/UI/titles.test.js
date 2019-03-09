import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import TitlesComponent from './titles'

describe('TitlesComponent', () => {
  it('execute with all values', async () => {
    const options = {
      id: '1',
      rating: 1,
      title: 'Title test',
      headline: 'headline test',
      favorited: true,
      onChangeFavorite: () => {},
      onChangeStars: () => {}
    }
    const wrapper = shallow(<TitlesComponent {...options} />)

    const title = wrapper.find('Title').text()
    expect(title).to.be.equal(options.title)

    const headline = wrapper.find('HeadLine').text()
    expect(headline).to.be.equal(options.headline)

    expect(wrapper.find('Favorite').exists()).to.be.true
    expect(wrapper.find('StarsComponent').exists()).to.be.true

    const rating = wrapper.find('InfoRating').text()
    expect(rating).to.be.equal(`Rated ${options.rating} / 5`)
  })
  it('execute without rating', async () => {
    const options = {
      id: '1',
      title: 'Title test',
      headline: 'headline test',
      favorited: true,
      onChangeFavorite: () => {},
      onChangeStars: () => {}
    }
    const wrapper = shallow(<TitlesComponent {...options} />)

    const rating = wrapper.find('InfoRating').text()
    expect(rating).to.be.equal(`Rated 0 / 5`)
  })
})
