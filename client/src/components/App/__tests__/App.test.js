import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

describe('App should render properly', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot('App_snapshot_1')
  })
})
