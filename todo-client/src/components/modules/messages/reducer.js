import { 
  SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE, CLEAR_MESSAGES
} from './actions';

const initialState = {
  statusMessages: {
    errorMessage: '',
    successMessage: ''
  }
};

const saveStatusMessage = (state, action, isErrorMessage) => {
  const { statusMessages } = state;
  const { message } = action;
  const type = isErrorMessage ? 'errorMessage' : 'successMessage';
  const chagesForMessage = {
    [type]: message
  };
  const changesForState = {
    statusMessages: {
      ...statusMessages,
      ...chagesForMessage
    }
  };
  return {
    ...state,
    ...changesForState
  };
}

const clearMessages = (state) => {
  const chagesForState = {
    errorMessage: '',
    successMessage: ''
  }
  return {
    ...state,
    ...chagesForState
  };
}

const taskReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case CLEAR_MESSAGES: return clearMessages(state);
      case SHOW_ERROR_MESSAGE: return saveStatusMessage(state, action, true);
      case SHOW_SUCCESS_MESSAGE: return saveStatusMessage(state, action, false);
      default:
          return state;
  }
};

export default taskReducer;