import React from 'react';
import { render, shallow } from 'enzyme';
import TodoList from '.';

const mockTodos = [{
    id: 0,
    title: 'Task 1',
    description: 'description 1...',
    done: false,
}, {
    id: 1,
    title: 'Task 2',
    description: 'description 2...',
    done: true,
}];

describe('TodoList', () => {
    it('renders without crashing', () => {
        const wrapper = render(<TodoList todos={mockTodos} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders EditableTodo items correctly', () => {
        const wrapper = shallow(<TodoList todos={mockTodos} />);
        expect(wrapper.find('EditableTodo')).toHaveLength(mockTodos.length);
    });

    it('renders empty content correctly', () => {
        const wrapper = shallow(<TodoList todos={[]} />);
        expect(wrapper.find('EditableTodo').exists()).toBe(false);
    });
});