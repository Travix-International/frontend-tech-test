import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Header from '../Header'

describe('App should render properly', () => {
  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = render(<Header counter={0} />)
    expect(container.firstChild).toMatchSnapshot('Header_snapshot_1')
  })

  it('Should show "Tasks To Do: 3" if passed counter = 3', () => {
    const { getByText } = render(<Header counter={3} />)
    getByText('Tasks To Do: 3')
  })
})
