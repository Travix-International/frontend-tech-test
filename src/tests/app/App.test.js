import React from 'react';
import { shallow } from 'enzyme';
import App from '../../containers/app/App';
import TaskList from '../../containers/app/TasksList';

describe('App Component', () => {
    it('should render correctly in "debug" mode', () => {
      const component = shallow(<App debug />);
    
      expect(component).toMatchSnapshot();
    });
    it('should render nav', () => {
      const component = shallow(<App/>);
    
      expect(component.find('nav')).toBeTruthy();
    });
    it('should render header', () => {
      const component = shallow(<App/>);
      expect(component.find('nav').find('div').text('o Do Lis')).toBeTruthy();
    });
    it('should render TaskList Component', () => {
      const component = shallow(<App/>);
      expect(component.find(TaskList)).toMatchSnapshot();
    });
   
});