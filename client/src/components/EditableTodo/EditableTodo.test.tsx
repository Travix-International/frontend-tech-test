import React from 'react';
import { shallow, render } from 'enzyme';
import EditableTodo from '.';

describe('EditableTodo', () => {
    it('renders without crashing', () => {
        const wrapper = render(<EditableTodo id={1} title="Task 1" description="description..." done={false} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the corrent component based on the state', () => {
        const wrapper = shallow(<EditableTodo id={1} title="Task 1" description="description..." done={false} />);
        wrapper.setState({ editFormOpen: false });
        expect(wrapper.find('TodoItem').exists()).toBe(true);
        expect(wrapper.find('EditTodoForm').exists()).toBe(false);

        wrapper.setState({ editFormOpen: true });
        expect(wrapper.find('TodoItem').exists()).toBe(false);
        expect(wrapper.find('EditTodoForm').exists()).toBe(true);
    });
});