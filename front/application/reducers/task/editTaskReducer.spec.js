import { expect } from 'chai'

import Task from 'application/entities/Task'
import editTaskReducer, { EDIT_TASK } from './editTaskReducer'

describe('Edit Task Reducer', () => {
  it('Matchs the reducer', () => {
    const action = { type: EDIT_TASK }
    const result = editTaskReducer.match(action)

    expect(result).to.equal(true)
  })

  it('Executes', () => {
    const state = { tasks: [{ id: 1, title: 'a' }] }
    const action = { task: { id: 1 , title: 'b'} }
    const result = editTaskReducer.execute(state, action)

    expect(result.tasks[0]).to.be.instanceOf(Task)
    expect(result.tasks[0].title).to.be.equal('b')
  })
})
