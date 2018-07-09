import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TaskDetails from '../TaskDetails';

test('Fetches task details and renders properly', () => {
    fetch.mockResponses(
		[
			JSON.stringify({task: {description: "Task description", id: 0, title: "Task Title",}}),
			{ status: 200 }
		]
    );
    const updateTaskDetails = () => {};
    const wrapper = shallow(<TaskDetails update={updateTaskDetails}/>);;
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('Call update method on click on save button.', () => {
    fetch.mockResponses(
		[
			JSON.stringify({task: {description: "Task description", id: 0, title: "Task Title",}}),
			{ status: 200 }
		]
    );
    const updateTaskDetails =jest.fn();
    const wrapper = shallow(<TaskDetails update={updateTaskDetails}/>);;
    wrapper.find("form").simulate("submit", {
            preventDefault: () => {},
            target: ["Task Title","Task description"]
    });
    expect(updateTaskDetails.mock.calls.length).toBe(1);
});
