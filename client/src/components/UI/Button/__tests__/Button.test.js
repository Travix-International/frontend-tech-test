import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Button from '../Button'

describe('App should render properly', () => {
  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = render(<Button text="add" />)
    expect(container.firstChild).toMatchSnapshot('Button_snapshot_1')
  })

  it('Should show "add button" if passed text=add', () => {
    const { getByText } = render(<Button text="add" />)
    getByText('add')
  })
  it('Should show "delete button" if passed text=delete', () => {
    const { getByText } = render(<Button text="delete" />)
    getByText('delete')
  })
  it('Should show "edit button" if passed text=edit', () => {
    const { getByText } = render(<Button text="edit" />)
    getByText('edit')
  })
})
