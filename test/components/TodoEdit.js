import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { TodoEdit } from "../../src/components/TodoEdit";

// unit tests for the TodoEdit component
describe('TodoEdit component', () => {
  describe('render()', () => {
    it('should render the add todo form', () => {
      const props = {todo: {}, handleSubmit: ()=>{}, actions: {}, invalid: true, submitting: false};
      const wrapper = shallow(<TodoEdit {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
