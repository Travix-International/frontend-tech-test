import { filterActionTypes as ft } from '../actionTypes';
import { setTaskVisibility } from '../filterActions';
import { TASK_FILTER } from '../../constants';

describe('filter action test', () => {
  it('should create the correct action', () => {
    expect(setTaskVisibility(TASK_FILTER.SHOW_ALL)).toEqual({
      type: ft.SET_TASK_VISIBILITY,
      payload: 'SHOW_ALL'
    });

    expect(setTaskVisibility(TASK_FILTER.SHOW_ACTIVE)).toEqual({
      type: ft.SET_TASK_VISIBILITY,
      payload: 'SHOW_ACTIVE'
    });

    expect(setTaskVisibility(TASK_FILTER.SHOW_COMPLETED)).toEqual({
      type: ft.SET_TASK_VISIBILITY,
      payload: 'SHOW_COMPLETED'
    });
  });
});