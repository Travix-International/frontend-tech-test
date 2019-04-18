import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { expectSaga } from "redux-saga-test-plan";
import { call, put } from "redux-saga/effects";

import reducer, { RECEIVED } from "../services/redux/tasks";
import App from "./App";
import TaskForm from "./TaskForm";
import { TaskList } from "./TaskList";

const noop = () => {};

function* createTasksSaga(api) {
  const json = yield call(api.getTasks);
  yield put({
    type: RECEIVED,
    tasks: json.tasks,
  });
}

const expectedResult = {
  tasks: [{ id: "1", title: "__TITLE__", description: "__DESCRIPTION__" }],
};

const api = {
  getTasks: () => expectedResult,
};

/**
 * The test describes:
 * 1) integration test for the entire process of creating a todo task -
 *    from adding values to the form until it appears as a task component in DOM
 * 2) integration test for redux-saga
 */
describe("Integration tests", () => {
  test("entering a task in the form adds a task in the TaskList", () => {
    const mockStore = configureStore();
    const store = mockStore({ tasks: { loading: false, tasks: [] } });
    const createTaskSpy = jest.fn();

    const component = mount(
      <Provider store={store}>
        <App createTask={createTaskSpy} loading={false} />
      </Provider>
    );

    // Enter values into the form's fields
    const values = { title: "__TITLE__", description: "__DESCRIPTION__" };

    component.find(".input").simulate("change", {
      target: { name: "title", value: values.title },
    });
    component.find(".textarea").simulate("change", {
      target: { name: "description", value: values.description },
    });
    expect(component.find(TaskForm).state()).toEqual({
      ...values,
      validationError: "",
    });

    // onSubmit the form
    component
      .find("TaskForm")
      .instance()
      .onSubmit({ preventDefault: () => {} });
    expect(component.find("TaskForm").instance().state).toEqual({
      title: "",
      description: "",
      validationError: "",
    });

    // Integration test for redux-saga.
    // hasFinalState: checks/shows that expected result is in the redux's store
    return expectSaga(createTasksSaga, api)
      .withReducer(reducer, { tasks: [], loading: false })
      .provide([[call(api.getTasks), expectedResult]])
      .hasFinalState({
        ...expectedResult,
        loading: false,
      })
      .run()
      .then(() => {
        component.setProps({
          children: (
            <TaskList
              clearError={noop}
              deleteTask={noop}
              fetchTasks={noop}
              tasks={expectedResult.tasks}
              updateTask={noop}
            />
          ),
        });
        component.update();

        // And the new task is in the DOM with expected data
        expect(
          component
            .find(".task")
            .find(".title")
            .text()
        ).toEqual(values.title);
        expect(
          component
            .find(".task")
            .find(".description")
            .text()
        ).toEqual(values.description);
      });
  });
});
