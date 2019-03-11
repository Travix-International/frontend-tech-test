import styled from 'styled-components'

const Button = styled.button`
  border: 0;
  padding: 0;
  color: #fff;
  background-color: #2196f3;
  margin: .8rem;
  box-shadow: 0 .1rem .5rem 0 rgba(0,0,0,0.2), 0 .2rem .2rem 0 rgba(0,0,0,0.14), 0 .3rem .1rem -0.2rem rgba(0,0,0,0.12);
  padding: .6rem 1.6rem;
  font-size: 1rem;
  min-width: 6.4rem;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: .4rem;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  &:hover {
    background-color: #1976d2;
  }
  &:active {
    box-shadow: 0 .5rem .5rem -0.3rem rgba(0,0,0,0.2), 0 .8rem 1rem .1rem rgba(0,0,0,0.14), 0 .3rem 1.4rem .2rem rgba(0,0,0,0.12);
  }
`
Button.displayName = 'Button'

export default Button
