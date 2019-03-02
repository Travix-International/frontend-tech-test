import {  handleActions } from 'redux-actions';
import { EMPTY_OBJECT } from '../../constants';
import {TODO_ACTIONS} from './app.actions';

const INTIAL_STATE = {
    tasks: EMPTY_OBJECT,
    isAsync: false,
    totalCount: 0,
};

const todoReducer = {
    [TODO_ACTIONS.GET_TASKS_SUCCESS]: ((state = INTIAL_STATE, { tasks, totalCount }) => { 
      return {
        ...state,
        tasks: {...state.tasks, ...tasks},
        totalCount,
      };
    }), 
    [TODO_ACTIONS.CREATE_TASK_SUCCESS]: ((state = INTIAL_STATE, { tasks, totalCount }) => {
      return {
        ...state,
        tasks: {...state.tasks, ...tasks},
        totalCount,
      };
    }),
    [TODO_ACTIONS.EDIT_TASK_SUCCESS]: ((state = INTIAL_STATE, { tasks, totalCount }) => {
      return {
        ...state,
        tasks: {...state.tasks, ...tasks},
        totalCount,
      };
    }),
    [TODO_ACTIONS.DELETE_TASK_SUCCESS]: ((state = INTIAL_STATE, { tasks, totalCount }) => { 
      return {
        ...state,
        tasks: {...tasks},
        totalCount,
      };
    }),
    [TODO_ACTIONS.REQUESTING_API]: ((state = INTIAL_STATE, { payload }) => { 
      return {
        ...state,
        isAsync: payload,
      };
    }),
  };

export default handleActions(todoReducer, INTIAL_STATE);