import { expect } from 'chai'

import Task from 'application/entities/Task'
import createTaskReducer, { CREATE_TASK } from './createTaskReducer'

describe('Create Task Reducer', () => {
  it('Matchs the reducer', () => {
    const action = { type: CREATE_TASK }
    const result = createTaskReducer.match(action)

    expect(result).to.equal(true)
  })

  it('Executes', () => {
    const state = { tasks: [] }
    const action = { task: { id: 1 } }
    const result = createTaskReducer.execute(state, action)

    expect(result.tasks[0]).to.be.instanceOf(Task)
    expect(result.tasks[0].id).to.be.equal(1)
  })
})
