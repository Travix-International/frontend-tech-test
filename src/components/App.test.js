import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";

const noop = () => {};

describe("App", () => {
  it("renders", () => {
    const component = shallow(<App createTask={noop} loading={false} />);
    expect(component).toMatchSnapshot();
  });

  it("tests the 'createTask'", () => {
    const createTaskSpy = jest.fn();
    const values = { title: "__TITLE__", description: "__DESCRIPTION__" };
    const component = shallow(
      <App createTask={createTaskSpy} loading={true} />
    );

    component.instance().createTask(values);
    expect(createTaskSpy).toHaveBeenCalledWith(values);
    expect(component.state().loading).toBe(true);
  });

  it("tests the 'componentDidUpdate'", () => {
    const createTaskSpy = jest.fn();
    const component = shallow(<App createTask={createTaskSpy} />);

    component.state().loading = true;
    component.setProps({ loading: false });
    expect(component.state().loading).toBe(false);
  });
});
