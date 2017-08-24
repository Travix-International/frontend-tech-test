import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import EmptyMessage from '../EmptyMessage';

const renderMessage = () => <div className="message" />;

describe('Common.EmptyMessage', () => {
  it('should render with props', () => {
    const isEmpty = true;
    const children = <div className="children" />;

    const emptyMessage = shallow(
      <EmptyMessage isEmpty={isEmpty} renderMessage={renderMessage}>
        {children}
      </EmptyMessage>,
    );

    expect(toJson(emptyMessage)).toMatchSnapshot();
  });

  it('should render children when isEmpty not true', () => {
    const isEmpty = false;
    const children = <div className="children" />;

    const emptyMessage = shallow(
      <EmptyMessage isEmpty={isEmpty} renderMessage={renderMessage}>
        {children}
      </EmptyMessage>,
    );

    expect(emptyMessage.contains(children)).toBe(true);
  });

  it('should render a message with renderMessage when isEmpty === true', () => {
    const isEmpty = true;
    const children = <div className="children" />;

    const emptyMessage = shallow(
      <EmptyMessage isEmpty={isEmpty} renderMessage={renderMessage}>
        {children}
      </EmptyMessage>,
    );

    expect(emptyMessage.find('.message').length).toBe(1);
  });
});
