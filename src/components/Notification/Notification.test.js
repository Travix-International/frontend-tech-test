import React from "react";
import { shallow } from "enzyme";

import Notification from "./Notification";

describe("Notification", () => {
  it("renders", () => {
    const component = shallow(<Notification type="success" />);

    expect(component).toMatchSnapshot();
  });

  it("renders with children", () => {
    const component = shallow(
      <Notification type="success">
        <span>Some Text</span>
      </Notification>
    );

    expect(component).toMatchSnapshot();
  });

  it("renders with onDismiss Icon and triggers the onDismiss", () => {
    const onDismiss = () => {};
    const component = shallow(
      <Notification onDismiss={onDismiss} type="success">
        <span>Some Text</span>
      </Notification>
    );

    expect(component).toMatchSnapshot();
  });
});
