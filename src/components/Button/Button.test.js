import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  it("renders", () => {
    const component = shallow(<Button>Name</Button>);
    expect(component).toMatchSnapshot();
  });

  it("renders in a loading mode", () => {
    const component = shallow(<Button loading={true}>Name</Button>);
    expect(component).toMatchSnapshot();
  });

  it("triggers onClick", () => {
    const onClickSpy = jest.fn();
    const component = shallow(<Button onClick={onClickSpy}>Name</Button>);

    component.find("button.Button").simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });
});
