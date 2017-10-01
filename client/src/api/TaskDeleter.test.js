import TaskDeleter from './TaskDeleter'

describe('TaskDeleter', () => {
  it('should delete task', (done) => {
    const response = true
    const fetchApi = jest.fn(() => {
      return Promise.resolve(response)
    })
    const deleter = new TaskDeleter(fetchApi)

    const result = deleter.delete({
      id: 1
    })
    result.then((result) => {
      expect(result).toEqual(true)
      expect(fetchApi).toBeCalledWith(
        'http://localhost:9001/task/delete/1',
        { method: 'DELETE' }
      )
      done()
    })
  })
})
