import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, mount } from "enzyme";
import Footer from "../components/Footer";
configure({ adapter: new Adapter() });

const props = {
  footerText: "footer text"
};

describe("Footer", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });

  it("test title props", () => {
    const wrapper = shallow(<Footer {...props} />);
    expect(
      wrapper.contains(<div className="text-center">footer text</div>)
    ).toEqual(true);
  });
});
