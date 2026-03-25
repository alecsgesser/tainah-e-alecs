import { Box, Typography, Container } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

    const handleArrowClick = () => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    };

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
      
      <Box
        onClick={handleArrowClick}
        sx={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          animation: 'bounce 2s infinite',
          cursor: 'pointer',
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '50%': {
              transform: 'translateX(-50%) translateY(-10px)',
            },
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '0.875rem',
            fontFamily: 'Montserrat',
            letterSpacing: '0.15em',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontWeight: 300,
          }}
        >
          MAIS DETALHES
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            fontSize: '40px',
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        />
      </Box>
    </Box>
  );
}
