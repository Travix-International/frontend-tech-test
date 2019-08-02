import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../app/components/Form';

storiesOf('Button', module)
  .add('primary', () => (
    <Button id="some-id" type="primary">
      Primary
    </Button>
  ))
  .add('Secondary', () => (
    <Button id="some-id" type="secondary">
      Secondary
    </Button>
  ))
  .add('Danger', () => (
    <Button id="some-id" type="danger">
      Danger
    </Button>
  ))
  .add('Disabled', () => (
    <Button id="some-id" type="primary" disabled>
      Disabled
    </Button>
  ))
  .add('Submitting', () => (
    <Button id="some-id" type="primary" isSubmiting>
      Submitting
    </Button>
  ));
