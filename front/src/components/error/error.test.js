import React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


import Error from '.'

describe('ErrorComponent', () => {
  it('Snapshot', async () => {
    const tree = shallow(<Error isOpen={true} message={'test'} />)

    expect(toJson(tree)).toMatchSnapshot()
  })
  it('Snapshot without open', async () => {
    const tree = shallow(<Error isOpen={false} message={'test'} />)

    expect(toJson(tree)).toMatchSnapshot()
  })
  it('onClose', async () => {
    const tree = mount(<Error isOpen={true} message={'test'} />)
    const container = tree.find('ModalContainer')
    container.simulate('click')
    expect(container).toBeDefined()
  })
})
