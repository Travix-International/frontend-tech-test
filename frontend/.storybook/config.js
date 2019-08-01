import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from '../src/app/assets/themes/theme';

const themes = [theme];
addDecorator(withThemesProvider(themes));

function loadStories() {
  require('../src/stories/Message.js');
  require('../src/stories/Section.js');
  require('../src/stories/Input.js');
  require('../src/stories/Button.js');
}

configure(loadStories, module);
