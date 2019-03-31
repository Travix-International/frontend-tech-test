import { createStore } from "redux";
import rootReducer from "./reducers/index.js";
import initialState from "./reducers/initialState";
import * as todoActions from "./actions/todoActions";

// Integration test for testing the Store

it("Should handle creating todo", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const todooItem = {
    title: "Clean the room"
  };

  // act
  const action = todoActions.createTodoSuccess(todooItem);
  store.dispatch(action);

  // assert
  const createdTodo = store.getState().todoItems[0];
  expect(createdTodo).toEqual(todooItem);
  expect(createdTodo.title).toEqual(todooItem.title);
});
