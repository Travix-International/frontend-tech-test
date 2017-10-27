import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import TodoListElement from "../../src/components/common/TodoListElement";

// unit tests for the TodoListElement component
describe('TodoListElement component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {todo: {}, showDelete: ()=>{}};
      const wrapper = shallow(<TodoListElement {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
