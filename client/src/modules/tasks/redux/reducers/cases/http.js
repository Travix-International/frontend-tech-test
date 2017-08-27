import { http as httpFactory } from '../../factories';

export const setSuccess = state => ({
  ...state,
  ...httpFactory(),
});

export const setLoading = state => ({
  ...state,
  ...httpFactory({ isFetching: true }),
});

export const setError = (state, { payload }) => ({
  ...state,
  ...httpFactory({ error: payload }),
});
