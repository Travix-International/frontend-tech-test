import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Loading from '.'

storiesOf('Loading', module).add('simple', () => {
  const isOpenLoading = boolean('Open/Close Loading', true)
  return (<Loading isOpen={isOpenLoading}/>)
})
