export const get = (object, path, defaultValue) => {
  const recur = (object, path) => {
    if (object === undefined) {
      return defaultValue;
    }
    if (path.length === 0) {
      return object;
    }
    return recur(object[path[0]], path.slice(1));
  };
  return recur(object, path);
};
//note: this does not work if any members in state path points
//  to an array
export const reduceStatePath = (
  state,
  statePath,
  modifier
) => {
  const recur = (result, path) => {
    const key = path[0];
    if (path.length === 0) {
      return modifier(get(state, statePath));
    }
    return {
      ...result,
      [key]: recur(result[key], path.slice(1)),
    };
  };
  return recur(state, statePath);
};
