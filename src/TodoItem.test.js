import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import TodoItem from './components/TodoItem/ToDoItem';

configure({ adapter: new Adapter() });

describe('<TodoItem />', () => {
    it('loads items after GET_TASK_SUCCESS', () => {
        let tasks = [
            {
                id: 0,
                title: 'Example 1',
                description: 'Some desc 1'
            },
            {
                id: 1,
                title: 'Example 2',
                description: 'Some desc 2'
            }
        ];
        const wrapper = mount(<TodoItem />);
        wrapper.setProps({
            areTasksLoaded: true,
            tasks
        });
        expect(wrapper.find('ul li')).to.have.lengthOf(2);
      });
});