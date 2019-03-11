import {keyframes} from 'styled-components'

const Animation = keyframes`
  0% {
    transform: translateX(0) rotate(45deg) scale(0);
  }

  50% {
    transform: translateX(-233%) rotate(45deg) scale(1);
  }

  100% {
    transform: translateX(-466%) rotate(45deg) scale(0);
  }
`

export default Animation
