import React from "react";
import { shallow } from "enzyme";

import Counter from "./Counter";

describe("Counter", () => {
  it("renders", () => {
    const component = shallow(<Counter maxLength={10} valueLength={8} />);

    expect(component).toMatchSnapshot();
  });
});
