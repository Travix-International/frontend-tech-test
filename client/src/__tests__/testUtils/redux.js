export const actionFactory = ({
  type = 'travix/common/DEFAULT',
  payload,
  error,
} = {}) => ({
  type, payload, error,
});
