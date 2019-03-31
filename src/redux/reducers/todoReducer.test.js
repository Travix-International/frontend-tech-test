import todoReducer from "./todoReducer";
import * as actions from "../actions/todoActions";


//Todo Reducer test

it("should add todoITem when passed CREATE_TODO_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "Item1",
      description : "Abc"
    },
    {
        title: "Item2",
      description : "Bsagd"
    }
  ];

  const newTodo = {
    title: "Item3",
      description : "Ctest "
  };

  const action = actions.createTodoSuccess(newTodo);

  // act
  const newState = todoReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("Item1");
  expect(newState[1].title).toEqual("Item2");
  expect(newState[2].title).toEqual("Item3");
});

it("Should Update TodoItem When Passed UPDATE_TODO_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "Buy Milk" },
    { id: 2, title: "Get to work" },
    { id: 3, title: "Go to GYM" }
  ];

  const todo = { id: 2, title: "New Title 123" };
  const action = actions.UpdateTodoSuccess(todo);

  // act
  const newState = todoReducer(initialState, action);
  const updatedtodo = newState.find(a => a.id == todo.id);
  const untouchedtodo = newState.find(a => a.id == 1);

  // assert
  expect(updatedtodo.title).toEqual("New Title 123");
  expect(untouchedtodo.title).toEqual("Buy Milk");
  expect(newState.length).toEqual(3);
});
