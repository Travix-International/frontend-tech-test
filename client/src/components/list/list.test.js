import React from 'react';
import { shallow } from 'enzyme';
import List from '.';
import mockServer from './../../constants/mockServer';

describe ('List Section of Task app', () => {
  let component;
  const mockFn = jest.fn ();
  beforeEach (() => {
    component = shallow (<List
                    fetchAllData={ mockFn }
                    allCount={ mockServer.fetchAppDataSuccess.data.allCount }
                    doneCount={ mockServer.fetchAppDataSuccess.data.doneCount }
                    pendingCount={ mockServer.fetchAppDataSuccess.data.pendingCount }
                    currentTab={ 0 }
                    fetchingAllData={false}
                    />);
  });
  afterEach (() => {
    component = null;
  });

  it ('should render the List section without crashing', () => {
    expect (component.exists ()).toBe (true);
  });

  it ('should contain three tabs for all, pending, and completed items', () => {
    expect (component.find ('Tab').length).toEqual (3);
  });
})