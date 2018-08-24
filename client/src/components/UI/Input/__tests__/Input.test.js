import React from 'react'
import {render, cleanup} from 'react-testing-library'
import Input from '../Input'

describe('App should render properly', () => {
  afterEach(cleanup)

  it('Should match snapshot', () => {
    const {container} = render(<Input />)
    expect(container.firstChild).toMatchSnapshot('Input_snapshot_1')
  })

  it('Should show "Input Title" if passed title', () => {
    const {getByPlaceholderText} = render(<Input title />)
    getByPlaceholderText('Your next task...')
  })

  it('Should show "Input Description" if title not passed', () => {
    const {getByPlaceholderText} = render(<Input />)
    getByPlaceholderText('Please write some description...')
  })
})
