import { Reducer } from "redux";
import actionCreatorFactory, { ActionCreator } from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Todo, TodoListState, TodoListStateHandler as StateHandler } from "../../domain";

export interface InitPayload {
  todos: Todo[];
}
export interface UpdatePayload {
  todos: Todo[];
}

/* Actions */
const actionCreator = actionCreatorFactory("TodoListState");
const startLoading = actionCreator("startLoading");
const failed = actionCreator("failed");
const init: ActionCreator<InitPayload> = actionCreator("init");
const update: ActionCreator<UpdatePayload> = actionCreator("update");

export const actions = {
  startLoading,
  init,
  failed,
  update,
}


/* Reducer */

const defaultState = StateHandler.initialState();

export const reducer: Reducer<TodoListState> = reducerWithInitialState(defaultState)
  .case(startLoading, state => {
    return StateHandler.startLoading(state);
  })
  .case(init, (state, { todos }) => {
    return StateHandler.initialized(todos);
  })
  .case(failed, state => {
    return StateHandler.failed(state);
  })
  .case(update, (state, { todos }) => {
    return StateHandler.updated(todos);
  })
