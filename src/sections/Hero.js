import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import hero from '../public/FOTOS/hero.jpg'; // Adjust the path as necessary

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <Box id="inicio" sx={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#1a1008',
    }}>
      {/* Imagem de fundo */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${hero})`,
        backgroundRepeat: 'repeat-x',
        
        /* backgroundPosition: 'center down', */
        backgroundPosition: { xs: 'center 40%', md: '140% 40%'},
        backgroundSize: 'contain',
        opacity: loaded ? 0.65 : 0,
        transition: 'opacity 1.2s ease',
        transform: 'scale(1.03)',
      }} />

      {/* Overlay gradiente */}
      <Box sx={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(26,16,8,0.3) 0%, rgba(26,16,8,0.5) 50%, rgba(26,16,8,0.8) 100%)',
      }} />

      {/* Decoração de cantos */}
      {['top left', 'top right', 'bottom left', 'bottom right'].map((pos, i) => {
        const [v, h] = pos.split(' ');
        return (
          <Box key={i} sx={{
            position: 'absolute',
            [v]: { xs: 20, md: 40 },
            [h]: { xs: 20, md: 40 },
            width: { xs: 50, md: 80 },
            height: { xs: 50, md: 80 },
            borderTop: v === 'top' ? '1px solid rgba(201,169,110,0.6)' : 'none',
            borderBottom: v === 'bottom' ? '1px solid rgba(201,169,110,0.6)' : 'none',
            borderLeft: h === 'left' ? '1px solid rgba(201,169,110,0.6)' : 'none',
            borderRight: h === 'right' ? '1px solid rgba(201,169,110,0.6)' : 'none',
            opacity: loaded ? 1 : 0,
            transition: `opacity 1s ease ${0.8 + i * 0.15}s`,
          }} />
        );
      })}

      {/* Conteúdo */}
      <Box sx={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', px: 3,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
      }}>
        <Typography variant="h6" sx={{
          color: '#c9a96e', fontSize: { xs: '0.7rem', md: '0.8rem' },
          letterSpacing: '0.4em', mb: 3, fontWeight: 300,
        }}>
          CONVIDAMOS VOCÊ PARA CELEBRAR
        </Typography>

        <Typography variant="h1" sx={{
          fontSize: { xs: '4rem', sm: '6rem', md: '8rem', lg: '10rem' },
          color: '#fff', lineHeight: 0.85, letterSpacing: '-0.02em',
          fontStyle: 'italic', mb: 2,
        }}>
          Tainah
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 2 }}>
          <Box sx={{ height: '1px', width: { xs: 50, md: 100 }, background: 'linear-gradient(to right, transparent, #c9a96e)' }} />
          <Typography sx={{ color: '#c9a96e', fontSize: { xs: '1.2rem', md: '1.8rem' }, fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
            &amp;
          </Typography>
          <Box sx={{ height: '1px', width: { xs: 50, md: 100 }, background: 'linear-gradient(to left, transparent, #c9a96e)' }} />
        </Box>

        <Typography variant="h1" sx={{
          fontSize: { xs: '4rem', sm: '6rem', md: '8rem', lg: '10rem' },
          color: '#fff', lineHeight: 0.85, letterSpacing: '-0.02em',
          fontStyle: 'italic', mb: 4,
        }}>
          Alecsander
        </Typography>

        <Typography variant="h6" sx={{
          color: 'rgba(255,255,255,0.8)', fontSize: { xs: '0.8rem', md: '0.9rem' },
          letterSpacing: '0.3em', mb: 5, fontWeight: 300,
        }}>
          24 DE ABRIL DE 2026 · CURITIBA, PARANÁ
        </Typography>

        <Button
          href="#nossa-historia"
          variant="outlined"
          sx={{
            color: '#fff', borderColor: 'rgba(255,255,255,0.5)',
            px: 5, py: 1.5,
            fontSize: '0.7rem', letterSpacing: '0.2em',
            '&:hover': { borderColor: '#c9a96e', color: '#c9a96e', background: 'rgba(201,169,110,0.05)' },
            transition: 'all 0.3s ease',
          }}
        >
          NOSSA HISTÓRIA
        </Button>
      </Box>

      {/* Scroll arrow */}
      <Box sx={{
        position: 'absolute', bottom: 40, left: '50%',
        transform: 'translateX(-50%)',
        opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.5s',
        animation: 'bounce 2s infinite',
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(10px)' },
        },
      }}>
        <KeyboardArrowDownIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 36 }} />
      </Box>
    </Box>
  );
}
