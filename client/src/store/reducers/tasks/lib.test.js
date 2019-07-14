import lib, { mapTasksByID } from "./lib";
import { initialState } from "./index";

describe("Tasks reducer action handlers", () => {
  it("should return a map from the given list", () => {
    const tasks = [
      { id: 0, title: "first", description: "the first task" },
      { id: 1, title: "second", description: "the second task" },
    ];

    expect(mapTasksByID(tasks)).toEqual({
      0: { id: 0, done: false, title: "first", description: "the first task" },
      1: {
        id: 1,
        done: false,
        title: "second",
        description: "the second task",
      },
    });
  });

  it("should fulfill the state by tasks map", () => {
    const tasks = [
      { id: 0, title: "first", description: "" },
      { id: 1, title: "second", description: "" },
    ];

    const newState = lib.fulfillList(initialState, { payload: tasks });

    expect(Object.values(newState.tasks).length).toEqual(2);
    expect(newState).toEqual({
      filter: "undone",
      tasks: {
        0: { id: 0, done: false, title: "first", description: "" },
        1: {
          id: 1,
          done: false,
          title: "second",
          description: "",
        },
      },
    });
  });

  it("should change the task with given ID", () => {
    const state = initialState.set("tasks", {
      0: { id: 0, title: "test", done: false },
    });

    const newState = lib.changeTask(state, {
      payload: { id: 0, title: "test", done: true },
    });

    expect(Object.values(newState.tasks).length).toEqual(1);
    expect(newState).toEqual({
      filter: "undone",
      tasks: {
        0: {
          id: 0,
          title: "test",
          done: true,
        },
      },
    });
  });

  it("should remove the task by given ID", () => {
    const state = initialState.set("tasks", {
      0: { id: 0, title: "test", done: false },
    });

    const newState = lib.removeTask(state, {
      payload: { id: 0 },
    });

    expect(Object.values(newState.tasks).length).toEqual(0);
    expect(newState).toEqual({
      filter: "undone",
      tasks: {},
    });
  });

  it("should create the task", () => {
    const state = initialState.set("tasks", {
      0: { id: 0, title: "test", done: false },
    });

    const newState = lib.createTask(state, {
      payload: {
        id: 1,
        title: "new task",
        done: false,
      },
    });

    expect(Object.values(newState.tasks).length).toEqual(2);
    expect(newState.tasks[1]).toEqual({
      id: 1,
      title: "new task",
      done: false,
    });
  });

  it("should change the filter", () => {
    const newState = lib.changeFilter(initialState, { payload: "done" });
    expect(newState.filter).toEqual("done");
  });
});
