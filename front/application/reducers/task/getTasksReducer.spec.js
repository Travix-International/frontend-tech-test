import { expect } from 'chai'
import { mock } from 'sinon'

import Task from 'application/entities/Task'
import getTasksReducer, { GET_TASKS, getTasks } from './getTasksReducer'

describe('Get Task Reducer', () => {
  it('Matchs the reducer', () => {
    const action = { type: GET_TASKS }
    const result = getTasksReducer.match(action)

    expect(result).to.equal(true)
  })

  it('Executes', () => {
    const state = { tasks: [] }
    const action = { tasks: [{ id: 1 }] }
    const result = getTasksReducer.execute(state, action)

    expect(result.tasks[0]).to.be.instanceOf(Task)
    expect(result.tasks[0].id).to.be.equal(1)
  })
})

describe('Get Tasks Reducer Actions', () => {
  it('#getTasks', () => {
    const tasks = { tasks: {} }

    const apiService = mock()
      .withArgs('GET', 'tasks')
      .resolves(tasks)
    const dispatch = mock()
      .withArgs({ type: GET_TASKS, ...tasks })

    return getTasks({ apiService })(dispatch)
      .then(() => {
        apiService.verify()
        dispatch.verify()
      })
  })
})
