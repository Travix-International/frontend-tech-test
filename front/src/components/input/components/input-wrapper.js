import styled from 'styled-components'

const InputWrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
  &:before {
    width: 95%;
    left: 0;
    right: 0;
    bottom: 0;
    content: "\00a0";
    position: absolute;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
  }
`

export default InputWrapper
