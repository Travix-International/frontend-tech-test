const initialState = 'APP_READY';

const appState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FETCHING_STATE':
      return action.appState;

    case 'SET_READY_STATE':
    default:
      return initialState;
  }
};

export default appState;
