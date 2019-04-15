import React from "react";
import { shallow } from "enzyme";

import TaskModal from "./TaskModal";

const noop = () => {};

describe("TaskModal", () => {
  it("renders", () => {
    const component = shallow(
      <TaskModal isOpen={true} onClose={noop} editTask={noop} />
    );
    expect(component).toMatchSnapshot();
  });
});
