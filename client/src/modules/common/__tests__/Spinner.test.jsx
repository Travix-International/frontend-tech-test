import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spinner from '../Spinner';


describe('Common.Spinner', () => {
  it('should render with props', () => {
    const spinner = shallow(<Spinner />);

    expect(toJson(spinner)).toMatchSnapshot();
  });
});
