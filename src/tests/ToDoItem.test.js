import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import { ToDoItem } from "../components/ToDoItem";
configure({ adapter: new Adapter() });

const task = {
  id: 2,
  title: "example title",
  description: "example description"
};

const actions = {
  deleteToDo: jest.fn(),
  editToDoItem: jest.fn(),
  handleDoubleClick: jest.fn()
};

describe("ToDoItem", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<ToDoItem {...actions} task={task} />);
    expect(component).toMatchSnapshot();
  });

  it("test toDoText state", () => {
    const wrap = shallow(<ToDoItem {...actions} task={task} />);
    wrap.setState({ toDoText: "someText" });
    expect(wrap.state("toDoText")).toEqual("someText");
    expect("toDoText" in wrap.state()).toEqual(true);
  });

  it("test toDoTitle state", () => {
    const wrap = shallow(<ToDoItem {...actions} task={task} />);
    wrap.setState({ toDoTitle: "titleTextTest" });
    expect(wrap.state("toDoTitle")).toEqual("titleTextTest");
    expect("toDoTitle" in wrap.state()).toEqual(true);
  });

  it("test toDoTitle state", () => {
    const wrapper = shallow(<ToDoItem {...actions} task={task} />);
    const deleteButton = wrapper.find(".btn-danger");
    deleteButton.simulate("click");
    expect(actions.deleteToDo).toBeCalled();
  });
});
