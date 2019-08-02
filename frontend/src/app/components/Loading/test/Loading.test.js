import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';

it('Loading renders correctly', () => {
  const LoadingSnapshot = shallow(<Loading text="Loading something" />);
  expect(LoadingSnapshot).toMatchSnapshot();
});
