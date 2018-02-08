import { fromJS } from 'immutable';

import { key } from '../constants';
import {
  selectTodoStore,
  selectLoading,
  selectData
} from '../selectors';

describe('Todo Selectors', () => {
  describe('selectTodoStore', () => {
    it('should select the key state', () => {
      const state = fromJS({
        data: {},
      });
      const mockedState = fromJS({
        [key]: state
      });

      expect(selectTodoStore(mockedState)).toEqual(state);
    });
  });

  describe('selectLoading', () => {
    const selector = selectLoading();

    it('should select the loading', () => {
      const loading = 'loading';
      const mockedState = fromJS({
        [key]: {
          loading
        }
      });

      expect(selector(mockedState)).toEqual(loading);
    });
  });

  describe('selectData', () => {
    const selector = selectData();

    it('should select the data', () => {
      const data = {
        id: 'id'
      };
      const mockedState = fromJS({
        [key]: {
          data
        }
      });

      expect(selector(mockedState)).toEqual(data);
    });
  });
});
