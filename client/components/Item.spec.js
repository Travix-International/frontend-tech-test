/* eslint-disable import/no-extraneous-dependencies, func-names, no-unused-expressions */
/* global describe, it */
import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { resetDOM } from 'frint-test-utils';

import { Item } from './Item';

function createContextWithRouter(router) {
  return {
    app: {
      get(key) {
        if (key === 'router') {
          return router;
        }

        return null;
      }
    }
  };
}

const defaultProps = {
  titleValue: '',
  descriptionValue: '',
  showEditForm: false,
  requestDeleteTodo: () => {},
  submit: () => {},
  edit: () => {},
  cancelEdit: () => {},
  changeTitle: () => {},
  changeDescription: () => {},
}

describe('Todo Item component', () => {

  beforeEach(() => {
    resetDOM();
  });

  it('should have class completed when todo is completed', () => {
    const todo = {
      id: 1,
      title: 'test',
      description: 'test',
      completed: true
    }

    const wrapper = shallow(
      <Item {...defaultProps} todo={todo} />,
      { context: createContextWithRouter() }
    );
    expect(wrapper.hasClass('completed')).to.be.true;
  });

  it('should not have class completed when todo is not completed', () => {
    const todo = {
      id: 1,
      title: 'test',
      description: 'test',
      completed: false
    }

    const wrapper = shallow(
      <Item {...defaultProps} todo={todo} />,
      { context: createContextWithRouter() }
    );
    expect(wrapper.hasClass('completed')).to.be.false;
  });

  it('should show edit form when prop showEditForm is true', () => {
    const todo = {
      id: 1,
      title: 'test',
      description: 'test',
      completed: false
    }

    const wrapper = shallow(
      <Item {...defaultProps} showEditForm todo={todo} />,
      { context: createContextWithRouter() }
    );
    expect(wrapper.find('input.edit').exists()).to.be.true;
    expect(wrapper.find('textarea.edit').exists()).to.be.true;
    expect(wrapper.hasClass('editing')).to.be.true;
  });
});
