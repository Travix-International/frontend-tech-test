import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

import TodoItem from '../index';

const initial = {};
const renderComponent = props => {
  const finalProps = { ...initial, ...props };

  return (
    <IntlProvider {...props}>
      <TodoItem {...finalProps} />
    </IntlProvider>
  );
};

describe('<TodoItem />', () => {
  it('should render component ', () => {
    const tree = create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component when loading', () => {
    const props = {
      loading: true
    };
    const tree = create(renderComponent(props)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onDelete when delete', () => {
    const id = 'id';
    const index = 'index';
    const onDelete = jest.fn();
    const props = {
      id,
      index,
      onDelete
    };
    const component = shallow(<TodoItem {...props} />);
    const instance = component.instance();

    instance.handleDelete();

    expect(onDelete).toHaveBeenCalledWith({ id, index });
  });

  it('should call onUpdate when update', () => {
    const id = 'id';
    const index = 'index';
    const title = 'title';
    const description = 'description';
    const onUpdate = jest.fn();
    const props = {
      id,
      index,
      title,
      description,
      onUpdate
    };
    const component = shallow(<TodoItem {...props} />);
    const instance = component.instance();

    instance.handleSubmit();

    expect(onUpdate).toHaveBeenCalledWith({ id, title, description, index });
  });

  it('should call onUpdate when update and preventDefault', () => {
    const id = 'id';
    const index = 'index';
    const title = 'title';
    const description = 'description';
    const onUpdate = jest.fn();
    const props = {
      id,
      index,
      title,
      description,
      onUpdate
    };
    const e = {
      preventDefault: jest.fn()
    };
    const component = shallow(<TodoItem {...props} />);
    const instance = component.instance();

    instance.handleSubmit(e);

    expect(e.preventDefault).toHaveBeenCalledWith();
    expect(onUpdate).toHaveBeenCalledWith({ id, title, description, index });
  });

  it('should change state when change', () => {
    const name = 'name';
    const value = 'value';
    const component = shallow(<TodoItem />);
    const instance = component.instance();

    instance.handleChange(value, name);

    expect(instance.state[name]).toBe(value);
  });

  it('should change title and description when recive props', () => {
    const title = 'title';
    const description = 'description';
    const component = shallow(<TodoItem />);
    const instance = component.instance();

    instance.componentWillReciveProps({ title, description });

    expect(instance.state.title).toBe(title);
    expect(instance.state.description).toBe(description);
  });

  it('should not change title and description when recive props', () => {
    const title = 'title';
    const description = 'description';
    const props = {
      title,
      description
    };
    const component = shallow(<TodoItem {...props} />);
    const instance = component.instance();

    instance.componentWillReciveProps({ title, description });

    expect(instance.state.title).toBe(title);
    expect(instance.state.description).toBe(description);
  });
});
