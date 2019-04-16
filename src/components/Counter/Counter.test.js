import React from "react";
import { shallow } from "enzyme";

import Counter from "./Counter";

describe("Counter", () => {
  it("renders", () => {
    const component = shallow(<Counter valueLength={8} maxLength={10} />);

    expect(component).toMatchSnapshot();
  });
});
