// Utility to mock fetch responses
const mockResponse = (status, statusText, response) =>
  new window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json',
    },
  });

const asyncActionSetup = (metaMessage, dataResponse, statusCode = 200) =>
  jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve(mockResponse(
        statusCode,
        null,
        `{"meta":{"message":"${metaMessage}"},"data":${JSON.stringify(dataResponse)}}`,
      )));

export default {
  asyncActionSetup,
};
