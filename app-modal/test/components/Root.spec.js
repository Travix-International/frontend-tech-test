/* eslint-disable import/no-extraneous-dependencies, func-names, react/react-in-jsx-scope */
/* globals describe, document, it, sinon, expect */
import React from 'react';
import { createApp } from 'frint';
import {
  getMountableComponent,
  RegionService,
} from 'frint-react';
import { createStore } from 'frint-store';
import { mount } from 'enzyme';

import Root from '../../components/Root';
import rootReducer from '../../reducers';

describe('app-modal -> root component', function () {
  it('render', function () {
    const logger = {
      getAppName: () => 'logger',
    };

    const spyLogger = sinon.spy(logger, 'getAppName');

    const App = createApp({
      name: 'MyApp',
      providers: [
        {
          name: 'component',
          useValue: Root,
        },
        {
          name: 'logger',
          useValue: logger,
          cascade: true,
        },
        {
          name: 'store',
          useFactory: ({ app }) => {
            const Store = createStore({
              initialState: {
                modal: {
                  value: false,
                },
                color: {
                  value: '#000000',
                },
              },
              reducer: rootReducer,
              thunkArgument: { app },
            });
            return new Store();
          },
          deps: ['app'],
        },
        {
          name: 'region',
          useClass: RegionService,
        },
      ],
    });

    const Component = getMountableComponent(new App());

    const comp = mount(<Component />);
    expect(comp.contains(<strong>Services:</strong>)).to.equal(true);
    expect(spyLogger.calledOnce).to.equal(true);
  });
});

