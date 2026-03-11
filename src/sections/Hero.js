import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colors } from '../theme';
import homeVideo from '../public/FOTOS/home_page_web.mp4';
export default function Hero() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      id="inicio"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
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

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Decoration Elements */}
      {['top left', 'top right', 'bottom left', 'bottom right'].map((pos, i) => {
        const [v, h] = pos.split(' ');
        return (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              zIndex: 2,
              [v]: { xs: 20, md: 40 },
              [h]: { xs: 20, md: 40 },
              width: { xs: 50, md: 80 },
              height: { xs: 50, md: 80 },
              borderTop: v === 'top' ? `1px solid ${colors.goldTransparent}` : 'none',
              borderBottom: v === 'bottom' ? `1px solid ${colors.goldTransparent}` : 'none',
              borderLeft: h === 'left' ? `1px solid ${colors.goldTransparent}` : 'none',
              borderRight: h === 'right' ? `1px solid ${colors.goldTransparent}` : 'none',
              opacity: loaded ? 1 : 0,
              transition: `opacity 1s ease ${0.8 + i * 0.15}s`,
            }}
          />
        );
      })}

      {/* Foreground Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: 3,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
        }}
      >
        <Typography variant="h6" sx={{ color: 'text.light', fontSize: { xs: '0.7rem', md: '0.8rem' }, letterSpacing: '0.4em', mb: 3, fontWeight: 500 }}>
          CONVIDAMOS VOCÊ PARA CELEBRAR
        </Typography>

        <Typography variant="h1" sx={{ fontSize: { xs: '4rem', md: '8rem' }, color: colors.white, fontStyle: 'italic', mb: 2 }}>
          Tainah
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 2 }}>
          <Box sx={{ height: '1px', width: 60, background: `linear-gradient(to right, transparent, ${colors.gold})` }} />
          <Typography sx={{ color: colors.gold, fontSize: '1.5rem', fontStyle: 'italic' }}>&</Typography>
          <Box sx={{ height: '1px', width: 60, background: `linear-gradient(to left, transparent, ${colors.gold})` }} />
        </Box>

        <Typography variant="h1" sx={{ fontSize: { xs: '4rem', md: '8rem' }, color: colors.white, fontStyle: 'italic', mb: 4 }}>
          Alecsander
        </Typography>

        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', letterSpacing: '0.3em', mb: 5,fontWeight: 500 }}>
          24 DE ABRIL DE 2026 · CURITIBA, PARANÁ
        </Typography>

        <Button href="#nossa-historia" variant="outlined" sx={{ color: colors.white, borderColor: 'rgba(255,255,255,0.5)', px: 5, py: 1.5 }}>
          NOSSA HISTÓRIA
        </Button>
      </Box>

      {/* Scroll arrow */}
      <Box sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
         <KeyboardArrowDownIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 36 }} />
      </Box>
    </Box>
  );
}