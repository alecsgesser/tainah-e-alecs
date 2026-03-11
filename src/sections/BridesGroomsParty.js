import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '../theme';

const bridesmaids = [
  { name: 'Elen Pasqualli Gesser', role: 'Madrinha Principal', image: '/FOTOS/bm1.jpg' },
  { name: 'Bruno Pereira', role: 'Padrinho Principal', image: '/FOTOS/gm1.jpg' },

];

const groomsmen = [
  
];

function PersonCard({ person }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{
        width: { xs: 120, md: 160 }, height: { xs: 120, md: 160 },
        borderRadius: '50%', overflow: 'hidden',
        mx: 'auto', mb: 2, position: 'relative',
        border: `3px solid ${colors.border}`,
        background: colors.gradientGold,
        boxShadow: '0 8px 30px rgba(44,31,20,0.12)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': { transform: 'scale(1.05)', boxShadow: '0 15px 40px rgba(44,31,20,0.2)' },
      }}>
        <Box component="img" src={person.image} alt={person.name}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => { e.target.style.display = 'none'; }}
        />
      </Box>
      <Typography variant="h6" sx={{
        fontSize: '0.95rem', color: colors.darkBrown,
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic', mb: 0.5,
      }}>
        {person.name}
      </Typography>
      <Typography sx={{ color: colors.gold, fontSize: '0.65rem', letterSpacing: '0.15em' }}>
        {person.role}
      </Typography>
    </Box>
  );
}

export default function BridesGroomsParty() {
  return (
    <Box id="turma" sx={{ py: { xs: 8, md: 14 }, background: colors.white }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography variant="h6" sx={{ color: colors.gold, letterSpacing: '0.35em', fontSize: '0.7rem', mb: 2 }}>
            AS PESSOAS QUE AMAMOS
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: colors.darkBrown, fontStyle: 'italic' }}>
            Nossa Turma
          </Typography>
          <Box sx={{ width: 60, height: 1, background: colors.gold, mx: 'auto', mt: 3 }} />
        </Box>

        {/* Damas */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 6, gap: 3 }}>
            <Box sx={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, #e8d5b0)` }} />
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: colors.darkBrown, fontStyle: 'italic', whiteSpace: 'nowrap' }}>
              Damas de Honra
            </Typography>
            <Box sx={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, #e8d5b0)` }} />
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {bridesmaids.map((p, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <PersonCard person={p} />
              </Grid>
            ))}
          </Grid>
        </Box>

       

     
      </Box>
    </Box>
  );
}
