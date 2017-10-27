import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { TodoList } from "../../src/components/common/TodoList";

// unit tests for the TodoList component
describe('TodoList component', () => {
  describe('render()', () => {
    it('should render the progressbar', () => {
      const props = {todos: [], actions: {}};
      const wrapper = shallow(<TodoList {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
