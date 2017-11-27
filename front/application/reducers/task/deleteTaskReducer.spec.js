import { expect } from 'chai'
import { mock } from 'sinon'

import deleteTaskReducer, { DELETE_TASK, deleteTask } from './deleteTaskReducer'

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

describe('Delete Task Reducer Actions', () => {
  it('#deleteTask', () => {
    const id = 1
    const task = { id }

    const apiService = mock()
      .withArgs('DELETE', `task/delete/${task.id}`)
      .resolves()
    const dispatch = mock()
      .withArgs({ type: DELETE_TASK, task })

    return deleteTask(task, { apiService })(dispatch)
      .then(() => {
        apiService.verify()
        dispatch.verify()
      })
  })
})
