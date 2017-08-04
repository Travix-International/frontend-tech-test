import React from 'react'
import PropTypes from 'prop-types'
import Cookie from 'js-cookie'
import { IntlProvider, addLocaleData } from 'react-intl'

import locales from 'SRC/utils/locales'

const languageRegionCode = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage

// Split locales with a region code
const languageCode = languageRegionCode.toLowerCase().split(/[_-]+/)[0]

// TODO: check browser lang/reg if exists in locales
const userLocale = Cookie.get('userLocale') || languageCode || locales.default.code

addLocaleData(locales.default.locale)

export default class IntlWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  constructor(props) {
    super(props)

    const localeNotDefault = userLocale !== locales.default.code
    const localeExisits = userLocale in locales

    if (localeNotDefault && localeExisits) {
      locales[userLocale](({ default: { locale, messages, code } }) => {
        addLocaleData(locale)
        this.setState({ userLocal: code, messages })
      })
    }
  }

  state = {
    userLocal: locales.default.code,
    messages: locales.default.messages,
  }

  render() {
    const { userLocal, messages } = this.state
    const { children } = this.props

    return (
      <IntlProvider
        locale={userLocal}
        messages={messages}
      >
        {children}
      </IntlProvider>
    )
  }
}
