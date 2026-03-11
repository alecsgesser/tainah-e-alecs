import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
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
