import React from 'react';
import { create } from 'react-test-renderer';

import List from '../index';

const initial = {
  data: []
};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <List {...finalProps} />
  );
};

describe('<List />', () => {
  it('should render component', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call render item with current index, data and style', () => {
    const index = 0;
    const style = {};
    const onRenderItem = jest.fn();
    const props = {
      data: [{
        id: 0
      }, {
        id: 1
      }, {
        id: 2
      }],
      height: 100,
      onRenderItem
    };
    const component = create(renderComponent(props));
    const instance = component.getInstance();

    instance.handleRenderItem({ index, style });

    expect(onRenderItem).toHaveBeenCalledWith({ data: props.data[index], index, style });
  });

  it('should call forceUpdateGrid', () => {
    const forceUpdateGrid = jest.fn();
    const component = create(renderComponent());
    const instance = component.getInstance();

    instance.listRef.forceUpdateGrid = forceUpdateGrid;
    instance.componentWillReceiveProps({ data: [{ id: 'id ' }] });

    expect(forceUpdateGrid).toHaveBeenCalledWith();
  });

  it('should not call forceUpdateGrid', () => {
    const forceUpdateGrid = jest.fn();
    const component = create(renderComponent());
    const instance = component.getInstance();

    instance.listRef.forceUpdateGrid = forceUpdateGrid;
    instance.componentWillReceiveProps(initial);

    expect(forceUpdateGrid).not.toHaveBeenCalledWith();
  });
});
