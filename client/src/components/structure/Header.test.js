import React from 'react';
import { Header } from './Header';
import reducers from 'reducers';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render <Header />', () => {
    const result = shallow(<Header />);
    const instance = result.props();

    expect(instance.className).toEqual('main-header');
  });
});
