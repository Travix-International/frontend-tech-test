import React from 'react';
import {Icon, Button} from 'antd'
import { shallow } from 'enzyme';
import {taskWithIsDeletedFalse, taskWithIsDeletedTrue} from './test.stub';
import Task from '../../containers/app/Task';
import styles from '../../containers/app/app.module.scss';

describe('Task Component', () => {
    it('should render', () => {
      const component = shallow(<Task task={taskWithIsDeletedFalse} />);
      expect(component).toBeTruthy();
    });
    it('should render Task Icon', () => {
        const component = shallow(<Task task={taskWithIsDeletedFalse} />);
        expect(component.find(Icon).length).toBe(1);
    });
    it('should render Task Title', () => {
        const component = shallow(<Task task={taskWithIsDeletedFalse} />);
        expect(component.find('span#title').length).toBe(1);
    });

    it('should render Task Description', () => {
        const component = shallow(<Task task={taskWithIsDeletedFalse} />);
        expect(component.find('span#description').length).toBe(1);
    });

    it('should render Edit and Delete Task Icon', () => {
        const component = shallow(<Task task={taskWithIsDeletedFalse} />);
        expect(component.find(Button).length).toBe(2)
    });
    it('should render Done Task Icon', () => {
        const component = shallow(<Task task={taskWithIsDeletedTrue} />);
        expect(component.find(Button).length).toBe(1);
    });

    it('should render Task when task is taskWithIsDeletedTrue', () => {
        const component = shallow(<Task task={taskWithIsDeletedTrue} />);
        expect(component.find('strike').length).toBe(1);
    });
});