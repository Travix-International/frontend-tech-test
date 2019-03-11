import styled from 'styled-components'

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: rgba(0,0,0, .05);
  }
`

export default Item
