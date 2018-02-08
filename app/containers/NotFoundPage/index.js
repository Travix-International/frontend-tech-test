import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const NotFound = () => {
  return (
    <article>
      <FormattedMessage {...messages.header} />
    </article>
  );
};

export default NotFound;
