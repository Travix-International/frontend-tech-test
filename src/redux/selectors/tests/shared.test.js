import { fromJS } from 'immutable'

import {
  selectSettings,
  makeSelectLanguage,
} from 'redux/selectors/shared'

describe('selectSettings', () => {
  it('should select the settings domain', () => {
    const settingsState = fromJS({
      language: 'es',
    })
    const mockedState = fromJS({
      settings: settingsState,
    })

    expect(selectSettings(mockedState)).toEqual(settingsState)
  })
})

describe('makeSelectLanguage', () => {
  const selectLanguage = makeSelectLanguage()

  it('should select the language', () => {
    const language = 'de'
    const mockedState = fromJS({
      settings: { language },
    })

    expect(selectLanguage(mockedState)).toEqual(language)
  })
})
