import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import configureStore from "redux-mock-store";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import { AddToDo } from "../components/AddToDo";
configure({ adapter: new Adapter() });

describe("AddToDo", () => {
  const props = {
    addToDoItem: jest.fn()
  };

  const actions = {
    handleClick: jest.fn()
  };

  const handleChangeMock = jest.fn();

  it("should render correctly with no props", () => {
    const component = shallow(<AddToDo />);
    expect(component).toMatchSnapshot();
  });

  it("test add button", () => {
    const wrapper = shallow(<AddToDo {...props} />);
    const addButton = wrapper.find(".btn");
    expect(addButton).toBeTruthy();
  });

  it("test add button", () => {
    const wrapper = shallow(<AddToDo {...props} />);
    const addButton = wrapper.find(".btn");
    expect(addButton).toHaveLength(1);
  });

  it("test input state", () => {
    const wrapper = shallow(<AddToDo {...props} />);
    wrapper.setState({ inputValue: "input text" });
    expect(wrapper.state("inputValue")).toEqual("input text");
    expect("inputValue" in wrapper.state()).toEqual(true);
  });

  it("test title state", () => {
    const wrapper = shallow(<AddToDo />);
    wrapper.setState({ titleValue: "title text" });
    expect(wrapper.state("titleValue")).toEqual("title text");
    expect("titleValue" in wrapper.state()).toEqual(true);
  });

  it("if only title is entered and button is pressed", () => {
    const wrapper = shallow(<AddToDo {...props} />);
    wrapper.setState({ titleValue: "title text" });
    const addButton = wrapper.find(".btn");
    addButton.simulate("click");
    expect(wrapper.state("titleValue")).toEqual("");
  });

  it("if only text is entered and button is pressed", () => {
    const wrapper = shallow(<AddToDo {...props} />);
    wrapper.setState({ inputValue: "text" });
    const addButton = wrapper.find(".btn");
    addButton.simulate("click");
    expect(wrapper.state("inputValue")).toEqual("");
  });
});
