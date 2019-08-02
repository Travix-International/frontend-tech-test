/**
 * Load state from localStorage
 *
 * @return {object} - State saved in localStorage
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

/**
 * Save state into localStorage
 *
 * @param {object} state - Current state of the application
 */
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log('Cannot save state into localStorage.');
  }
};

/**
 * Clears localStorage
 */
export const clearState = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log('Cannot clear state from localStorage.');
  }
};

/**
 * Returns boolean depends on the given object is task or not
 * @param {object} obj - Task draft object shape
 *
 * @return {boolean}
 */
export const hasDraft = obj => {
  if (
    obj === null ||
    ((obj.title === undefined || obj.title === '') && (obj.description === undefined || obj.description === ''))
  ) {
    return false;
  }
  return true;
};
