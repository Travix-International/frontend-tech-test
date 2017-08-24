import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Title from '../Title';

const text = 'the title';

describe('Common.Tittle', () => {
  it('should render with props', () => {
    const title = shallow(<Title>{text}</Title>);

    expect(toJson(title)).toMatchSnapshot();
  });
});
