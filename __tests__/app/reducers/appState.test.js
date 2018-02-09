import appState from '../../../src/javascript/reducers/appState';

describe('appState reducer', () => {
  it('should handle initial state', () => {
    expect(appState(undefined, {})).toEqual('APP_READY');
  });

  it('should handle SET_FETCHING_STATE', () => {
    expect(appState('APP_READY', {
      type: 'SET_FETCHING_STATE',
      appState: 'APP_FETCHING',
    })).toEqual('APP_FETCHING');
  });

  it('should handle SET_READY_STATE', () => {
    expect(appState('APP_FETCHING', {
      type: 'SET_READY_STATE',
      appState: 'APP_READY',
    })).toEqual('APP_READY');
  });
});
