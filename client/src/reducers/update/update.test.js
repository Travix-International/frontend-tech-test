import { initialState, update } from '.';
import actionTypes from '../../constants/actionTypes';
import mockServer from '../../constants/mockServer';

describe ('Update reducer', () => {
  it ('should return initial state by default', () => {
    expect (update (undefined, {})).toEqual (initialState);
  });

  it ('should handle UPDATE_START action', () => {
    const startAction = {
      type: actionTypes.TASK.UPDATE_TASK.UPDATE_START,
      id: mockServer.updateRequestId,
      task: mockServer.updateRequest
    }

    const expectedState = {
      ...initialState,
      isUpdating: true,
      id: mockServer.updateRequestId
    };

    expect (update (undefined, startAction)).toEqual (expectedState);
  });

  it ('should handle UPDATE_SUCCESS action', () => {
    const startAction = {
      type: actionTypes.TASK.UPDATE_TASK.UPDATE_SUCCESS,
      task: mockServer.sampleTask.task
    }

    const expectedState = {
      ...initialState,
      isUpdating: true,
      id: mockServer.updateRequestId
    };

    // expect (update (undefined, startAction)).toEqual (expectedState);
  });

  it ('should handle UPDATE_FAILED action', () => {

  });
})