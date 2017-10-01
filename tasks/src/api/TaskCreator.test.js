import TaskCreator from './TaskCreator'

describe('TaskCreator', () => {
  it('should fetch tasks', (done) => {
    const response = {
      json: () => {
        return Promise.resolve(true)
      }
    }
    const fetchApi = jest.fn(() => {
      return Promise.resolve(response)
    })
    const creator = new TaskCreator(fetchApi)

    const result = creator.create({
      id: 1,
      title: 'Fresh',
      description: 'Brand-new'
    })
    result.then((result) => {
      expect(result).toEqual(true)
      expect(fetchApi).toBeCalledWith(
        'http://localhost:9001/task/create/Fresh/Brand-new',
        { method: 'POST' }
      )
      done()
    })
  })
})
