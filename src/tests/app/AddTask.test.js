import React from 'react';
import { shallow } from 'enzyme';
import { addEditComponentProps, addEditComponentPropsWithErrors } from './test.stub';
 import AddEditTask from '../../containers/app/AddEditTask';

describe('AddEditTask Component', () => {
    it('should render correctly', () => {
      const component = shallow(<AddEditTask  {...addEditComponentProps}/>);
      expect(component).toMatchSnapshot();
    });
     it('should render form', () => {
      const component = shallow(<AddEditTask  {...addEditComponentProps}/>);
      expect(component.find('form').length).toBe(1);
    });
    it('should render title input', () => {
      const component = shallow(<AddEditTask  {...addEditComponentProps}/>);
      expect(component.find('#title').length).toBe(1);
    });
    it('should render description input', () => {
      const component = shallow(<AddEditTask  {...addEditComponentProps}/>);
      expect(component.find('#description').length).toBe(1);
    });
    it('should render title errors', () => {
      const component = shallow(<AddEditTask {...addEditComponentPropsWithErrors}/>);
      expect(component.find('#titleError').length).toBe(1);
    });
    it('should render description errors', () => {
      const component = shallow(<AddEditTask {...addEditComponentPropsWithErrors}/>);
      expect(component.find('#descriptionError').length).toBe(1);
    });
   
});