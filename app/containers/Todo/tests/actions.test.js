import { actionTypes as at } from '../constants';

import {
  fetch,
  fetchSuccess,
  fetchError,
  update,
  updateSuccess,
  updateError,
  remove,
  removeSuccess,
  removeError
} from '../actions';

describe('Todo Actions', () => {
  describe('fetch', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: at.FETCH
      };

      expect(fetch()).toEqual(expectedResult);
    });
  });

  describe('fetchSuccess', () => {
    it('should return the correct type', () => {
      const data = 'data';
      const expectedResult = {
        type: at.FETCH_SUCCESS,
        payload: { data }
      };

      expect(fetchSuccess({ data })).toEqual(expectedResult);
    });
  });

  describe('fetchError', () => {
    it('should return the correct type', () => {
      const error = 'error';
      const expectedResult = {
        type: at.FETCH_ERROR,
        payload: { error }
      };

      expect(fetchError({ error })).toEqual(expectedResult);
    });
  });

  describe('update', () => {
    it('should return the correct type', () => {
      const id = 'id';
      const description = 'description';
      const title = 'title';
      const index = 'index';
      const expectedResult = {
        type: at.UPDATE,
        payload: {
          id,
          description,
          title,
          index
        }
      };

      expect(update({ id, description, title, index })).toEqual(expectedResult);
    });
  });

  describe('updateSuccess', () => {
    it('should return the correct type', () => {
      const data = 'data';
      const index = 'index';
      const expectedResult = {
        type: at.UPDATE_SUCCESS,
        payload: { data, index }
      };

      expect(updateSuccess({ data, index })).toEqual(expectedResult);
    });
  });

  describe('updateError', () => {
    it('should return the correct type', () => {
      const id = 'id';
      const index = 'index';
      const expectedResult = {
        type: at.UPDATE_ERROR,
        payload: { id, index }
      };

      expect(updateError({ id, index })).toEqual(expectedResult);
    });
  });

  describe('remove', () => {
    it('should return the correct type', () => {
      const id = 'id';
      const index = 'index';
      const expectedResult = {
        type: at.REMOVE,
        payload: { id, index }
      };

      expect(remove({ id, index })).toEqual(expectedResult);
    });
  });

  describe('removeSuccess', () => {
    it('should return the correct type', () => {
      const data = 'data';
      const index = 'index';
      const expectedResult = {
        type: at.REMOVE_SUCCESS,
        payload: { data, index }
      };

      expect(removeSuccess({ data, index })).toEqual(expectedResult);
    });
  });

  describe('removeError', () => {
    it('should return the correct type', () => {
      const id = 'id';
      const index = 'index';
      const expectedResult = {
        type: at.REMOVE_ERROR,
        payload: { id, index }
      };

      expect(removeError({ id, index })).toEqual(expectedResult);
    });
  });
});
