import styled from 'styled-components'

const Input = styled.input`
  width: 95%;
  border: 0;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
`

export default Input
