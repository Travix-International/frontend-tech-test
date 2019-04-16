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
        updateTask={noop}
        fetchTasks={noop}
        clearError={noop}
        deleteTask={noop}
        tasks={tasks}
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
        updateTask={updateTaskSpy}
        fetchTasks={fetchTasksSpy}
        clearError={noop}
        deleteTask={noop}
        tasks={tasks}
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
        updateTask={noop}
        fetchTasks={noop}
        clearError={noop}
        deleteTask={noop}
        tasks={tasks}
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
