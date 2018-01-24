import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { MemoryRouter } from 'react-router-dom'

import MainNav from '../src/components/MainNav'

storiesOf('MainNav', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('MainNav default', () => (
    <MemoryRouter>
      <MainNav />
    </MemoryRouter>
  ))

