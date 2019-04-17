import { put, takeLatest } from "redux-saga/effects";

import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
  actionWatcher,
} from "./sagas";
import { FETCH, CREATE, UPDATE, RECEIVED, DELETE } from "./tasks";

const mockResponse = JSON.stringify({
  tasks: [{ id: "0", title: "__TITLE__", descriptiion: "__DESCRIPTION__" }],
});

describe("SAGAS", () => {
  it("should dispatch action 'FETCH', 'CREATE', 'UPDATE' and 'DELETE'", () => {
    const generator = actionWatcher();
    expect(generator.next().value).toEqual(takeLatest(FETCH, fetchTasks));
    expect(generator.next().value).toEqual(takeLatest(CREATE, createTask));
    expect(generator.next().value).toEqual(takeLatest(UPDATE, updateTask));
    expect(generator.next().value).toEqual(takeLatest(DELETE, deleteTask));
    expect(generator.next().done).toBeTruthy();
  });

  it("should dispatch action 'RECEIVED' with result from 'fetchTasks'  API", () => {
    const generator = fetchTasks();
    generator.next();

    expect(generator.next(mockResponse).value).toEqual(
      put({ type: RECEIVED, tasks: mockResponse.tasks })
    );
    expect(generator.next().done).toBeTruthy();
  });

  it("should dispatch action 'RECEIVED' with result from 'createTask'  API", () => {
    const generator = createTask({
      title: "__TITLE__",
      descriptiion: "__DESCRIPTION__",
    });
    generator.next();

    expect(generator.next(mockResponse).value).toEqual(
      put({ type: RECEIVED, tasks: mockResponse.tasks })
    );
    expect(generator.next().done).toBeTruthy();
  });

  it("should dispatch action 'RECEIVED' with result from 'updateTask'  API", () => {
    const newMockresponse = JSON.stringify({
      tasks: [
        { id: "0", title: "__TITLE__", descriptiion: "__NEW_DESCRIPTION__" },
      ],
    });
    const generator = updateTask({
      ...mockResponse,
      descriptiion: "__NEW_DESCRIPTION__",
    });
    generator.next();

    expect(generator.next(mockResponse).value).toEqual(
      put({ type: RECEIVED, tasks: newMockresponse.tasks })
    );
    expect(generator.next().done).toBeTruthy();
  });

  it("should dispatch action 'RECEIVED' with result from 'deleteTask'  API", () => {
    const generator = deleteTask({
      id: "1",
    });
    generator.next();

    expect(generator.next(mockResponse).value).toEqual(
      put({ type: RECEIVED, tasks: mockResponse.tasks })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
