import React from "react";
import { shallow } from "enzyme";

import TaskForm from "./TaskForm";

const task = {
  id: 2,
  title: "__TITLE__",
  description: "__DESCRIPTION__",
};

describe("TaskForm", () => {
  it("renders", () => {
    const component = shallow(
      <TaskForm
        onSubmitName="Create task"
        headerName="Create Task"
        onSubmit={() => {}}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("renders with initial values when the 'task' is passed in", () => {
    const component = shallow(
      <TaskForm
        onSubmitName="Create task"
        headerName="Create Task"
        onSubmit={() => {}}
        task={task}
      />
    );

    expect(component.state().title).toEqual(task.title);
    expect(component.state().description).toEqual(task.description);

    expect(component).toMatchSnapshot();
  });

  it("renders the error notification when the values are empty", () => {
    const task = {
      id: 2,
      title: "",
      description: "",
    };
    const component = shallow(
      <TaskForm
        onSubmitName="Create task"
        headerName="Create Task"
        onSubmit={() => {}}
        task={task}
      />
    );

    component.instance().onSubmit({ preventDefault: () => {} });

    expect(component.state().validationError).not.toBeFalsy();
    expect(component).toMatchSnapshot();
  });

  it("triggers onSubmit prop function and clears the state", () => {
    const onSubmitSpy = jest.fn();
    const component = shallow(
      <TaskForm
        onSubmitName="Create task"
        headerName="Create Task"
        onSubmit={onSubmitSpy}
        task={task}
      />
    );

    component.instance().onSubmit({ preventDefault: () => {} });
    expect(onSubmitSpy).toHaveBeenCalledWith({
      title: task.title,
      description: task.description,
    });

    expect(component.state().title).toBe("");
    expect(component.state().description).toBe("");
    expect(component.state().validationError).toBe("");
  });
});
