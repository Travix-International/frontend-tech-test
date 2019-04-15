import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

describe("Icon", () => {
  it("renders", () => {
    const component = shallow(<Icon glyph="x" color="white" />);
    expect(component).toMatchSnapshot();
  });

  it("triggers onClick", () => {
    const onClickSpy = jest.fn();
    const component = shallow(
      <Icon glyph="x" color="white" onClick={onClickSpy} />
    );

    component.find(".Icon").simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });
});
