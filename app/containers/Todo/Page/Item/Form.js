import styled from 'styled-components';

export default styled.form`
  background: #FFF;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  pointer-events: ${({ disabled, loading }) => (disabled || loading ? 'none' : 'auto')};
  user-select: ${({ disabled, loading }) => (disabled || loading ? 'none' : 'auto')};

  ${({ removed, loading }) => (removed || loading) && 'opacity: 0.5;'}

  :hover {
    border-color: #02DCA4;
  }
`;
