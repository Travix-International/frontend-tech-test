import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../app/components/Form';

storiesOf('Input', module)
  .add('Default', () => <Input onChange={value => console.log(value)} />)
  .add('With Label', () => <Input onChange={value => console.log(value)} label="Name" />)
  .add('With Placeholder', () => (
    <Input onChange={value => console.log(value)} label="Name" placeholder="What is your name?" />
  ))
  .add('With default value', () => (
    <Input onChange={value => console.log(value)} label="Name" placeholder="What is your name?" defaultValue="Siamak" />
  ))
  .add('Error on Manipulation', () => (
    <Input
      onChange={value => console.log(value)}
      label="Name"
      placeholder="What is your name?"
      error="This is required!"
    />
  ));
