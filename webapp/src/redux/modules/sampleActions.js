const asynchronousCall = () => new Promise((resolve) => {
  setTimeout(function () {
    resolve({ message: 'Async call complete!'});
  }, 1000);
});


export const constants = {
  HELLO_WORLD: 'HELLO_WORLD',
  UPDATE_TIME: 'UPDATE_TIME',
  ASYNC_CALL: 'ASYNC_CALL'
};

export const actions = {
  sayHelloWorld: () => {
    alert('Dispatching Redux Action!');
    return {
      type: constants.HELLO_WORLD
    };
  },
  updateTime: () => {
    const now = new Date();
    return {
      type: constants.UPDATE_TIME,
      payload: { time: now }
    };
  },
  triggerRequest: () => {
    return {
      type: constants.ASYNC_CALL,
      payload: {
        promise: asynchronousCall().then((response) => {
          console.log('Response received!');
          // Normalize data here
          return Promise.resolve(response);
        })
      }
    };
  }
};

const ACTION_HANDLERS = {
  HELLO_WORLD: (state) => {
    return {
      ...state,
      message: 'Redux is fun!'
    };
  },
  UPDATE_TIME: (state, action) => {
    return {
      ...state,
      currentTime: action.payload.time
    };
  },
  ASYNC_CALL_PENDING: (state) => ({
    ...state,
    isLoading: true
  }),
  ASYNC_CALL_FULFILLED: (state, action) => ({
    ...state,
    asyncMessage: action.payload.message,
    isLoading: false
  }),
  ASYNC_CALL_REJECTED: (state) => {
    console.log('Error Found');
    return {
      ...state,
      isLoading: false
    };
  }
};

export const initialState = {
  currentTime: new Date(),
  message: '',
  asyncMessage: '',
  isLoading: ''
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
