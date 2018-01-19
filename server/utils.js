module.exports.max = function max(collection, property) {
  return collection.reduce((prev, current) => {
    if (current[property] > prev) {
      prev = current[property];
    }

    return prev;
  }, 0);
}
