import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: 'Home from REDUX',
  description: 'This is your home page',
})

const home = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default home
