import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import configureStore from "redux-mock-store";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import AddToDo from "../components/AddToDo";
configure({ adapter: new Adapter() });

describe("ToDoList", () => {
  const props = {
    addToDoItem: jest.fn()
  };
  it("should render correctly with no props", () => {
    const component = shallow(<AddToDo />);
    expect(component).toMatchSnapshot();
  });

  it("test delete button", () => {
    const wrapper = shallow(<AddToDo {...props} />);
    console.log(wrapper.debug());
    wrapper.find("btn btn-info btn-md").simulate("click");
    console.log(wrapper.debug());
  });
});
