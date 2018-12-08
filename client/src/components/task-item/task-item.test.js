import React from 'react';
import { shallow } from 'enzyme';
import TaskItem from '.';
import mockServer from './../../constants/mockServer';

describe ('Task Item Component', () => {
  let component;
  const mockFn = jest.fn ();
  beforeEach (() => {
    component = shallow (
                <TaskItem
                  task={ mockServer.sampleTask }
                  updateTask={ mockFn }
                  />
                );
  });
  afterEach (() => {
    component = null;
  });

  it ('should render Task Item component without crashing', () => {
    expect (component.exists ()).toBe (true);
  });

  it ('should render Task Item component without crashing', () => {

  });

  it ('should render Task Item component without crashing', () => {

  });
})