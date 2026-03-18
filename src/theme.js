import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#c9a96e' },
    secondary: { main: '#2c1f14' },
    accent: { main: '#c9a96e' },
    background: {
      default: '#080c08b0',
      light: '#020202',
      paper: '#fff',
      dark: '#2C3424',
    },
    text: {
      primary: '#4c583eff',
      secondary: '#080807ff',
      light: '#DADED8',
      muted: '#959581',
    },
    border: '#f0ebe4',
  },
  typography: {
    fontFamily: "'Josefin Sans', sans-serif",
    h1: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 },
    h3: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 },
    h4: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 },
    h5: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 },
    h6: { fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, letterSpacing: '0.15em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          letterSpacing: '0.15em',
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 300,
        },
      },
    },
  },
});

// Custom colors object for easy access
export const colors = {
  greenDark: '#2C3424',
  green: '#4C583E',
  gold: '#c9a96e',
  darkBrown: '#2c1f14',
  mediumBrown: '#6b5b4e',
  darkBackground: '#1a1008',
  lightBackground: '#faf8f5',
  white: '#fff',
  border: '#f0ebe4',
  goldTransparent: 'rgba(201, 110, 110, 0.6)',
  whiteTransparent: 'rgba(255,255,255,0.4)',
  darkTransparent: 'rgba(44,31,20,0.1)',
  gradientGold: 'linear-gradient(to right, #c9a96e, #e8d5b0)',
};

export default theme;
