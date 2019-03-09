import { expect } from 'chai'

const recipe = require('./recipe')

describe('Recipe Reducer', () => {
  it('execute success', () => {
    const values = {
      type: 'local/RECIPE_SUCCESS',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      data: values.payload.data,
      error: null
    }
    expect(recipe.default (undefined, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute error', async () => {
    const values = {
      type: 'local/RECIPE_ERROR',
      payload: {
        data: ['1','2']
      }
    }

    const valuesReturn = {
      error: values.payload.data,
    }
    expect(recipe.default (null, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute loading', async () => {
    const values = {
      type: 'local/RECIPE_CLEAN'
    }

    const valuesReturn = {
      error: null,
      data: []
    }
    expect(recipe.default (null, values)).to.be.deep.equal(valuesReturn)
  })

  it('execute default', async () => {
    const values = {
      type: 'default',
    }
    expect(recipe.default ({}, values)).to.be.deep.equal({})
  })
})
