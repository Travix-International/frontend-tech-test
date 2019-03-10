jest.mock('./getItems')
import {getItems} from './getItems'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const { deleteItem } = require('./deleteItem')

beforeEach(() => {
  getItems.mockClear()
})

describe('deleteItem Action', () => {
  const firstCallArgs = { type: 'result/ITEMS_LOADING', payload: {} }
  const id = '123'
  const URL = `http://localhost:9001/task/delete/${id}`
  it('execute success', async () => {
    const dispatch = jest.fn()
    const resturnAxios = {
      message: 'Updated successfully',
    }
    const mock = new MockAdapter(axios)
    mock.onDelete(URL).reply(200, resturnAxios)

    await deleteItem(id)(dispatch)

    expect(getItems).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, firstCallArgs)
  })

  it('execute error', async () => {
    const dispatch = jest.fn()
    const mock = new MockAdapter(axios)
    mock.onGet(URL).networkError()
    await deleteItem(id)(dispatch)

    const secondCallArgs = { type: 'result/ITEMS_ERROR',
      payload: { data: 'Request failed with status code 404'}}

    expect(getItems).not.toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, firstCallArgs)
    expect(dispatch).toHaveBeenNthCalledWith(2, secondCallArgs)
  })
})
