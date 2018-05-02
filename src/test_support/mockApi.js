export const mockResponse = (status, response) => new window.Response(response, {
  status,
  headers: {
    'Content-type': 'application/json'
  }
})

export const getFetchMock = (status, response) => jest.fn().mockImplementation(() =>
    Promise.resolve(mockResponse(status, JSON.stringify(response))))
