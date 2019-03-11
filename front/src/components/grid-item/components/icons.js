import styled from 'styled-components'
import Edit from '../edit.svg'
import Remove from '../remove.svg'

const Icons = `
  width: 2rem;
  height: 2rem;
  fill: #707070;
  margin: 0 1rem;
  cursor: pointer;
`

export const EditIcon = styled(Edit)`
  ${Icons}
`
export const RemoveIcon = styled(Remove)`
  ${Icons}
`

export default Icons
