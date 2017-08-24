import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ErrorMessage from '../ErrorMessage';

const renderMessage = () => <div className="message" />;

describe('Common.ErrorMessage', () => {
  it('should render with props', () => {
    const children = <div className="children" />;

    const errorMessage = shallow(
      <ErrorMessage renderMessage={renderMessage} error="error">
        {children}
      </ErrorMessage>,
    );

    expect(toJson(errorMessage)).toMatchSnapshot();
  });

  it('should render children when error is not passed', () => {
    const children = <div className="children" />;

    const errorMessage = shallow(
      <ErrorMessage renderMessage={renderMessage}>
        {children}
      </ErrorMessage>,
    );

    expect(errorMessage.contains(children)).toBe(true);
  });

  it('should render a message with renderMessage when there is an error', () => {
    const children = <div className="children" />;

    const errorMessage = shallow(
      <ErrorMessage renderMessage={renderMessage} error="error">
        {children}
      </ErrorMessage>,
    );

    expect(errorMessage.find('.message').length).toBe(1);
  });
});
