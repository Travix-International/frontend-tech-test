/* eslint-disable import/no-extraneous-dependencies, func-names, no-unused-expressions */
/* global describe, it */
import { expect } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { resetDOM } from 'frint-test-utils';
import { MemoryRouterService } from 'frint-router';

import Filters from './Filters';

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

describe('Filters component', () => {

  beforeEach(() => {
    resetDOM();
  });

  it('should have class filters-container', () => {
    const wrapper = shallow(
      <Filters />,
      { context: createContextWithRouter() }
    );
    expect(wrapper.hasClass('filters-container')).to.be.true;
  });
  it('should have three filters', () => {
    const wrapper = shallow(
      <Filters />,
      { context: createContextWithRouter() }
    );
    expect(wrapper.children().children().length).to.be.equal(3);
    expect(wrapper.find('[to="/"]').exists()).to.be.true;
    expect(wrapper.find('[to="/active"]').exists()).to.be.true;
    expect(wrapper.find('[to="/completed"]').exists()).to.be.true;
  });
});
