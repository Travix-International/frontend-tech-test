// given response and return mock travix-persistent-object
export const createMockResponse = (response) => {
  return () => {
    return {
      then: (cb) => {
        cb(response);
      },
    };
  };
};

export default module.exports;
