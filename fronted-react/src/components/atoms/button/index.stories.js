import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Atoms/Button', module)
.add('Normal Case', () => (
 <Button>Normal</Button>
)) .add('primary Case', () => (
 <Button primary>primary</Button>
)) ; 