import { defineAction } from 'redux-define'

export const PENDING = 'PENDING'
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'

export const domain = defineAction('juno')
