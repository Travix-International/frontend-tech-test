import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import ToDoItem from "../components/ToDoItem";
configure({ adapter: new Adapter() });

describe("ToDoItem", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<ToDoItem />);
    expect(component).toMatchSnapshot();
  });

  it("test toDoText state", () => {
    const wrap = shallow(<ToDoItem />);
    wrap.setState({ toDoText: "someText" });
    expect(wrap.state("toDoText")).toEqual("someText");
    expect("toDoText" in wrap.state()).toEqual(true);
  });

  it("test toDoTitle state", () => {
    const wrap = shallow(<ToDoItem />);
    wrap.setState({ toDoTitle: "titleTextTest" });
    expect(wrap.state("toDoTitle")).toEqual("titleTextTest");
    expect("toDoTitle" in wrap.state()).toEqual(true);
  });
});
