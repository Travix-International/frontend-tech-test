import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from 'react-testing-library'

import reducer from '../../../store/reducers/tasksReducer'
import { List } from '..'

describe('List should works properly', () => {
  function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {},
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    }
  }

  const tasks = [
    {
      id: 72967,
      title: 'Hello',
      description: 'Test',
    },
  ]

  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = renderWithRedux(<List tasks={tasks} />)
    expect(container.firstChild).toMatchSnapshot('List_snapshot_1')
  })

  it('Should render a ListItem when tasks exists', () => {
    const { getByTestId } = renderWithRedux(<List tasks={tasks} />)
    getByTestId('listItem')
  })

  it('Should render a Spinner while loading', () => {
    const { getByTestId } = renderWithRedux(<List tasks={tasks} loading />)
    getByTestId('spinner')
  })
})
