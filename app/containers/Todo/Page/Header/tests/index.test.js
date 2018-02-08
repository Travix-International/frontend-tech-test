import React from 'react';
import { create } from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

import TodoHeader from '../index';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <IntlProvider {...props}>
      <TodoHeader {...finalProps} />
    </IntlProvider>
  );
};

describe('<TodoHeader />', () => {
  it('should render component ', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
