import React from "react";
import { getSuccessType } from "redux-async-epic";
import { mount } from "enzyme";
import { getStore } from "store";
import { Provider } from "react-redux";
import TasksList from "./index";

describe("TasksList integration test", () => {
  let store, root;

  beforeEach(() => {
    store = getStore();
    root = mount(
      <Provider store={store}>
        <TasksList />
      </Provider>
    );
  });

  it("should render an empty list", () => {
    expect(root.find(".tasks-list__item")).toHaveLength(0);
  });

  it("should render a one task item", () => {
    store.dispatch({
      type: getSuccessType("tasks/fetch-list"),
      payload: [{ id: 0, title: "test" }],
    });

    expect(root.update().find(".tasks-list__item")).toHaveLength(1);
  });

  it("should filter tasks and show only those are done", () => {
    store.dispatch({
      type: getSuccessType("tasks/fetch-list"),
      payload: [
        { id: 0, title: "test" },
        { id: 1, title: "done test" },
        { id: 2, title: "third test" },
      ],
    });

    expect(root.update().find(".tasks-list__item")).toHaveLength(3);

    store.dispatch({
      type: getSuccessType("tasks/change"),
      payload: { id: 1, title: "done test", done: true },
    });

    expect(root.update().find(".tasks-list__item")).toHaveLength(2);

    const fab = root.find("Fab").at(0);
    fab.simulate("click");

    expect(root.update().find(".tasks-list__item")).toHaveLength(1);
  });

  it("should open the Drawer to change the task", () => {
    store.dispatch({
      type: getSuccessType("tasks/fetch-list"),
      payload: [{ id: 0, title: "test" }],
    });

    const taskItem = root.update().find(".tasks-list__item");
    expect(taskItem).toHaveLength(1);

    taskItem.simulate("click");

    const Drawer = root.update().find("Drawer");
    expect(Drawer.find(".drawer_open")).toHaveLength(1);
    expect(Drawer.find(".form__header").text()).toEqual("Change the task");
  });

  it("should open the Drawer while creating a new task", () => {
    const fab = root.find("Fab").find({ primary: true });

    fab.simulate("click");

    const Drawer = root.update().find("Drawer");
    expect(Drawer.find(".drawer_open")).toHaveLength(1);
    expect(Drawer.find(".form__header").text()).toEqual("Create a task");
  });
});
