import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Spinner from '../Spinner'

describe('App should render properly', () => {
  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toMatchSnapshot('Spinner_snapshot_1')
  })
})
