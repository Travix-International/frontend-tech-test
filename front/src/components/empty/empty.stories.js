import React from 'react'
import { storiesOf } from '@storybook/react'
import Empty from '.'

storiesOf('Panel Message', module)
  .add('Empty grid list', () => (
    <Empty />
  ))
