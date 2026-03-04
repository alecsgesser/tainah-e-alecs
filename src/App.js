import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Countdown from './sections/Countdown';
import OurStory from './sections/OurStory';
import Gallery from './sections/Gallery';
import EventDetails from './sections/EventDetails';
import BridesGroomsParty from './sections/BridesGroomsParty';
import RSVP from './sections/RSVP';
import Footer from './sections/Footer';
import PresentesDetails from './sections/Presentes';

const theme = createTheme({
  palette: {
    primary: { main: '#c9a96e', light: '#e8d5b0', dark: '#a07840' },
    secondary: { main: '#8b6f5e', light: '#c4a89a', dark: '#5c3d2e' },
    background: { default: '#faf8f5', paper: '#fff' },
    text: { primary: '#2c1f14', secondary: '#6b5b4e' },
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

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar scrolled={scrolled} />
      <Hero />
      <Countdown />
      <OurStory />
      <Gallery />
      <EventDetails />
      <PresentesDetails/>
      
     
      <Footer />
    </ThemeProvider>
  );
}
