/* eslint global-require: 0 */
import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'

setDefaults({
  header: true,
  inline: false,
})

configure(() => require('./stories'), module)
