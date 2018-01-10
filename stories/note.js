import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import Note from '../src/components/Note'

const salute = 'Hello'

storiesOf('Note', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(centered)
  .add('Note', () => (
    <Note>
      {salute}
    </Note>
  ))
