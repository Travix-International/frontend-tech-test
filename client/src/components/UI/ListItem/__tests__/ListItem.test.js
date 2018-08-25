import React from 'react'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from 'react-testing-library'
import ListItem from '../ListItem'

describe('App should render properly', () => {
  const saveTask = jest.fn()

  afterEach(cleanup)

  it('Should match snapshot', () => {
    const { container } = render(<ListItem />)
    expect(container.firstChild).toMatchSnapshot('ListItem_snapshot_1')
  })

  it('Should show SAVE button when EDIT button is clicked and ListItem selected', async () => {
    const { getByText } = render(<ListItem selected />)
    fireEvent.click(getByText('edit'))
    await waitForElement(() => getByText('save'))
  })

  it('Should show Inputs when EDIT button is clicked and ListItem selected', async () => {
    const { getByText, getByPlaceholderText } = render(<ListItem selected />)
    fireEvent.click(getByText('edit'))
    await waitForElement(() => getByPlaceholderText('Your next task...'))
  })

  it('Should save Item when SAVE button pushed', async () => {
    const { getByText, getByPlaceholderText } = render(
      <ListItem selected saveTask={saveTask} />,
    )
    fireEvent.click(getByText('edit'))
    await waitForElement(() => getByPlaceholderText('Your next task...'))
    fireEvent.click(getByText('save'))
    expect(saveTask).toHaveBeenCalled()
  })
})
