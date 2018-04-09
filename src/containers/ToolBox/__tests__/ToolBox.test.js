import React from 'react';
import { shallow, mount } from 'enzyme';
import ToolBox from '../ToolBox';

describe('<ToolBox /> tests', () => {
  it('should render ToolBox with appropriate properties', () => {
    const onSearch = jest.fn();
    const onAddNewClicked = jest.fn();
    const wrapper = shallow(<ToolBox onAddNewClicked={onAddNewClicked} onSearch={onSearch} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call handlers on click', () => {
    const onSearch = jest.fn();
    const onAddNewClicked = jest.fn();
    const wrapper = mount(<ToolBox onAddNewClicked={onAddNewClicked} onSearch={onSearch} />);
    wrapper.find('button.ToolBox__searchButton').simulate('click');
    expect(onSearch).toHaveBeenCalled();
    wrapper.find('button.ToolBox__addNewBtn').simulate('click');
    expect(onAddNewClicked).toHaveBeenCalled();
    wrapper.unmount();
  });
});
