import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from '.'

storiesOf('Atoms/Container/column', module)
.add('Normal Case', () => (
  <Container>
       <h2>Normal Text</h2>
        <p><span>asdfasdfasdf</span></p>
       <p>asdasd</p>
    </Container>
)) 
.add('Centered Case', () => (
     <Container alignCenter >
       <h2>Centered Text</h2>
       <p><span>asdfasdfasdf</span></p>
       <p>asdasd</p>
    </Container>
)) 
.add('Align Right Case', () => (
     <Container alignRight >
       <h2>Centered Text</h2>
       <p><span>asdfasdfasdf</span></p>
       <p>asdasd</p>
    </Container>
)).add('Centered spacedCase', () => (
     <Container alignCenter spaceAround >
       <h2>Centered Text</h2>
       <p><span>asdfasdfasdf</span></p>
       <p>asdasd</p>
    </Container>
));