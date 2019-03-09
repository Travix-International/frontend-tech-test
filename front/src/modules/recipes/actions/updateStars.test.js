import { expect } from 'chai'
import {  mock } from 'sinon'

const { updateStars } = require('./updateStars')

describe('updateStars Action', () => {
  let state = {}
  beforeEach(() => {
    state = () => ({
      recipes: {
        recipes: {
          data: [
            {
              id: '123',
              rating: 1
            },
            {
              id: '456',
              rating: 2
            }
          ]
        }
      }
    })
  })

  it('execute success', async () => {
    const id = '123'
    const newValue = 5
    const stateFun = state()
    const returnData = stateFun.recipes.recipes.data.slice(0)
    returnData[0].rating = 5

    const dispatch = mock()
    const returnDispatch = 'returnDispatch'
    dispatch.withArgs({
      type: 'result/RECIPES_SUCCESS',
      payload: {
        data: returnData
      }
    }).returns(returnDispatch)
    expect(await updateStars(id, newValue)(dispatch, state)).to.be.deep.equal(returnDispatch)
    dispatch.verify()
  })

})
