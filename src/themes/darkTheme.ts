import { DefaultTheme } from 'styled-components';

export const DarkTheme: DefaultTheme = {
  border: {
    radius: '20px',
  },
  fonts: {
    main: 'Quicksand, sans-serif',
    code: 'Roboto Mono, monospace',
  },
  colors: {
    main: {
      body: 'black',
      text: 'white',
      toggleBorder: '#6B8096',
      background: '#999',
    },
    secondary: {
      body: 'black',
      text: 'white',
      toggleBorder: '#6B8096',
      background: 'black',
    },
  },
};
