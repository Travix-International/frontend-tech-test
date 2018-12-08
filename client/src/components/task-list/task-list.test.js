import React from 'react';
import { shallow } from 'enzyme';
import TaskList from '.';

describe ('Task List component', () => {
  let component;

  beforeEach (() => {
    component = shallow (<TaskList
                            currentTab={0} />
                );
  });
  afterEach (() => {
    component = null;
  });

  it ('should render task list component without crashing', () => {
    expect (component.exists ()).toBe (true);
  });
});
