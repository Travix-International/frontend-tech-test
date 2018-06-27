import jest from 'jest-mock';

export default {
  get: jest.fn(() => Promise.resolve({ todos: {} }))
};