import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'
import { action } from '@storybook/addon-actions'

storiesOf('Button', module)
  .add('simple', () => (
    <Fragment style={{width: '100%', height: '300px'}}>
      <Button onClick={action('click')}>Test</Button>
    </Fragment>))
