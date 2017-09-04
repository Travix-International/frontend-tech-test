import React from 'react'
import { storiesOf } from '@storybook/react'
import Img from '.'
import oiImg from './../../../assets/images/oi-logo-purple-degrade-1.svg'

storiesOf('Atoms/Img', module)
.add('Normal Case', () => (
     <Img src={oiImg} />
)).add('Icon Case', () => (
     <Img icon src={oiImg} />
)).add('Thumb Case', () => (
     <Img thumb src={oiImg} />
));