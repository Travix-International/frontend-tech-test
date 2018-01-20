import * as matchers from 'jest-immutable-matchers'

import rootReducer from 'redux/reducer'

describe('rootReducer', () => {
  beforeAll(() => {
    jest.addMatchers(matchers)
  })

  it('should return initial immutable state', () => {
    expect(rootReducer(undefined, {})).toBeImmutableMap()
  })

  it('should contain a form reducer', () => {
    expect(rootReducer(undefined, {}).toJS()).toHaveProperty('form')
  })
})
