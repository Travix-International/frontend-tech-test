import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'

storiesOf('Atoms/Input', module)
.add('Normal Case', () => (
  <div>
        <Input /> 
    </div>
)).add('Placeholder Case', () => (
  <div>
        <Input placeholder="@Durand Neto" /> 
    </div>
)); 