import React from 'react';
import { storiesOf } from '@storybook/react';
import Message from '../app/components/Message';

storiesOf('Message', module)
  .add('Success', () => <Message type="success" title="Success" description="Thank you for testing my stories." />)
  .add('Error', () => <Message type="error" title="Error" description="I thought it make you happy." />)
  .add('Warning', () => <Message type="warning" title="Warning" description="Install ubuntu to support open source." />)
  .add('Info', () => (
    <Message type="info" title="Information" description="Look around! there are many resources to learn out there." />
  ));
