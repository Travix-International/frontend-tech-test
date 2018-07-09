import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import TodoHeader from '../TodoHeader';

test('Todo Header component renders properly', () => {
	const wrapper = shallow(<TodoHeader add={undefined} today={new Date(2018, 11, 24, 10, 33, 30, 0)}/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});