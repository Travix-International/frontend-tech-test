import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from '.'

storiesOf('Atoms/Container/row', module)
.add('Normal Case', () => (
  <Container>
       <h2>Normal Text</h2>
        <p><span>asdfasdfasdf</span></p>
       <p>asdasd</p>
    </Container>
)) 
.add('Spaced Case', () => (
     <Container  spaced>
       <h2>Centered Text</h2>
       <p><span>asdfasdfasdf</span></p>
       <p>asdasd</p>
    </Container>
))
.add('Space Around Case', () => (
     <Container  spaceAround>
       <h2>Centered Text</h2>
       <p><span>asdfasdfasdf</span></p>
       <p>asdasd</p>
    </Container>
)) ;