import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Description from '../Description';

const text = 'some long description text ?';

describe('Common.Description', () => {
  it('should render with props', () => {
    const description = shallow(<Description>{text}</Description>);

    expect(toJson(description)).toMatchSnapshot();
  });
});
