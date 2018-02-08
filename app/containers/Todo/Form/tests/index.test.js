import React from 'react';
import { create } from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

import { TodoForm, mapDispatchToProps } from '../index';
import { change, save } from '../actions';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <IntlProvider {...props}>
      <TodoForm {...finalProps} />
    </IntlProvider>
  );
};

describe('<TodoForm />', () => {
  it('should render component', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onChange', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChange).toBeDefined();
      });

      it('should dispatch change when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const value = 'value';
        const name = 'name';

        result.onChange(value, name);

        expect(dispatch).toHaveBeenCalledWith(change({ value, name }));
      });
    });

    describe('onSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        expect(result.onSubmit).toBeDefined();
      });

      it('should dispatch save when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        result.onSubmit();

        expect(dispatch).toHaveBeenCalledWith(save());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };

        result.onSubmit(evt);

        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
