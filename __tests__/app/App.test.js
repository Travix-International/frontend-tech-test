import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../src/javascript/App';

describe('App test suite', () => {
  it('App renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  });

  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', () => {
    expect(shallow(<App />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<App />).text()).toEqual('Bar');
  });
});
