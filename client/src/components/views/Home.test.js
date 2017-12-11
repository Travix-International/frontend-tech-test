import React from 'react';
import { Home } from './Home';
import reducers from 'reducers';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('should render <Home />', () => {
    const result = shallow(<Home />);
    const instance = result.props();

    expect(instance.className).toEqual('main-content');
  });
});
