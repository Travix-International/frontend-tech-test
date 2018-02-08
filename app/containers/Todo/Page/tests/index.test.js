import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

import { TodoPage, mapDispatchToProps } from '../index';
import { fetch, update, remove } from '../../actions';

jest.mock('containers/Todo/Form', () => 'TodoForm');
jest.mock('components/Button/Morph', () => 'ButtonMorph');

const initial = {
  todos: [],
  onInit: jest.fn()
};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <IntlProvider {...props}>
      <TodoPage {...finalProps} />
    </IntlProvider>
  );
};

describe('<TodoPage />', () => {
  it('should render component with no results', () => {
    const onInit = jest.fn();
    const props = {
      onInit
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(onInit).toHaveBeenCalledWith();
    expect(tree).toMatchSnapshot();
  });

  it('should render component when loading', () => {
    const onInit = jest.fn();
    const props = {
      loading: true,
      onInit
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(onInit).toHaveBeenCalledWith();
    expect(tree).toMatchSnapshot();
  });

  it('should render component with results', () => {
    const onInit = jest.fn();
    const props = {
      loading: false,
      todos: [{
        id: 1,
        title: 'title',
        description: 'description'
      }],
      onInit
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(onInit).toHaveBeenCalledWith();
    expect(tree).toMatchSnapshot();
  });

  it('should render item', () => {
    const data = {
      id: 'id'
    };
    const index = 0;
    const style = 'style';
    const component = shallow(<TodoPage {...initial} />);
    const instance = component.instance();

    expect(create(instance.renderItem({ data, index, style })).toJSON()).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onInit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onInit).toBeDefined();
      });

      it('should dispatch fetch when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        result.onInit();

        expect(dispatch).toHaveBeenCalledWith(fetch());
      });
    });

    describe('onUpdateItem', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        expect(result.onUpdateItem).toBeDefined();
      });

      it('should dispatch update when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const id = 'id';
        const title = 'title';
        const description = 'description';
        const index = 'index';

        result.onUpdateItem({ id, title, description, index });

        expect(dispatch).toHaveBeenCalledWith(update({ id, title, description, index }));
      });
    });

    describe('onDeleteItem', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);

        expect(result.onDeleteItem).toBeDefined();
      });

      it('should dispatch remove when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const id = 'id';
        const index = 'index';

        result.onDeleteItem({ id, index });

        expect(dispatch).toHaveBeenCalledWith(remove({ id, index }));
      });
    });
  });
});
