import * as actions from '../actions/tasks.js';
import {
	PENDING,
	FETCH_ALL_SUCCESS,
 	CREATE_SUCCESS,
	UPDATE_SUCCESS,
	DELETE_SUCCESS
} from '../actions/actionTypes';


describe('tasks actions', () => {
  it('should create and action to GET all tasks', () => {
    const payload = [{title: 'sampleTitle', description: 'sampleDesc'}];

    const expectedAction = {
      type: FETCH_ALL_SUCCESS,
      payload
    }
    expect(actions.fetchAllSuccess(payload)).toEqual(expectedAction);
  });

	it('should create an action to CREATE a new task', () => {
    const payload = [{title: 'newTitle', description: 'newDesc'}];

    const expectedAction = {
      type: CREATE_SUCCESS,
      payload
    }
    expect(actions.createSuccess(payload)).toEqual(expectedAction);
  });

	it('should create an action to UPDATE task properties', () => {
    const payload = [{ id:0, title: 'updatedTitle', description: 'updatedDesc'}];

    const expectedAction = {
      type: UPDATE_SUCCESS,
      payload
    }
    expect(actions.updateSuccess(payload)).toEqual(expectedAction);
  });

	it('should create an action to  DELETE a task', () => {
    const payload = 0;

    const expectedAction = {
      type: DELETE_SUCCESS,
      payload
    }
    expect(actions.deleteSuccess(payload)).toEqual(expectedAction);
  });

	it('should create and action to sign PENDING state', () => {
    const expectedAction = {
      type: PENDING
    }
    expect(actions.requestStarted()).toEqual(expectedAction);
  });
});
