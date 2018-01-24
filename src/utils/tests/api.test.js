import {
  loadTasks,
} from 'utils/api'

describe('api', () => {
  const tasks = [{}, {}, {}]

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const promise = new Promise((resolve) => {
        resolve({
          json: () => (tasks),
        })
      })

      return promise
    })
  })

  it('loadTasks', async () => {
    const response = await loadTasks()

    expect(response.length).toEqual(3)
  })
})
