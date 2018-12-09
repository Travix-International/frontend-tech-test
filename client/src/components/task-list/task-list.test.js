/**
 * @fileoverview Test Suite: for task list container.
 * @author Jayendra Sharan (http://jayendra.co.in)
 */
import React from 'react';
import { shallow } from 'enzyme';
import TaskList from '.';
import mockServer from '../../constants/mockServer';

describe ('Task List component', () => {
  let component;

  beforeEach (() => {
    component = shallow (<TaskList
                            isUpdating={false}
                            tasks={ mockServer.fetchAppDataSuccess.data.tasks }
                            currentTab={0}
                            appErrorStatus={0}
                            isFetching={false}
                            isCreating={false}/>
                );
  });
  afterEach (() => {
    component = null;
  });

  it ('should render task list component without crashing', () => {
    expect (component.exists ()).toBe (true);
  });
});
