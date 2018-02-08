import React, { Children, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

export class LanguageProvider extends PureComponent {
  render() {
    const { locale, messages, children } = this.props;

    return (
      <IntlProvider locale={locale} key={locale} messages={messages[locale]}>{Children.only(children)}</IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale })
);

export default connect(mapStateToProps)(LanguageProvider);
