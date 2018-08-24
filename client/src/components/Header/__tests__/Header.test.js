import React from 'react'
import {shallow} from 'enzyme'
import Header from '../Header'

describe('App should render properly', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })
  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot('Header_snapshot_1')
  })

  it('Should show "Tasks To Do: 3" if passed counter = 3', () => {
    console.log(wrapper.debug())
    wrapper.setProps({counter: 3})
    console.log(wrapper.debug())
    expect(
      wrapper
        .find('div.Header')
        .render()
        .text()
    ).to.equal('Tasks To Do: 3')
  })
})
