import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CircleButton from '.'
import { action } from '@storybook/addon-actions'

storiesOf('Button', module)
  .add('Circle button', () => (
    <Fragment style={{width: '100%', height: '300px'}}>
      <CircleButton onClick={action('click')} />
    </Fragment>))
