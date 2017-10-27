import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import TodoDeletePrompt from "../../src/components/common/TodoDeletePrompt";

// unit tests for the TodoDeletePrompt component
describe('TodoDeletePrompt component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {show: true, todo: {}, hideDelete: ()=>{}, todoDelete: ()=>{}};
      const wrapper = shallow(<TodoDeletePrompt {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
