import * as matchers from 'jest-immutable-matchers'
import { fromJS } from 'immutable'

import rootReducer, { clearReduxForm } from 'redux/reducer'

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

  it('should be able to clearReduxForm', () => {
    const initialState = fromJS({
      values: { test: 'hello' },
      fields: {
        test: { visited: true, touched: true } },
    })

    expect(clearReduxForm(initialState).get('values').size).toEqual(0)
    expect(clearReduxForm(initialState).getIn(['fields', 'test', 'touched'])).toEqual(false)
  })
})
