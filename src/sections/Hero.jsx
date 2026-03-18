import { Box, Typography, Container } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';

import { useInView } from 'react-intersection-observer';
import homeVideo from '../public/FOTOS/home_page_web.mp4';

export default function Hero() {
    const videoRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
      }, []);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
      className="parallax-bg"
    >
        <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed', 
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      >
        <source src={homeVideo} type="video/mp4" />
      </video>
      <Container
        ref={ref}
        sx={{ 
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontFamily: 'Montserrat', letterSpacing: '0.2em' }}>
          O CASAMENTO DE
        </Typography>
        
        <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '4rem', md: '7rem' } }}>
          Alecsander & Tainah
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 2, md: 4 }, 
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          <Typography variant="h6" sx={{ letterSpacing: '0.1em' }}>
            24 • 04 • 2026
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' }, width: '1px', height: '24px', bgcolor: 'rgba(255,255,255,0.5)' }} />
          <Typography variant="h6" sx={{ letterSpacing: '0.1em' }}>
            CURITIBA, PARANÁ
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
