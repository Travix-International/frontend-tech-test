import * as matchers from 'jest-immutable-matchers'
import { fromJS } from 'immutable'

import { ADD_TODO } from 'redux/ducks/todos'
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
        test: { visited: true, touched: true },
      },
    })

    expect(clearReduxForm(initialState).get('values').size).toEqual(0)
    expect(clearReduxForm(initialState).getIn(['fields', 'test', 'touched'])).toEqual(false)
  })

  it('addTodo reducer should clearReduxForm on ADD_TODO.SUCCESS', () => {
    const initialState = fromJS({
      form: {
        addTodo: {
          values: { test: 'hello' },
          fields: {
            test: { visited: true, touched: true },
          },
        },
      },
      resources: {},
    })

    expect(rootReducer(initialState, { type: ADD_TODO.SUCCESS }).getIn(['form', 'addTodo', 'values']).size).toEqual(0)
    expect(rootReducer(initialState, { type: ADD_TODO.SUCCESS }).getIn(['form', 'addTodo', 'fields', 'test', 'touched'])).toEqual(false)
  })
})
