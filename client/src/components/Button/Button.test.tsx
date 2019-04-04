import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Button from '.';

describe('Button', () => {
    it('renders without crashing', () => {
        const wrapper = render(<Button>Button</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders text children correctly', () => {
        const wrapper = render(<Button>Text</Button>);
        expect(wrapper.text()).toBe('Text');
    });

    it('renders ReactNode children correctly', () => {
        const wrapper = shallow(<Button><span>node</span></Button>);
        expect(wrapper.contains(<span>node</span>)).toBe(true);
    });

    it('renders the button type correctly', () => {
        const wrapper = render(<Button type="primary">primary button</Button>);
        expect(wrapper.hasClass('primary')).toBe(true);
    });

    it('should call the onClick function when clicked', () => {
        class ButtonContainer extends React.Component<{}, any> {
            constructor(props: {}) {
                super(props);
                this.state = {
                    flag: true,
                };
            }

            render() {
                return (<Button onClick={this.handleClick}>click me</Button>);
            }

            private handleClick = () => {
                this.setState((prevState: any) => ({ flag: !prevState.flag }));
            };
        }

        const wrapper = mount(<ButtonContainer />);
        wrapper.simulate('click');
        expect((wrapper.state() as any).flag).toBe(false);
    });
});