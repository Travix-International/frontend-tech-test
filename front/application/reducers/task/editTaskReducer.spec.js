import { expect } from 'chai'
import { mock } from 'sinon'

import Task from 'application/entities/Task'
import editTaskReducer, { EDIT_TASK, editTask } from './editTaskReducer'

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

describe('Edit Task Reducer Actions', () => {
  it('#editTask', () => {
    const id = 1
    const title = '2'
    const description = '3'
    const task = { id, title, description }

    const apiService = mock()
      .withArgs('PUT', `task/update/${id}/${title}/${description}`)
      .resolves()
    const dispatch = mock()
      .withArgs({ type: EDIT_TASK, task })

    return editTask(id, title, description, { apiService })(dispatch)
      .then(() => {
        apiService.verify()
        dispatch.verify()
      })
  })
})
