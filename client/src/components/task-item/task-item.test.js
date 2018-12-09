/**
 * @fileoverview Test Suite: For task item.
 * @author Jayendra Sharan (http://jayendra.co.in)
 */
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
                  isUpdating={ false }
                  task={ mockServer.sampleTask.data.task }
                  toggleStatus={ mockFn }
                  editTask={ mockFn }
                  />
                );
  });
  afterEach (() => {
    component = null;
  });

  it ('should render Task Item component without crashing', () => {
    expect (component.exists ()).toBe (true);
  });
})