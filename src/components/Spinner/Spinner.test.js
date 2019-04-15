import React from "react";
import { shallow } from "enzyme";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders", () => {
    const component = shallow(<Spinner />);

    expect(component).toMatchSnapshot();
  });
});
