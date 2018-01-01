import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './component';

const setup = () => {
    const todos = [
        { id: 0, title: 'title1', description: 'descr1' },
        { id: 1, title: 'title2', description: 'descr2' },
    ];
    const component = shallow(
        <TodoList todos={todos} />
    );

    return {
        component,
    };
};

describe('Todo list component', () => {
    it('should render todo list', () => {
        const { component } = setup();
        expect(component.children().length).toBe(2);
    });
});
