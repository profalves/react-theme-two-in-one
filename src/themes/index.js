import theme from 'styled-theming';

// define background colours for `mode` theme
export const backgroundColor = theme('mode', {
  light: '#ddd',
  dark: '#333'
});
// define text color for `mode` theme
export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

export const headerBackground = theme('mode', {
  light: '#fafafa',
  dark: '#222'
})