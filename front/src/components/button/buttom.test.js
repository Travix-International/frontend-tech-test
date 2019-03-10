import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Button from '.'

describe('ButtonComponent', () => {
  it('Snapshot', async () => {
    const tree = renderer
      .create(<Button>Test</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('onCLick simulate', async () => {
    const onClick = jest.fn()
    const tree = shallow(<Button onClick={onClick}>Test</Button>)
    tree.find('Button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
