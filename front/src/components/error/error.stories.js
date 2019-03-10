import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'

import Error from '.'

storiesOf('Panel Message', module).add('Error', () => {
  const isOpenError = boolean('Open/Close Error', true)
  const messageError = text('Message Error', 'Message Error ')
  return (<Error isOpen={isOpenError} message={messageError}/>)
})
