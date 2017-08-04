import * as fs from 'fs'
import { sync as globSync } from 'glob'
import { sync as mkdirpSync } from 'mkdirp'
import chalk from 'chalk'
import parseArgs from 'minimist'

const c = chalk
const err = c.bold.red
const nfo = c.blue

// Parse CLI args
const { lang } = parseArgs(process.argv)
const defaultLang = lang || 'en'

// Config
const translationBuildDir = './src/locales/'
const translationSrcDir = './intl/translations'

console.log(nfo('Build Transaltion\n'), `  from ${translationSrcDir}`)
// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const translatedMessages = globSync(`${translationSrcDir}/**/*.json`)
    .map((filename) => {
      const [l0, l1] = filename.replace(translationSrcDir, '').split(/\//g)
      const flang = l0 === '' ? l1 : l0
      return {
        lang: flang,
        messages: JSON.parse(fs.readFileSync(filename, 'utf8')),
      }
    })
    .reduce((langCol, { lang, messages }) => {
      const messagesEntries = Object.entries(messages)
      const prevlang = langCol[lang] || {}
      langCol[lang] = {
        ...prevlang,
        ...messagesEntries.reduce((msgCol, [id, { message }]) => {
            msgCol[id] = message
            return msgCol
          }, {})
      }
      return langCol
    }, {})

// Create a new directory that we want to write the aggregate messages to
mkdirpSync(translationBuildDir)

// Write the messages to this directory
let moduleIndexExport = 'export default {\n'
let moduleIndex = Object.entries(translatedMessages).reduce((fCol, [lang, messages]) => {
  // write JSON transalted messages
  fs.writeFileSync(
      `${translationBuildDir}/messages${lang.toUpperCase()}.json`,
      JSON.stringify(messages, null, 2)
  )
  // genrate locales file
  fs.writeFileSync(
    `${translationBuildDir}/${lang.toLowerCase()}.js`,
    `
import locale from 'react-intl/locale-data/${lang.toLowerCase()}'
import messages from './messages${lang.toUpperCase()}.json'

export default {
  messages,
  locale,
  code: '${lang.toLowerCase()}',
}
`)

  if (lang === defaultLang) {
    moduleIndexExport += `  default: locale${lang.toUpperCase()},\n`
    moduleIndexExport += `  ${lang}: locale${lang.toUpperCase()},\n`
    fCol.unshift(`import locale${lang.toUpperCase()} from './${lang}'`)
  } else {
    moduleIndexExport += `  ${lang}: loadLocale${lang.toUpperCase()},\n`
    fCol.push(`import loadLocale${lang.toUpperCase()} from 'bundle-loader?lazy&name=[name]!./${lang}'`)
  }

  return fCol
}, [])

moduleIndexExport += '}'
moduleIndex = [
  '/* eslint-disable import/first, import/extensions, import/no-webpack-loader-syntax */',
  ...moduleIndex,
  '',
  moduleIndexExport,
  ''
].join('\n')


fs.writeFileSync(`${translationBuildDir}/index.js`, moduleIndex)
console.log(nfo('saved to'), translationBuildDir)
