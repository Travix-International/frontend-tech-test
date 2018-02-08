const isInvalid = (data, keys) => {
  return keys.reduce((invalid, key) => {
    return data[key] && data[key].length ? invalid : true;
  }, false);
};

export {
  isInvalid
};
