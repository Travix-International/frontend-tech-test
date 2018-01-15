import { fromJS } from 'immutable'

const defaultState = fromJS({
  language: 'en',
})

const settings = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default settings
