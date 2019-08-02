import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

it('Message renders correctly', () => {
  const MessageSnapshot = shallow(<Message title="Error" description="Something wrong.." type="error" />);
  expect(MessageSnapshot).toMatchSnapshot();
});
