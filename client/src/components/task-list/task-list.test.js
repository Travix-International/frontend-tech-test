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
  const mockFn = jest.fn ();

  beforeEach (() => {
    component = shallow (<TaskList
                            currentTab={0}
                            isFetching={false}
                            tasks={ mockServer.fetchAppDataSuccess.data.tasks }
                            appErrorStatus={0}
                            isUpdating={false}
                            id={ mockServer.updateRequestId }
                            isCreating={false}
                            updateTask={ mockFn }
                            fetchTabData={ mockFn }
                            editThisTask={ mockFn }/>
                );
  });
  afterEach (() => {
    component = null;
  });

  it ('should render task list component without crashing', () => {
    expect (component.exists ()).toBe (true);
  });
});
