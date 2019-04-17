import React from "react";
import { shallow } from "enzyme";

import TaskModal from "./TaskModal";

const noop = () => {};

describe("TaskModal", () => {
  it("renders", () => {
    const component = shallow(
      <TaskModal editTask={noop} isOpen onClose={noop} />
    );
    expect(component).toMatchSnapshot();
  });
});
