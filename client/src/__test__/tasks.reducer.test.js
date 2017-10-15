import reducer from '../reducers/tasks'
import * as action from '../actions/ActionTypes'

const initialState = { loading: false, tasks: []}

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CREATE', () => {
		const createState = { loading: false, tasks: [{
			id: 0,
			title: 'sampleTitle',
			description: 'sampleDesc'
		}]}
		const state = {
			tasks: []
		};

    expect(
      reducer(state, {
        type: action.CREATE_SUCCESS,
        payload: {
					title: 'sampleTitle',
					description: 'sampleDesc'
				}
      })
    ).toEqual(createState)
	})

	it('should handle DELETE', () => {
		const deleteState = { loading: false, tasks: []}

		const state = {
			tasks: [{
			id: 0,
			title: 'sampleTitle',
			description: 'sampleDesc'
		}]}

    expect(
      reducer(state, {
        type: action.DELETE_SUCCESS,
        payload: 0
      })
    ).toEqual(deleteState)
	})

	it('should handle UPDATE', () => {
		const updateState = { loading: false, tasks: [{
			id: 0,
			title: 'newTitle',
			description: 'newDesc'
		}]}

		const state = {
			tasks: [{
			id: 0,
			title: 'sampleTitle',
			description: 'sampleDesc'
		}]}

		const payload = {
			id: 0,
			title: 'newTitle',
			description: 'newDesc'
		}

    expect(
      reducer(state, {
        type: action.UPDATE_SUCCESS,
        payload
      })
    ).toEqual(updateState)
	})

	it('should handle GET', () => {
		const getState = { loading: false, tasks: [{
			id: 0,
			title: 'sampleTitle',
			description: 'sampleDesc'
		}, {
			id: 1,
			title: 'sampleTitle',
			description: 'sampleDesc'
		}]}

		const payload = [{
			id: 0,
			title: 'sampleTitle',
			description: 'sampleDesc'
		}, {
			id: 1,
			title: 'sampleTitle',
			description: 'sampleDesc'
		}];

		expect(
			reducer([], {
				type: action.FETCH_ALL_SUCCESS,
				payload
			})
		).toEqual(getState)
	})
})
