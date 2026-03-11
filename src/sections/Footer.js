import React from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import { colors } from '../theme';

export default function Footer() {
  return (
    <Box sx={{
      background: colors.darkBackground,
      py: { xs: 6, md: 10 },
      textAlign: 'center', px: 3,
    }}>
      <Typography variant="h3" sx={{
        color: colors.white, fontStyle: 'italic',
        fontSize: { xs: '2.5rem', md: '4rem' },
        mb: 1,
      }}>
        Tainah <span style={{ color: colors.gold, fontStyle: 'normal', fontSize: '0.7em' }}>✦</span> Alecsander
      </Typography>

      <Typography sx={{ color: colors.whiteTransparent, fontSize: '0.7rem', letterSpacing: '0.3em', mb: 5 }}>
        24 DE MAIO DE 2026
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 5 }}>
        {[
          { label: 'Nossa História', href: '#nossa-historia' },
          { label: 'Galeria', href: '#galeria' },
          { label: 'O Evento', href: '#evento' },
          { label: 'RSVP', href: '#rsvp' },
        ].map(item => (
          <Box key={item.label} component="a" href={item.href}
            sx={{
              color: colors.whiteTransparent, fontSize: '0.65rem',
              letterSpacing: '0.15em', textDecoration: 'none',
              transition: 'color 0.2s',
              display: { xs: 'none', sm: 'block' },
              '&:hover': { color: colors.gold },
            }}>
            {item.label.toUpperCase()}
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 4 }}>
        <Box sx={{ width: 60, height: '1px', background: `rgba(201,169,110,0.3)` }} />
        <FavoriteIcon sx={{ color: colors.gold, fontSize: 16 }} />
        <Box sx={{ width: 60, height: '1px', background: `rgba(201,169,110,0.3)` }} />
      </Box>

      <Box component="a" href="https://instagram.com" target="_blank" rel="noopener"
        sx={{
          display: 'inline-flex', alignItems: 'center', gap: 1,
          color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
          fontSize: '0.7rem', letterSpacing: '0.15em', mb: 4,
          '&:hover': { color: colors.gold }, transition: 'color 0.2s',
        }}>
        <InstagramIcon sx={{ fontSize: 18 }} />
        @alecsgesser
      </Box>

      <Typography sx={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.65rem' }}>
        © 2025 Tainah & Alecsander · Com amor ❤
      </Typography>
    </Box>
  );
}
