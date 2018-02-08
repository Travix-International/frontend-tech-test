import React, { Children, PureComponent } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import Wrapper from './Wrapper';
import Content from './Content';

class ButtonMorph extends PureComponent {
  state = {
    collapsed: false,
    height: 0,
    width: 0
  };

  componentDidMount() {
    this.setWrapperSize();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  setWrapperSize() {
    if (this.contentRef) {
      const { height, width } = this.contentRef.getBoundingClientRect();

      this.setState({
        height,
        width
      });
    }
  }

  setRef = ref => {
    this.contentRef = ref;
  }

  handleClick = () => {
    const { collapsed } = this.state;

    this.setState({ collapsed: !collapsed });
  }

  handleResize = () => {
    this.setWrapperSize();
  }

  render() {
    const { collapsed, height, width } = this.state;
    const { text, secondary, className, collapsedText, children, onClick, ...props } = this.props;

    return (
      <Wrapper collapsed={collapsed} height={height} width={width} className={className}>
        <StyledButton collapsed={collapsed} onClick={this.handleClick} {...props} secondary={secondary} >
          {collapsed ? collapsedText : text}
        </StyledButton>
        <Content innerRef={this.setRef} collapsed={collapsed}>
          {Children.toArray(children)}
        </Content>
      </Wrapper>
    );
  }
}

ButtonMorph.propTypes = {
  text: PropTypes.node,
  collapsedText: PropTypes.node,
  secondary: PropTypes.bool,
  className: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default ButtonMorph;
