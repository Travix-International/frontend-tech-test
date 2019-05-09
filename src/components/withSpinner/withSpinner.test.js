import React from 'react';
import { shallow } from 'enzyme';
import withSpinner from './withSpinner';
import { Button, Spinner } from 'reactstrap';

const HOC = withSpinner(Button);

describe('withSpinner test', () => {
  it('should render a spinner when isPending is true', () => {
    const wrapper = shallow(<HOC isPending={true} />);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('should not render the spinner when isPending is false', () => {
    const wrapper = shallow(<HOC isPending={false} />);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });
});