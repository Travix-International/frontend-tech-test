/* eslint-disable import/no-extraneous-dependencies, no-console */
import * as fs from 'fs'
import { sync as globSync } from 'glob'
import { sync as mkdirpSync } from 'mkdirp'
import chalk from 'chalk'
import parseArgs from 'minimist'

const c = chalk
const err = c.bold.red
const nfo = c.blue

// Parse CLI args
const { locales } = parseArgs(process.argv)

// Config
const translatedDir = './intl/translations/'
const extractedfiles = './intl/extracted/src/**/*.json'
// Get locals from cli args
const prepareLocals = locales ? locales.split(',') : ['en', 'ar']
const duplicateError = []

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

console.log(nfo('Intl Preparing'))
console.log(nfo('Preparing translators files'))

/* Collect Translation Messages
 *  Aggregates the translated messages if exists for all languages,
 *  collect translated messages Ids `translatedMessagesIDs`
 *  and all translated messages by language `translatedMessages`
 */
const translatedMessagesIDs = new Set()
const translatedMessages = globSync(`${translatedDir}/**/*.json`)
  .reduce((collection, filepath) => {
    const newColl = collection

    const fdata = JSON.parse(fs.readFileSync(filepath, 'utf8'))
    const [fn0, fn1] = filepath.replace(translatedDir, '').split(/\//g)
    const fname = fn0 === '' ? fn1 : fn0

    Object.keys(fdata).forEach((val) => {
      translatedMessagesIDs.add(val)
    })

    if (!newColl[fname]) {
      newColl[fname] = fdata
    } else {
      newColl[fname] = Object.assign({},
        newColl[fname],
        fdata
      )
    }
    return newColl
  }, {})

/* console.log block */
{
  const existLangs = Object.keys(translatedMessages)
  const isExistLangs = existLangs.length ? existLangs.length : 'None'
  console.log(nfo('Existing Translation'), isExistLangs)
  existLangs.forEach((langKey) => {
    const transMsgCount = Object.keys(translatedMessages[langKey]).length
    console.log(
      nfo('  Lang:'), langKey,
      nfo('  Messages:'), transMsgCount)
  })
} /* console.log block */


// Create a language code Array with unieq values
const prepareTranslations = [
  ...prepareLocals,
  ...Object.keys(translatedMessages),
].reduce((langSet, lang) => {
  const notDuplicte = !langSet.find((el) => el === lang)
  const notEmpty = lang !== ''
  if (notDuplicte && notEmpty) langSet.push(lang)
  return langSet
}, [])

/* console.log block */
{
  const newLangs = prepareTranslations.reduce((coll, lang) => {
    if (!translatedMessages[lang]) coll.push(lang)
    return coll
  }, [])
  console.log(nfo('New Targeted Languages:'), newLangs.length ? `${newLangs}` : 'None')
  console.log(nfo('Targeted Languages:'), `${prepareTranslations}`)
} /* console.log block */

// Aggregates the default messages that were extracted from the app's
// via the React Intl Babel plugin. An error will be thrown if there are messages
// in different components that use the same `id`.
const defaultMessages = globSync(extractedfiles)
  .map((filename) => {
    let filepath = filename.split(/\//g)
    filepath = filepath.slice(filepath.findIndex((el) => el === 'src') + 1)
    return {
      filepath,
      messages: JSON.parse(fs.readFileSync(filename, 'utf8')),
    }
  })
  .reduce((collection, { filepath, messages }) => {
    const newColl = collection
    messages.forEach(({ id, defaultMessage, description }) => {
      if (newColl[id]) {
        duplicateError.push(`${err('Duplicate message id:')} ${id}`)
      }

      newColl[id] = {
        filepath,
        description,
        message: defaultMessage,
      }
    })

    return newColl
  }, {})

// error if duplicate message ids
if (duplicateError.length) {
  console.error(err('\nError:'))
  console.error(duplicateError.join('\n'), '\n')
  process.exit(1)
  // throw new Error("Duplicate Message IDs in Extracted Translations")
}


/* console.log block */
{
  const defMesg = Object.keys(defaultMessages)
  const newMesg = Array.from(new Set(defMesg.filter((msgid) => {
    return !translatedMessagesIDs.has(msgid)
  })))
  console.log(nfo('Extracted Messages:'))
  console.log(
    nfo('  New:'), newMesg.length,
    nfo('  Total:'), defMesg.length,
  )
} /* console.log block */

const translationMessages = prepareTranslations
  .reduce((coll, lang) => {
    const newColl = coll
    newColl[lang] = Object.keys(defaultMessages)
      .reduce((langMsg, msgkey) => {
        const newLangMsg = langMsg
        const dm = defaultMessages[msgkey]
        const tm = translatedMessages[lang] || {}
        const msg = (tm[msgkey] || {})

        let isDescriptionChanged = msg.message && (msg.description !== dm.description)
        let isMessageChanged = msg.defaultMessages && (msg.defaultMessages !== dm.message)
        const isChanged = isMessageChanged && isDescriptionChanged
        isDescriptionChanged = isDescriptionChanged ? 'description' : false
        isMessageChanged = isMessageChanged ? 'message' : false

        newLangMsg[msgkey] = {
          filepath: dm.filepath,
          changed: isChanged || isMessageChanged || isDescriptionChanged,
          description: defaultMessages[msgkey].description,
          defaultMessages: dm.message,
          message: msg.message ? msg.message : dm.message,
        }

        if (isMessageChanged) {
          newLangMsg[msgkey].defaultMessages = dm.message
        }

        return newLangMsg
      }, {})
    return newColl
  }, {})

const translationFiles = Object.entries(translationMessages)
  .reduce((coll, [langId, transData]) => {
    coll[langId] = Object.entries(transData)
      .reduce((fColl, [id, val]) => {
        const fpath = val.filepath.join('/')
        delete val.filepath
        if (!isObject(fColl[fpath])) {
          fColl[fpath] = {}
        }
        fColl[fpath][id] = val
        return fColl
      }, {})
    return coll
  }, {})


// Write the messages to this directory
mkdirpSync(translatedDir)
Object.entries(translationFiles).forEach(([lang, langFilesData]) => {
  Object.entries(langFilesData).forEach(([filepath, fileData]) => {
    const dirpath = filepath.split(/\//g).slice(0, -1).join('/')

    mkdirpSync(`${translatedDir}/${lang}/${dirpath}`)

    fs.writeFileSync(
      `${translatedDir}/${lang}/${filepath}`,
      JSON.stringify(fileData, null, 2)
    )
  })
})


console.log(nfo('Updated Translation Files save to:'), translatedDir)
