import React from 'react';
import { shallow } from 'enzyme';
import { ListTasksContainer } from '../ListTasksContainer';

describe('ListTasksContainer', () => {
  let defaultProps;
  let wrapper;
  let listTasksSpy;

  beforeEach(() => {
    listTasksSpy = jest.fn();
    defaultProps = {
      actions: { listTasks: listTasksSpy },
      tasks: [{ foo: 'bar' }],
    };
    wrapper = shallow(<ListTasksContainer {...defaultProps} />);
  });
  describe('componentDidMount', () => {
    test('should load tasks data', () => {
      wrapper.instance().componentDidMount();

      expect(listTasksSpy).toHaveBeenCalled();
    });
  });
  describe('render', () => {
    let component;

    beforeEach(() => {
      wrapper = shallow(<ListTasksContainer {... defaultProps} />);
      component = wrapper.find('ListTasksComponent');
    });
    test('should render component with props', () => {
      expect(component.exists()).toBe(true);
      expect(component.props().tasks).toEqual([{ foo: 'bar' }]);
    });
  });
});
