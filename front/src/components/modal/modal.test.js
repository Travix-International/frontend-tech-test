jest.mock('react-dom')

import React from 'react'
import render from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

import Modal from '.'

describe('ModalComponent', () => {
  it('Snapshot', async () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Modal open={true} onClose={() => {}} ><h1>test</h1></Modal>)
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
})
