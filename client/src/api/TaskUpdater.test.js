import TaskUpdater from './TaskUpdater'

describe('TaskUpdater', () => {
  it('should update task', (done) => {
    const response = true
    const fetchApi = jest.fn(() => {
      return Promise.resolve(response)
    })
    const updater = new TaskUpdater(fetchApi)

    const result = updater.update({
      id: 1,
      title: 'Fresh',
      description: 'Brand-new'
    })
    result.then((result) => {
      expect(result).toEqual(true)
      expect(fetchApi).toBeCalledWith(
        'http://localhost:9001/task/update/1/Fresh/Brand-new',
        { method: 'PUT' }
      )
      done()
    })
  })
})
