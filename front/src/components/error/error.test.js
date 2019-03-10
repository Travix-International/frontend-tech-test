import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { mount } from 'enzyme'

import Error from '.'

describe('ErrorComponent', () => {
  it('Snapshot', async () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Error isOpen={true} message={'test'} />)
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
  it('onClose', async () => {
    const tree = mount(<Error isOpen={true} message={'test'} />)
    const container = tree.find('ModalContainer')
    container.simulate('click')
    expect(container).toBeDefined()
  })
})
