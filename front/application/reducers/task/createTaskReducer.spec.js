import { expect } from 'chai'
import { mock } from 'sinon'

import Task from 'application/entities/Task'
import createTaskReducer, { CREATE_TASK, createTask } from './createTaskReducer'

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

describe('Create Task Reducer Actions', () => {
  it('#createTask', () => {
    const title = '1'
    const description = '2'
    const task = { title, description }

    const apiService = mock()
      .withArgs('POST', `task/create/${title}/${description}`)
      .resolves(task)
    const dispatch = mock()
      .withArgs({ type: CREATE_TASK, task })

    return createTask(title, description, { apiService })(dispatch)
      .then(() => {
        apiService.verify()
        dispatch.verify()
      })
  })
})
