import React from 'react';
import { shallow } from 'enzyme';
import TaskList from '.';
import mockServer from '../../constants/mockServer';

describe ('Task List component', () => {
  let component;

  beforeEach (() => {
    component = shallow (<TaskList
                            tasks={ mockServer.fetchAppDataSuccess.data.tasks }
                            currentTab={0}
                            isFetching={false}/>
                );
  });
  afterEach (() => {
    component = null;
  });

  it ('should render task list component without crashing', () => {
    expect (component.exists ()).toBe (true);
  });
});
