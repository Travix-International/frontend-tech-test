import React from 'react'
import { storiesOf } from '@storybook/react'
import  * as Title from '.'

storiesOf('Atoms/Title', module)
.add('Normal Case', () => (
  <div>
        <Title.H1> Hackathon is Normal  h1</Title.H1> 
        <Title.H2> Hackathon is Normal  h2</Title.H2> 
        <Title.H3> Hackathon is Normal  h3</Title.H3> 
        <Title.H4> Hackathon is Normal  h4</Title.H4> 
        <Title.H5> Hackathon is Normal  h5</Title.H5> 
        <Title.H6> Hackathon is Normal  h6</Title.H6> 
    </div>
)) .add('isUpperCase Case', () => (
  <div>
        <Title.H1 isUpperCase> Hackathon is Normal  h1</Title.H1> 
        <Title.H2 isUpperCase> Hackathon is Normal  h2</Title.H2> 
        <Title.H3 isUpperCase> Hackathon is Normal  h3</Title.H3> 
        <Title.H4 isUpperCase> Hackathon is Normal  h4</Title.H4> 
        <Title.H5 isUpperCase> Hackathon is Normal  h5</Title.H5> 
        <Title.H6 isUpperCase> Hackathon is Normal  h6</Title.H6> 
    </div>
))  .add('isLowerCase Case', () => (
  <div>
        <Title.H1 isLowerCase> Hackathon is Normal  h1</Title.H1> 
        <Title.H2 isLowerCase> Hackathon is Normal  h2</Title.H2> 
        <Title.H3 isLowerCase> Hackathon is Normal  h3</Title.H3> 
        <Title.H4 isLowerCase> Hackathon is Normal  h4</Title.H4> 
        <Title.H5 isLowerCase> Hackathon is Normal  h5</Title.H5> 
        <Title.H6 isLowerCase> Hackathon is Normal  h6</Title.H6> 
    </div>
)) ;