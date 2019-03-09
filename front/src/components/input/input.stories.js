import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from '.'

storiesOf('Inputs', module).add('text', () => {
  return (<Input label={'Test'} onChange={action('change')} />)
})
