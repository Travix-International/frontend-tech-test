import React from "react";
import { mount } from "enzyme";
import { Drawer } from "./index";

describe("Drawer integration test", () => {
  it("should be closed by default", () => {
    const drawer = mount(<Drawer />);
    const root = drawer.find(".drawer");

    expect(root.hasClass("drawer_open")).toBeFalsy();
  });

  it("should render open when such prop is passed", () => {
    const drawer = mount(<Drawer open={true} />);
    const root = drawer.find(".drawer");

    expect(root.hasClass("drawer_open")).toBeTruthy();
  });

  it("should render just one button in the task creation mode", () => {
    const drawer = mount(<Drawer open={true} />);
    const root = drawer.find(".drawer");

    expect(root.find("Button")).toHaveLength(1);
  });

  it("should render two buttons in the task changin mode", () => {
    const drawer = mount(<Drawer task={1} open={true} />);
    const root = drawer.find(".drawer");

    expect(root.find("Button")).toHaveLength(2);
  });

  it("should be closed when submit button is clicked", () => {
    const drawer = mount(<Drawer open={true} />);
    const root = drawer.find(".drawer");
    const submit = drawer.find("Button");

    expect(root.hasClass("drawer_open")).toBeTruthy();

    submit.simulate("click");
    expect(root.update().hasClass("drawer_open")).toBeFalsy();
  });
});
