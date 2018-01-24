import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { IntlProvider } from 'react-intl'

import { makeSelectLanguage } from 'selectors/shared'

function LanguageProvider(props) {
  const {
    children,
    locale,
    messages,
  } = props

  return (
    <IntlProvider
      key={locale}
      locale={locale}
      messages={messages[locale]}
    >
      {React.Children.only(children)}
    </IntlProvider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
}

const mapStateToProps = createSelector(
  makeSelectLanguage,
  locale => ({ locale }),
)

export default connect(mapStateToProps)(LanguageProvider)
