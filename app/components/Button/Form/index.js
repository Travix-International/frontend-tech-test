import React, { Children } from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

const Button = ({ secondary, className, loading, children, onClick, ...props }) => {
  return (
    <Wrapper className={className}>
      <StyledButton {...props} secondary={secondary} onClick={onClick}>
        {loading ? <LoadingIndicator width="1em" height="1em" margin="0 auto" /> : Children.toArray(children)}
      </StyledButton>
    </Wrapper>
  );
};

Button.propTypes = {
  handleRoute: PropTypes.func,
  className: PropTypes.any,
  href: PropTypes.string,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
