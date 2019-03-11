jest.mock('./getItems')
import {getItems} from './getItems'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const { insertOrUpdateItem } = require('./insertOrUpdateItem')

beforeEach(() => {
  getItems.mockClear()
})

describe('insertOrUpdateItem Action', () => {
  const firstCallArgs = { type: 'result/ITEMS_LOADING', payload: {} }
  it('execute update success', async () => {
    const item = {
      id: '123',
      title: 'title',
      description: 'description'
    }
    const URL = `http://localhost:9001/task/update/${item.id}/${item.title}/${item.description}`
    const dispatch = jest.fn()
    const resturnAxios = {
      message: 'Resource updated',
    }
    const mock = new MockAdapter(axios)
    mock.onPut(URL).reply(204, resturnAxios)

    await insertOrUpdateItem(item)(dispatch)

    expect(getItems).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, firstCallArgs)
  })
  it('execute create success', async () => {
    const item = {
      id: 0,
      title: 'title',
      description: 'description'
    }
    const URL = `http://localhost:9001/task/create/${item.title}/${item.description}`
    const dispatch = jest.fn()
    const resturnAxios = {
      message: 'Resource created',
    }
    const mock = new MockAdapter(axios)
    mock.onPost(URL).reply(201, resturnAxios)

    await insertOrUpdateItem(item)(dispatch)

    expect(getItems).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, firstCallArgs)
  })

  it('execute error', async () => {
    const item = {
      id: 0,
      title: 'title',
      description: 'description'
    }
    const URL = `http://localhost:9001/task/create/${item.title}/${item.description}`
    const dispatch = jest.fn()
    const mock = new MockAdapter(axios)
    mock.onPost(URL).networkError()
    await insertOrUpdateItem(item)(dispatch)

    const secondCallArgs = { type: 'result/ITEMS_ERROR',
      payload: { data: 'Network Error'}}

    expect(getItems).not.toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, firstCallArgs)
    expect(dispatch).toHaveBeenNthCalledWith(2, secondCallArgs)
  })
  it('execute without values', async () => {
    const item = {
      id: 0,
      title: '',
      description: ''
    }
    const dispatch = jest.fn()
    await insertOrUpdateItem(item)(dispatch)

    expect(dispatch).not.toHaveBeenCalled()
  })
})
