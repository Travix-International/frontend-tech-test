import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spinner from '../Spinner';
import LoadingMessage from '../LoadingMessage';

const renderMessage = () => <div className="message" />;

describe('Common.LoadingMessage', () => {
  it('should render with props', () => {
    const isLoading = true;
    const children = <div className="children" />;

    const loadingMessage = shallow(
      <LoadingMessage isLoading={isLoading} renderMessage={renderMessage}>
        {children}
      </LoadingMessage>,
    );

    expect(toJson(loadingMessage)).toMatchSnapshot();
  });

  it('should render children when isLoading !== true', () => {
    const isLoading = false;
    const children = <div className="children" />;

    const loadingMessage = shallow(
      <LoadingMessage isLoading={isLoading}>
        {children}
      </LoadingMessage>,
    );

    expect(loadingMessage.contains(children)).toBe(true);
  });

  it('should render a message with renderMessage when isLoading === true', () => {
    const isLoading = true;
    const children = <div className="children" />;

    const loadingMessage = shallow(
      <LoadingMessage isLoading={isLoading} renderMessage={renderMessage}>
        {children}
      </LoadingMessage>,
    );

    expect(loadingMessage.find('.message').length).toBe(1);
  });

  it('should render a spinner isLoading === true', () => {
    const isLoading = true;
    const children = <div className="children" />;

    const loadingMessage = shallow(
      <LoadingMessage isLoading={isLoading} renderMessage={renderMessage}>
        {children}
      </LoadingMessage>,
    );

    expect(loadingMessage.find(Spinner).length).toBe(1);
  });
});
