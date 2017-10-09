import React from "react";
import { Todo } from "./";
import { shallow, configure } from "enzyme";
import { expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Todo />", () => {
  it("It has title", () => {
    const mockTodo = {
      title: "test",
      description: "test"
    }
    const wrapper = shallow(<Todo todo={mockTodo} />);

    expect(wrapper.find(".o-todo__title")).to.have.length(1);
  });
})
