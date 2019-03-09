import { expect } from 'chai'
import {  mock } from 'sinon'

const { getRecipe } = require('./getRecipe')

describe('getRecipe Action', () => {
  let state = {}
  beforeEach(() => {
    state = () => ({
      recipes: {
        recipes: {
          data: [
            {
              id: '123',
            },
            {
              id: '456'
            }
          ]
        }
      }
    })
  })

  it('execute success', async () => {
    const id = '123'

    const dispatch = mock()
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'local/RECIPE_SUCCESS',
      payload: {
        data: {id}
      }
    }).returns(returnDispatch)
    expect(await getRecipe(id)(dispatch, state)).to.be.deep.equal(returnDispatch)
    dispatch.verify()
  })
  it('execute error', async () => {
    const id = '1'

    const dispatch = mock()
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'local/RECIPE_ERROR',
      payload: {
        error: 'Recipe not found!'
      }
    }).returns(returnDispatch)
    expect(await getRecipe(id)(dispatch, state)).to.be.deep.equal(returnDispatch)
    dispatch.verify()
  })
  it('execute clean', async () => {

    const dispatch = mock()
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'local/RECIPE_CLEAN',
      payload: {}
    }).returns(returnDispatch)
    expect(await getRecipe()(dispatch, state)).to.be.deep.equal(returnDispatch)
    dispatch.verify()
  })

})
