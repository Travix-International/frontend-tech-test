import axios from 'axios';
import apiService from '../apiService';

jest.mock('axios');

describe('apiService', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('api service methods', () => {
    describe('get', () => {
      test('should call axios axios through instance get req', () => {
        apiService.get('foo');
        expect(axios.get).toHaveBeenCalledWith('foo');
      });
    });
    describe('post', () => {
      test('should call axios through instance post req with data', () => {
        apiService.post('foo', { foo: 'bar' });
        expect(axios.post).toHaveBeenCalledWith('foo', { foo: 'bar' });
      });
    });
    describe('put', () => {
      test('should call axios through instance put req with data', () => {
        apiService.put('foo/1', { foo: 'bar' });
        expect(axios.put).toHaveBeenCalledWith('foo/1', { foo: 'bar' });
      });
    });

    describe('destroy', () => {
      test('should call axios destroy put req', () => {
        apiService.destroy('foo/1');
        expect(axios.delete).toHaveBeenCalledWith('foo/1');
      });
    });
  });
});
