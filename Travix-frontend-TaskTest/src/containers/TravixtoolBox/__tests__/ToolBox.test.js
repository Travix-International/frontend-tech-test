import React from 'react';
import { shallow, mount } from 'enzyme';
import TravixtoolBox from '../TravixtoolBox';

describe('<TravixtoolBox /> tests', () => {
  it('should render ToolBox with appropriate properties', () => {
    const onSearch = jest.fn();
    const onAddNewClicked = jest.fn();
    const wrapper = shallow(<TravixtoolBox addNewClick={onAddNewClicked} searchClick={onSearch} />);
    expect(wrapper.exists()).toBe(true);
  });

  /*it('should call handlers on click', () => {
    const onSearch = jest.fn();
    const onAddNewClicked = jest.fn();
    const wrapper = mount(<TravixtoolBox addNewClick={onAddNewClicked} searchClick={onSearch} />);
    wrapper.find('.addNewBtnWrapper').dive().find('.searchButton').at(2).simulate('click');
    wrapper.find('Button.searchButton').simulate('click');
    expect(searchforTask).toHaveBeenCalled();
    wrapper.find('.mg-lft').simulate('click');
    expect(addNewClick).toHaveBeenCalled();
    wrapper.unmount();
  }); */
});
