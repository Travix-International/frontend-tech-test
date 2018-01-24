import Icons from './icons'

export { default } from './Icon'
export const IconNames = Object.keys(Icons).map(name => name.replace(/^WICON_/, ''))
export const IconSizes = {
  MINI: 12,
  SMALL: 16,
  MEDIUM: 32,
}
