import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import Card from '.'

storiesOf('Card', module).add('simple', () => {
  const contentCard = text('Content card', 'Content text inside Card')
  const width = number('Width parent card - px', 300)
  return (
    <Fragment>
      <div style={{width: `${width}px`, background: 'red', padding: '20px', position: 'relative'}}>
        <Card>
          <h1>{contentCard}</h1>
        </Card>
      </div>
    </Fragment>)
})
