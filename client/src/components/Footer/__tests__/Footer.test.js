import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from 'react-testing-library'

import reducer from '../../../store/reducers/tasksReducer'
import { Footer } from '..'

describe('Footer should works properly', () => {
  function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {},
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    }
  }

  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = renderWithRedux(<Footer />)
    expect(container.firstChild).toMatchSnapshot('Footer_snapshot_1')
  })

  it('Should render add button', () => {
    const { getByText } = render(<Footer />)
    getByText('add')
  })

  it('Should render inputs', () => {
    const { getByPlaceholderText } = render(<Footer />)
    getByPlaceholderText('Your next task...')
  })

  it('Should render inputs', () => {
    const { getByPlaceholderText } = render(<Footer />)
    getByPlaceholderText('Your next task...')
  })
})
