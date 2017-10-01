import TasksFetcher from './TasksFetcher'

describe('TasksFetcher', () => {
  it('should fetch tasks', (done) => {
    const tasks = [1, 2, 3]
    const response = {
      json: () => {
        return Promise.resolve(tasks)
      }
    }
    const fetchApi = jest.fn(() => {
      return Promise.resolve(response)
    })
    const fetcher = new TasksFetcher(fetchApi)

    const result = fetcher.fetch()
    result.then((results) => {
      expect(results).toEqual(tasks)
      expect(fetchApi).toBeCalledWith('http://localhost:9001/tasks')
      done()
    })
  })
})
