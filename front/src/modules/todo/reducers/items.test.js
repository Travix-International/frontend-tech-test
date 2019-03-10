const items = require('./items')

describe('Recipes Reducer', () => {
  it('execute success', () => {
    const values = {
      type: 'result/ITEMS_SUCCESS',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      data: values.payload.data,
      loading: false,
      error: null
    }
    expect(items.default (undefined, values)).toEqual(valuesReturn)
  })
  //
  it('execute error', async () => {
    const values = {
      type: 'result/ITEMS_ERROR',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      error: values.payload.data,
      loading: false,
    }
    expect(items.default (null, values)).toEqual(valuesReturn)
  })
  //
  it('execute loading', async () => {
    const values = {
      type: 'result/ITEMS_LOADING'
    }

    const valuesReturn = {
      error: '',
      loading: true
    }
    expect(items.default (null, values)).toEqual(valuesReturn)
  })
  //
  it('execute default', async () => {
    const values = {
      type: 'default',
    }
    expect(items.default ({}, values)).toEqual({})
  })
})
