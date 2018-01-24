import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import App from 'containers/App'

describe('<App />', () => {
  let mockStore
  let store
  let wrapper

  beforeAll(() => {
    mockStore = configureStore([])
    store = mockStore({})
    wrapper = shallow(<App store={store} />)
  })

  it('should render the redux <Provider />', () => {
    expect(wrapper.find('Provider')).toHaveLength(1)
    expect(wrapper.find('Provider').props()).toHaveProperty('store', store)
  })

  it('should render the <BrowserRouter /> component', () => {
    expect(wrapper.find('BrowserRouter')).toHaveLength(1)
  })

  it('should render some <Route />s', () => {
    expect(wrapper.find('Route').length).not.toBe(0)
  })
})
