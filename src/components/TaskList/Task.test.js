import React from "react";
import { shallow } from "enzyme";

import Task from "./Task";

const noop = () => {};
const task = {
  id: "2",
  title: "__TITLE__",
  description: "__DESCRIPTION__",
};

describe("Task", () => {
  it("renders", () => {
    const component = shallow(
      <Task
        openEditModal={noop}
        clearError={noop}
        deleteTask={noop}
        task={task}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("triggers the 'deleteTask' and 'clearError'", () => {
    const deleteTaskSpy = jest.fn();
    const clearErrorSpy = jest.fn();
    const component = shallow(
      <Task
        openEditModal={noop}
        clearError={clearErrorSpy}
        deleteTask={deleteTaskSpy}
        task={task}
      />
    );

    component
      .find(".actions")
      .childAt(0)
      .simulate("click");
    expect(clearErrorSpy).toHaveBeenCalledTimes(1);
    expect(deleteTaskSpy).toHaveBeenCalledWith({ id: task.id });
  });

  it("tests the state when the 'openEditModal'", () => {
    const openEditModalSpy = jest.fn();
    const component = shallow(
      <Task
        openEditModal={openEditModalSpy}
        clearError={noop}
        deleteTask={noop}
        task={task}
      />
    );

    component
      .find(".actions")
      .childAt(1)
      .simulate("click");
    expect(openEditModalSpy).toHaveBeenCalledWith(task);
  });
});
