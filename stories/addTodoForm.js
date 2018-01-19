import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import AddTodoForm from '../src/components/AddTodoForm'

storiesOf('AddTodoForm', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('AddTodoForm', () => (
    <AddTodoForm />
  ))
