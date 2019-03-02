import React from 'react';
import { shallow } from 'enzyme';
import {Button, Modal} from 'antd';
import ReactProgressiveList from 'react-progressive-list';
import sinon from 'sinon';
import {tasks} from './test.stub';
import {TasksList} from '../../containers/app/TasksList';
import styles from '../../containers/app/app.module.scss';
const mockFunction = jest.fn();
describe('TaskList Component', () => {
    it('should render Add Button', () => {
      const component = shallow(<TasksList getTasks={mockFunction}/>);
      expect(component.find(Button)).toBeTruthy();
    });
    it('should render ReactProgressiveList', () => {
        const component = shallow(<TasksList getTasks={mockFunction} tasks={tasks}/>);
        expect(component.find(ReactProgressiveList).length).toBe(1);
    });  
    it('should render "No Task Found" If  no task is present', () => {
        const component = shallow(<TasksList getTasks={mockFunction} tasks={[]}/>);
        expect(component.find('#noTask').length).toBe(1);
    });  
    it('should render Modal showModal is true', () => {
        const component = shallow(<TasksList getTasks={mockFunction} tasks={tasks}/>);
        component.setState({showAddNew: true})
        expect(component.find(Modal).length).toBe(1);
    }); 

});