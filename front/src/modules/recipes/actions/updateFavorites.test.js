import { expect } from 'chai'
import {  mock } from 'sinon'

const { updateFavorites } = require('./updateFavorites')

describe('updateFavorites Action', () => {
  let state = {}
  beforeEach(() => {
    state = () => ({
      recipes: {
        recipes: {
          data: [
            {
              id: '123',
              favorites: 6,
              favorited: true
            },
            {
              id: '456',
              favorites: 2
            }
          ]
        }
      }
    })
  })

  it('execute without favorited', async () => {
    const id = '456'


    const stateFun = state()
    const returnData = stateFun.recipes.recipes.data.slice(0)
    returnData[1].favorites = 3
    returnData[1].favorited = true

    const dispatch = mock()
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'result/RECIPES_SUCCESS',
      payload: {
        data: returnData
      }
    }).returns(returnDispatch)
    expect(await updateFavorites(id)(dispatch, state)).to.be.deep.equal(returnDispatch)
    dispatch.verify()
  })

  it('execute with favorited', async () => {
    const id = '123'


    const stateFun = state()
    const returnData = stateFun.recipes.recipes.data.slice(0)
    returnData[0].favorites = 5
    returnData[0].favorited = false

    const dispatch = mock()
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'result/RECIPES_SUCCESS',
      payload: {
        data: returnData
      }
    }).returns(returnDispatch)
    expect(await updateFavorites(id)(dispatch, state)).to.be.deep.equal(returnDispatch)
    dispatch.verify()
  })

})
