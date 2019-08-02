import React from 'react';
import { shallow } from 'enzyme';
import Section from '../Section';

it('Section renders correctly', () => {
  const SectionSnapshot = shallow(<Section> Some section</Section>);
  expect(SectionSnapshot).toMatchSnapshot();
});
