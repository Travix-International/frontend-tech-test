import React from "react";
import { shallow } from "enzyme";

import { TaskList } from "./TaskList";

const noop = () => {};
const tasks = [
  {
    id: "2",
    title: "__TITLE__",
    description: "__DESCRIPTION__",
  },
];

describe("TaskList", () => {
  it("renders", () => {
    const component = shallow(
      <TaskList
        clearError={noop}
        deleteTask={noop}
        fetchTasks={noop}
        tasks={tasks}
        updateTask={noop}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("triggers the 'updateTask' and 'fetchTasks'", () => {
    const updateTaskSpy = jest.fn();
    const fetchTasksSpy = jest.fn();
    const values = {
      title: "__SOME_TITLE__",
      description: "__SOME_DESCRIPTION__",
    };
    const component = shallow(
      <TaskList
        clearError={noop}
        deleteTask={noop}
        fetchTasks={fetchTasksSpy}
        tasks={tasks}
        updateTask={updateTaskSpy}
      />
    );

    // check 'fetchTasks'
    expect(fetchTasksSpy).toHaveBeenCalledTimes(1);

    // check 'updateTask'
    component.instance().openEditModal(tasks[0]);
    const taskId = component.state().task.id;
    component.instance().editTask(values);
    expect(updateTaskSpy).toHaveBeenCalledWith({ ...values, id: taskId });
  });

  it("tests the state when the 'openEditModal' and 'closeModal' are triggered", () => {
    const component = shallow(
      <TaskList
        clearError={noop}
        deleteTask={noop}
        fetchTasks={noop}
        tasks={tasks}
        updateTask={noop}
      />
    );

    component.instance().openEditModal(tasks[0]);

    expect(component.state().task).toEqual(tasks[0]);
    expect(component.state().showModal).toBe(true);

    component.instance().closeModal(tasks[0]);

    expect(component.state().task).toBeNull();
    expect(component.state().showModal).toBe(false);
  });
});
