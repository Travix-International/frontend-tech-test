/* eslint-disable import/no-extraneous-dependencies, func-names, no-unused-expressions */
/* global describe, it */
import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { resetDOM } from 'frint-test-utils';
import { MemoryRouterService } from 'frint-router';

import { ItemList } from './ItemList';

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
  loading: false,
  pagination: {
    page: 1,
    pageSize: 10,
    total: 1
  },
  changeTitleInput: () => {},
  changeDescriptionInput: () => {},
  toggleDescription: () => {},
  addTodo: () => {},
  getNextPage: () => {},
  getTodos: () => {},
  filter: '',
};

const todo = {
  id: 1,
  title: 'test',
  description: 'test',
  completed: false
}

describe('Todo ItemList component', () => {

  beforeEach(() => {
    resetDOM();
  });

  it('should have class todoapp', () => {
    const wrapper = shallow(
      <ItemList {...defaultProps} todos={[todo]} />,
      { context: createContextWithRouter() }
    );
    expect(wrapper.hasClass('todoapp')).to.be.true;
  });

  it('should have class disabled when prop loading is true', () => {

    const wrapper = shallow(
      <ItemList {...defaultProps} loading todos={[todo]} />,
      { context: createContextWithRouter() },
    );
    expect(wrapper.hasClass('disabled')).to.be.true;
  });
});
