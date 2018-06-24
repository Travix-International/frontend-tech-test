const React = require('react');
const { shallow } = require('enzyme');
const App = require('../components/App');

describe('<App/>', () => {
  it('render the application', () => {
    shallow(<App />);
  });

  it('should render the basic layout elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header[role="banner"]')).toHaveLength(1);
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('should render the logo', () => {
    const wrapper = shallow(<App />);
    const logo = <h1 className="banner__logo">Travix</h1>;
    expect(wrapper.contains(logo)).toEqual(true);
  });
});
