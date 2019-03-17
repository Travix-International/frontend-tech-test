import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import Header from "../components/Header";
import AddToDo from "../components/AddToDo";
configure({ adapter: new Adapter() });

describe("Header", () => {
  // it("should render correctly with no props", () => {
  //   const component = shallow(<Header />);
  //   expect(component).toMatchSnapshot();
  // });

  it("test title props", () => {
    const wrap = shallow(<Header />);
    wrap.setProps({ headerTitle: "titleText" });
    expect(wrap.props("headerTitle")).toEqual("titleText");
  });
});
