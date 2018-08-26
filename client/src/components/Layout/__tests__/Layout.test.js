import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from 'react-testing-library'

import reducer from '../../../store/reducers/tasksReducer'
import { Layout } from '..'

describe('Layout should works properly', () => {
  function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {},
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    }
  }

  const fetchTasks = jest.fn()

  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = renderWithRedux(<Layout fetchTasks={fetchTasks} />)
    expect(container.firstChild).toMatchSnapshot('Layout_snapshot_1')
  })

  it('Should show a message when List is empty', () => {
    const { getByText } = renderWithRedux(
      <Layout fetchTasks={fetchTasks} loading={false} />,
    )
    getByText(
      'Your ToDo list is empty. Please add a new Task or just seat and enjoy the live',
    )
  })

  it('Should fetch tasks while mounting', () => {
    renderWithRedux(<Layout fetchTasks={fetchTasks} />)
    expect(fetchTasks).toHaveBeenCalled()
  })
})
