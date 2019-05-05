/**
 * A simple function creates a unique id with the give prefix
 * https://gist.github.com/gordonbrander/2230317
 */
const uniqueId = prefix => {
  const id = Math.random().toString(36).substr(2, 9);
  return `${prefix}_${id}`;
};

module.exports = {
  uniqueId
};