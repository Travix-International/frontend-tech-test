import reducer from './Tasks'
import * as types from 'actions/Tasks'

const DEFAULT_STATE = {
  isFetching: true,
  tasks: []
};

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(DEFAULT_STATE, {})).toEqual(
      {isFetching: true, tasks: []}
    )
  })

  it('should handle CREATE_TASK', () => {
    expect(
      reducer(DEFAULT_STATE, {
        type: types.CREATE_TASK,
        payload: ''
      })
    ).toEqual(
      {"isFetching": false, "tasks": [""]}
    )
  })

  it('should handle TOGGLE_TASK', () => {
    expect(
      reducer([], {
        type: types.TOGGLE_TASK,
        payload: []
      })
    ).toEqual(
      {"isFetching": false, "tasks": []}
    )
  })

  it('should handle UPDATE_TASK', () => {
    expect(
      reducer([], {
        type: types.UPDATE_TASK,
        payload: []
      })
    ).toEqual(
      {"isFetching": false, "tasks": []}
    )
  })

  it('should handle DELETE_TASK', () => {
    expect(
      reducer([], {
        type: types.DELETE_TASK,
        payload: []
      })
    ).toEqual(
      {"isFetching": false, "tasks": []}
    )
  })

  it('should handle FETCH_TASKS', () => {
    expect(
      reducer([], {
        type: types.FETCH_TASKS,
        payload: { tasks: [] }
      })
    ).toEqual(
      {"isFetching": false, "tasks": []}
    )
  })
})
