export const httpFactory = ({
  isFetching = false,
  error = null,
} = {}) => ({
  isFetching, error,
});
