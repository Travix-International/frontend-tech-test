import {
  SUCCESS,
  ERROR,
  juno,
} from './shared'

const settings = juno.defineAction('settings')

export const CHANGE_LANGUAGE = settings.defineAction('CHANGE_LANGUAGE', [SUCCESS, ERROR])
export const SOMETHING = settings.defineAction('SOMETHING')
