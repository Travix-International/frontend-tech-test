import { lorem } from 'faker'
import { expect } from 'chai'
import { mock } from 'sinon'

import ReduceResolver from './ReduceResolver'

describe('Reduce Resolver', () => {
  it('Returns the state', () => {
    const defaultState = lorem.words()

    const output = ReduceResolver(defaultState, [])()

    expect(output).to.equal(defaultState)
  })

  it('Executes a resolver', () => {
    const defaultState = lorem.words()
    const state = lorem.words()
    const action = lorem.word()
    const result = lorem.word()

    const resolvers = [{
      match: mock().withExactArgs(action)
        .returns(true),
      execute: mock().withExactArgs(state, action)
        .returns(result)
    }]

    const output = ReduceResolver(defaultState, resolvers)(state, action)

    expect(output).to.equal(result)
  })
})
