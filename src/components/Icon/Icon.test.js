import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

describe("Icon", () => {
  it("renders", () => {
    const component = shallow(<Icon color="white" glyph="x" />);
    expect(component).toMatchSnapshot();
  });

  it("triggers onClick", () => {
    const onClickSpy = jest.fn();
    const component = shallow(
      <Icon color="white" glyph="x" onClick={onClickSpy} />
    );

    component.find(".Icon").simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });
});
