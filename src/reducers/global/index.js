import update from 'immutability-helper';

const initialState = {
  errors: [],
};

export default function reducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case 'ERROR_OCCURRED': {
      return update(state, {
        errors: {
          $push: [payload.err],
        },
      });
    }

    case 'ERROR_HANDLED': {
      const errId = payload.id;
      let deletingIndex;
      state.errors.map((err, i) => {
        if (err.id === errId) {
          deletingIndex = i;
        }
        return false;
      });
      if (deletingIndex > -1) {
        return update(state, {
          errors: {
            $splice: [[deletingIndex, 1]],
          },
        });
      }
      return state;
    }

    default:
      return state;
  }
}
