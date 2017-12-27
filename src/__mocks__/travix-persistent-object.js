// given response and return mock travix-persistent-object
export const createMockResponse = (response) => {
  let thenResponse;
  let hasPatched = false;

  return () => {
    // reset hasPatched for every persistent() call
    hasPatched = false;
    return {
      then: function then(cb) {
        // we only patch once
        if (!hasPatched) {
          hasPatched = true;
          thenResponse = cb(response);
        } else {
          thenResponse = cb(thenResponse);
        }
        return this;
      },
    };
  };
};

export default module.exports;
