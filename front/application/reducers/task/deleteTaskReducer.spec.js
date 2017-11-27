import { expect } from 'chai'

import deleteTaskReducer, { DELETE_TASK } from './deleteTaskReducer'

describe('Delete Task Reducer', () => {
  it('Matchs the reducer', () => {
    const action = { type: DELETE_TASK }
    const result = deleteTaskReducer.match(action)

    expect(result).to.equal(true)
  })

  it('Executes', () => {
    const state = { tasks: [{id: 1}] }
    const action = { task: { id: 1 } }
    const result = deleteTaskReducer.execute(state, action)

    expect(result.tasks).to.deep.equal([])
  })
})
