import { camelCase } from 'lodash';

const _matchApiAction = actionType => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(actionType);
  if (!matches) return false;

  const [, requestName, requestState] = matches;
  return {
    requestName,
    requestState
  };
};

const api = (state = {}, action) => {
  const { type, error } = action;
  const matches = _matchApiAction(type);

  if (!matches) return state;

  const { requestName, requestState } = matches;
  const apiEntity = camelCase(requestName);
  const apiState = {
    [apiEntity]: {
      pending: requestState === 'REQUEST',
      failure: requestState === 'FAIL'
    }
  };

  if (error) 
    apiState[apiEntity].error = error.message || 'Error occurs';

  return {
    ...state,
    ...apiState
  };
};

export default api;