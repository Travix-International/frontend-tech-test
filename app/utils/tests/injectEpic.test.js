import { memoryHistory } from 'react-router-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import configureStore from '../../configureStore';
import injectEpic from '../injectEpic';
import * as epicInjectors from '../epicInjectors';

const Component = () => 'Component';

const testEpic = combineEpics({
  onTest: action$ => {
    return action$
      .ofType('TEST')
      .mergeMap(() => Observable.of({
        type: 'TEST2'
      }));
  }
});

describe('injectEpic decorator', () => {
  let store;
  let injectors;
  let ComponentWithEpic;

  beforeAll(() => {
    epicInjectors.default = jest.fn().mockImplementation(() => injectors);
  });

  beforeEach(() => {
    store = configureStore({}, memoryHistory);
    injectors = {
      injectEpic: jest.fn(),
      ejectSaga: jest.fn(),
    };
    ComponentWithEpic = injectEpic({ key: 'test', epic: testEpic })(Component);
    epicInjectors.default.mockClear();
  });

  it('should inject given epic', () => {
    const props = { test: 'test' };
    shallow(<ComponentWithEpic {...props} />, { context: { store } });

    expect(injectors.injectEpic).toHaveBeenCalledTimes(1);
    expect(injectors.injectEpic).toHaveBeenCalledWith('test', { epic: testEpic });
  });

  it('should set a correct display name', () => {
    expect(ComponentWithEpic.displayName).toBe('withEpic(Component)');
    expect(injectEpic({ key: 'test', epic: testEpic })(() => null).displayName).toBe('withEpic(Component)');
  });

  it('should propagate props', () => {
    const props = { testProp: 'test' };
    const renderedComponent = shallow(<ComponentWithEpic {...props} />, { context: { store } });

    expect(renderedComponent.prop('testProp')).toBe('test');
  });
});
