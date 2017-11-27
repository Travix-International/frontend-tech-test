/* eslint no-underscore-dangle: 0 */
/* eslint prefer-rest-params: 0 */
import { JSDOM } from 'jsdom'
import sinon from 'sinon'

// ============================================================================
// Mocking DOM
// ============================================================================

const doc = new JSDOM(`
    <!doctype html>
    <html>
        <body></body>
    </html>
`)

const win = doc.window

win.requestAnimationFrame = (callback => setTimeout(callback, 1000 / 60))
win.localStorage = {
  getItem: () => {},
  setItem: () => {}
}
win.sessionStorage = {
  getItem: () => {},
  setItem: () => {}
}

Object.values = (object) => Object.keys(object).map(key => object[key])

Object.assign(global, {
  document: doc.window.document,
  window: win,
  Element: win.Element,
  navigator: win.navigator
})

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

const chai = require('chai')
const chaiEnzyme = require('chai-enzyme')

chai.use(chaiEnzyme())

const error = global.console.error

sinon.stub(console, 'error').callsFake(function ()  {
  const errorArguments = Array.from(arguments)
  const [warning] = errorArguments

  if (warning && warning.indexOf('Use `PropTypes.checkPropTypes()`') > -1) { return }

  error.apply(console, errorArguments)
})
