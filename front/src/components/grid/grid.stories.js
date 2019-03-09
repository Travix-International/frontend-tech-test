import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from '.'

storiesOf('Grid', module)
  .add('list with random li', () => (
    <Grid>
      <li><h1>Item 1</h1></li>
      <li><h1>Item 2</h1></li>
    </Grid>
  ))
