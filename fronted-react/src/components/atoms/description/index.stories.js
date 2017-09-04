import React from 'react'
import { storiesOf } from '@storybook/react'
import Description from '.'

storiesOf('Atoms/Description', module)
.add('Normal Case', () => (
  <div>
        <Description> Hackathon is Normal size 1</Description>
        <br />
        <Description size={2}> Hackathon is Normal size 2</Description>
        <br />
        <Description size={3}> Hackathon is Normal size 3</Description>
    </div>
)) 
.add('Upper Case', () => (
    <div>
        <Description isUpperCase  > Hackathon is UpperCase size 1</Description>
        <br />
        <Description isUpperCase  size={2}> Hackathon is UpperCase size 2</Description>
        <br />
        <Description isUpperCase  size={3}> Hackathon is UpperCase size 3</Description>
    </div>
))
.add('Lower Case', () => (
    <div>
        <Description isLowerCase  > Hackathon is LowerCase size 1</Description>
        <br />
        <Description isLowerCase  size={4} > Hackathon is LowerCase size 4=1</Description>
        <br />
        <Description isLowerCase  size={2}> Hackathon is LowerCase size 2</Description>
        <br />
        <Description isLowerCase  size={3}> Hackathon is LowerCase size 3</Description>
    </div>
))
.add('Font scale Size 1', () => (
  <Description> Hackathon Size 1 </Description>
))
.add('Font scale Size 2', () => (
  <Description size={2} > Hackathon Size 2</Description>
))
.add('Font scale Size 3', () => (
  <Description size={3}  > Hackathon Size 3</Description>
)) ; 