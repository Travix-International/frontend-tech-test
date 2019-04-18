import React from "react";
import { shallow } from "enzyme";

import TaskForm from "./TaskForm";

const noop = () => {};
const task = {
  title: "__TITLE__",
  description: "__DESCRIPTION__",
};

describe("TaskForm", () => {
  it("renders", () => {
    const component = shallow(
      <TaskForm
        headerName="Create Task"
        onSubmit={noop}
        onSubmitName="Create task"
        validate={noop}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("renders with initial values when the 'task' is passed in", () => {
    const component = shallow(
      <TaskForm
        headerName="Create Task"
        onSubmit={noop}
        onSubmitName="Create task"
        task={task}
      />
    );

    expect(component.state().title).toEqual(task.title);
    expect(component.state().description).toEqual(task.description);

    expect(component).toMatchSnapshot();
  });

  it("renders the error notification when the values are empty", () => {
    const component = shallow(
      <TaskForm
        headerName="Create Task"
        onSubmit={noop}
        onSubmitName="Create task"
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
        headerName="Create Task"
        onSubmit={onSubmitSpy}
        onSubmitName="Create task"
        task={task}
      />
    );

    component.instance().onSubmit({ preventDefault: () => {} });
    expect(onSubmitSpy).toHaveBeenCalledWith({
      title: task.title,
      description: task.description,
    });

    expect(component.state()).toEqual({
      title: "",
      description: "",
      validationError: "",
    });
  });
});
