import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import ToDoList from "../components/ToDoList";
configure({ adapter: new Adapter() });

describe("ToDoList", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<ToDoList />);
    expect(component).toMatchSnapshot();
  });
});
