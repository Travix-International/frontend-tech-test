import React from 'react';
import { storiesOf, configure, addDecorator, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import infoAddon from '@storybook/addon-info';

import { specs, describe, it } from 'storybook-addon-specifications'

import {mount} from "enzyme";
import expect from "expect";

const store = storiesOf({}, module)
const req = require.context('./../src/components', true, /.stories.js$/)
setAddon(infoAddon);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)