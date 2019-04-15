import reducer, {
  createTask,
  fetchTasks,
  updateTask,
  deleteTask,
  CREATE,
  FETCH,
  UPDATE,
  DELETE,
  RECEIVED,
  defaultState,
} from "./tasks";

describe("Actions", () => {
  it("tests createTask", () => {
    const expectedAction = {
      type: CREATE,
      title: "__TITLE__",
      description: "__DESCRIPTION__",
    };
    expect(
      createTask({ title: "__TITLE__", description: "__DESCRIPTION__" })
    ).toEqual(expectedAction);
  });

  it("tests fetchTasks", () => {
    const expectedAction = {
      type: FETCH,
    };
    expect(fetchTasks()).toEqual(expectedAction);
  });

  it("tests updateTask", () => {
    const expectedAction = {
      type: UPDATE,
      id: 2,
      title: "__TITLE__",
      description: "__DESCRIPTION__",
    };

    expect(
      updateTask({ id: 2, title: "__TITLE__", description: "__DESCRIPTION__" })
    ).toEqual(expectedAction);
  });

  it("tests deleteTask", () => {
    const expectedAction = {
      type: DELETE,
      id: 2,
    };

    expect(deleteTask({ id: 2 })).toEqual(expectedAction);
  });
});

describe("Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });
  it("should handle 'FETCH' action", () => {
    expect(reducer({}, { type: FETCH })).toEqual({ loading: true });
  });
  it("should handle 'RECEIVED' action", () => {
    const mockData = [
      {
        id: 0,
        title: "__TITLE__",
        description: "__DESCRIPTION__",
      },
    ];
    expect(reducer({}, { type: RECEIVED, tasks: mockData })).toEqual({
      tasks: mockData,
      loading: false,
    });
  });
});
