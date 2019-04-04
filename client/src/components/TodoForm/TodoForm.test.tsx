import React from 'react';
import { render, shallow, mount } from 'enzyme';
import TodoForm from '.';

describe('TodoForm', () => {
    it('renders without crashing', () => {
        const wrapper = render(<TodoForm />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the form with initial values correctly', () => {
        const wrapper = shallow(<TodoForm title="initial title" description="initial description" />);
        expect(wrapper.find('input[name="title"]').props().value).toEqual('initial title');
        expect(wrapper.find('input[name="description"]').props().value).toEqual('initial description');
    });

    it('renders the button texts correctly', () => {
        const wrapper = render(<TodoForm okText="Yes" cancelText="No" />);
        expect(wrapper.find('Button').first().text()).toEqual('Yes');
        expect(wrapper.find('Button').last().text()).toEqual('No');
    });

    it('should call the callbacks when the buttons are clicked', () => {
        const handleOk = jest.fn();
        const handleCancel = jest.fn();
        const wrapper = mount(
            <TodoForm onOk={handleOk} onCancel={handleCancel} />
        );

        wrapper.find('input[name="title"]').simulate('change', { target: { name: 'title', value: 'new title' } });
        expect(wrapper.find('input[name="title"]').props().value).toEqual('new title');
        wrapper.find('Button').first().simulate('click');
        expect(handleOk).toHaveBeenCalledWith('new title', '');
        wrapper.find('Button').last().simulate('click');
        expect(handleCancel).toHaveBeenCalled();
    });
});
