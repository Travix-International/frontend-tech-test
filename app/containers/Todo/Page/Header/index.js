import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from '../../messages';
import Wrapper from './Wrapper';
import Label from './Label';

const TodoHeader = () => {
  return (
    <Wrapper>
      <Label>
        <FormattedMessage {...messages.title} />
      </Label>
      <Label>
        <FormattedMessage {...messages.description} />
      </Label>
      <Label></Label>
    </Wrapper>
  );
};

export default TodoHeader;
