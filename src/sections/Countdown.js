import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '../theme';

const TARGET = new Date('2026-04-24T19:00:00');

function pad(n) { return String(n).padStart(2, '0'); }

function getTimeLeft() {
  const diff = TARGET - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const units = [
    { value: time.days, label: 'DIAS' },
    { value: time.hours, label: 'HORAS' },
    { value: time.minutes, label: 'MINUTOS' },
    { value: time.seconds, label: 'SEGUNDOS' },
  ];

  return (
    <Box sx={{
      py: { xs: 8, md: 12 },
      //background: `linear-gradient(135deg, background.dark 0%, background.dark 50%, background.dark 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decoração de fundo */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundColor: 'background.dark',
      }} />

      <Box id="999" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', px: 3 }}>
        <FavoriteIcon sx={{ color: 'background.paper', fontSize: 20, mb: 2 }} />
        <Typography variant="h2" sx={{
          color: 'text.light', fontSize: { xs: '2rem', md: '3rem' },
          fontStyle: 'italic', mb: 1,
        }}>
          Contagem Regressiva
        </Typography>
        <Box  sx={{ width: 60, height: 1, background: '#3c8d6e', mx: 'auto', mb: 6 }} />

        <Grid container spacing={0} justifyContent="center" sx={{ maxWidth: 700, mx: 'auto' }}>
          {units.map((unit, i) => (
            <Grid item xs={6} sm={3} key={unit.label}>
              <Box sx={{
                py: { xs: 3, md: 5 }, px: 1,
                //borderRight: i < 3 ? '1px solid rgba(201,169,110,0.2)' : 'none',
                //borderBottom: { xs: i < 2 ? '1px solid rgba(201,169,110,0.2)' : 'none', sm: 'none' },
              }}>
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 300, color: 'text.light', lineHeight: 1,
                  mb: 1,
                }}>
                  {pad(unit.value)}
                </Typography>
                <Typography sx={{
                  color: 'text.light',
                  fontSize: '0.65rem', letterSpacing: '0.25em',
                }}>
                  {unit.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
