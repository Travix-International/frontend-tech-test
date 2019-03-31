import * as todoActions from "./todoActions";
import * as types from "./actionTypes";

const tasks = require("../../../tasks.json");


describe("createTodoSuccess", () => {
    it("should create a CREATE_TODO_SUCCESS action", () => {
      //arrange
      const todoItem = tasks[0];
      const expectedAction = {
        type: types.CREATE_TODO_SUCCESS,
        todoItem
      };
      //act
      const action = todoActions.createTodoSuccess(todoItem);
  
      //assert
      expect(action).toEqual(expectedAction);
    });
  });
  