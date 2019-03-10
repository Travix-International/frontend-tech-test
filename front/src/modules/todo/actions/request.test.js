import { expect } from 'chai'
import { stub } from 'sinon'

// const { getRecipes } = require('./request')

describe('Request Action', () => {
  it('execute success', async () => {
    // const URL_WINNER = 'https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json'
    // const returnRequest = {
    //   data: [{"id": 1}]
    // }
    //
    // const get = stub()
    // get.withArgs(URL_WINNER).resolves(returnRequest)
    //
    // const axios = {
    //   get
    // }
    //
    // const dispatch = stub()
    // dispatch.withArgs({
    //   type: 'result/RECIPES_LOADING',
    //   payload: {}
    // })
    // const returnDispatch = 'returnDispatch'
    // dispatch.withArgs({
    //   type: 'result/RECIPES_SUCCESS',
    //   payload: {
    //     data: [{id: 1}]
    //   }
    // }).returns(returnDispatch)
    // expect(await getRecipes({axios})(dispatch)).to.be.deep.equal(returnDispatch)
  })

  it('execute error', async () => {
    // const URL_WINNER = 'https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json'
    //
    //
    // const get = stub()
    // get.withArgs(URL_WINNER).throws({name: 'Error get'})
    //
    // const axios = {
    //   get
    // }
    //
    // const dispatch = stub()
    // dispatch.withArgs({
    //   type: 'result/RECIPES_LOADING',
    //   payload: {}
    // })
    // const returnError = 'return error'
    // dispatch.withArgs({
    //   type: 'REQ_RECIPES_ERROR',
    //   payload: {
    //     data: 'Error get'
    //   }
    // }).returns(returnError)
    // await getRecipes({axios})(dispatch)
  })
})
