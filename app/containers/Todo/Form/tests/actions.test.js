import { actionTypes as at } from '../constants';

import {
  change,
  save,
  saveSuccess,
  saveError
} from '../actions';

describe('TodoForm Actions', () => {
  describe('change', () => {
    it('should return the correct type', () => {
      const value = 'value';
      const name = 'name';
      const expectedResult = {
        type: at.CHANGE,
        payload: { value, name }
      };

      expect(change({ value, name })).toEqual(expectedResult);
    });
  });

  describe('save', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: at.SAVE
      };

      expect(save()).toEqual(expectedResult);
    });
  });

  describe('saveSuccess', () => {
    it('should return the correct type', () => {
      const data = 'data';
      const expectedResult = {
        type: at.SAVE_SUCCESS,
        payload: { data }
      };

      expect(saveSuccess({ data })).toEqual(expectedResult);
    });
  });

  describe('saveError', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: at.SAVE_ERROR
      };

      expect(saveError()).toEqual(expectedResult);
    });
  });
});
