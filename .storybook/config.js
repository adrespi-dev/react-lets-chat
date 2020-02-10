import { configure, addParameters } from '@storybook/react';
import appTheme from './appTheme';

// automatically import all files ending in *.stories.js
addParameters({
  options: {
    theme: appTheme,
  },
});

configure(
  [
    require.context('../src', true, /\.stories\.js$/),
  ],
  module
);