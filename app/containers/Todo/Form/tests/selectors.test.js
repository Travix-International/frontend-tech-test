import { fromJS } from 'immutable';

import { key } from '../constants';
import {
  selectTodoFormStore,
  selectLoading,
  selectTitle,
  selectDescription
} from '../selectors';

describe('Todo Selectors', () => {
  describe('selectTodoFormStore', () => {
    it('should select the key state', () => {
      const state = fromJS({
        data: {},
      });
      const mockedState = fromJS({
        [key]: state
      });

      expect(selectTodoFormStore(mockedState)).toEqual(state);
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

  describe('selectTitle', () => {
    const selector = selectTitle();

    it('should select the title', () => {
      const title = 'title';
      const mockedState = fromJS({
        [key]: {
          title
        }
      });

      expect(selector(mockedState)).toEqual(title);
    });
  });

  describe('selectDescription', () => {
    const selector = selectDescription();

    it('should select the description', () => {
      const description = 'description';
      const mockedState = fromJS({
        [key]: {
          description
        }
      });

      expect(selector(mockedState)).toEqual(description);
    });
  });
});
