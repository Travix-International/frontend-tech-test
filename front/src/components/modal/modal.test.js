import React from 'react'
import { shallow } from 'enzyme'

import Modal from '.'

describe('ModalComponent', () => {
  it('Snapshot', async () => {
    const tree = shallow(<Modal open={true} />)
    expect(tree).toMatchSnapshot()
  })
  it('Snapshot without nothing', async () => {
    const tree = shallow(<Modal open={false} />)
    expect(tree).toMatchSnapshot()
  })
  it('onClose with click event', async () => {
    const onClose = jest.fn()
    const tree = shallow(<Modal open={true} onClose={onClose}/>)
    tree.find('ModalContainer').simulate('click')
    expect(onClose).toHaveBeenCalled()
  })
  it('onClose with keydown event', async () => {
    const onClose = jest.fn()
    const tree = shallow(<Modal open={true} onClose={onClose}/>)
    tree.find('ModalContainer').simulate('KeyDown',  {
      key: 'Escape',
      keyCode: 27,
      which: 27,
    })
    tree.find('ModalContainer').simulate('KeyDown',   {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    })
    expect(onClose).toHaveBeenCalled()
  })
})
