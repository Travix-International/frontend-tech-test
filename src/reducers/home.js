import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: 'Home from REDUX BLA',
  description: 'This is your home page NOW IT CHANGED',
})

const home = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default home
