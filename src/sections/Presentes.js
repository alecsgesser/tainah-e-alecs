import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChurchIcon from '@mui/icons-material/Church';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import FlatwareIcon from '@mui/icons-material/Flatware';
import PixIcon from '@mui/icons-material/Pix';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const cards = [
  {
    icon: CardGiftcardIcon, title: 'Presente Criativo',
    details: ['Usar a criatividade para nos brindar com um momento para curtir juntinhos ou qualquer experiência que vire memória boa.'],
    map: 'https://maps.app.goo.gl/gCb91HLouriZW7KH8',
  },
  {
    icon: PixIcon,  title: 'Pix Misterioso',
    details: ['Mas se a sua criatividade estiver de férias, um pix misterioso para ajudar na nossa futura lua de mel também vai fazer a gente sorrir do mesmo jeito.'],
    map: 'https://maps.app.goo.gl/gCb91HLouriZW7KH8',
  },
 
 
];

export default function PresentesDetails() {
  return (
    <Box id="evento" sx={{
      py: { xs: 8, md: 14 },
      background: '#faf8f5',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Foto de fundo com overlay */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/FOTOS/venue.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.07,
      }} />

      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography variant="h6" sx={{ color: '#c9a96e', letterSpacing: '0.35em', fontSize: '0.7rem', mb: 2 }}>
            INFORMAÇÕES
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: '#2c1f14', fontStyle: 'italic' }}>
            Presentes
          </Typography>
          <Box sx={{ width: 60, height: 1, background: '#c9a96e', mx: 'auto', mt: 3, mb: 2 }} />
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Typography sx={{ color: '#6b5b4e', fontSize: '0.9rem', fontWeight: 300 }}>
            Somos um casal com destino ainda incerto neste Brasilzão e, por isto, no momento não queremos presentes para guardar ou preencher o nosso atual lar. 
            Se quiser nos presentear, você pode:
            
          </Typography></Box>
          <Typography sx={{ color: '#6b5b4e', fontSize: '0.9rem', fontWeight: 300 }}>
            
            
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex' , alignContent: 'center'}}>
                <Box sx={{
                  background: '#fff', p: 4, height: '100%',
                  border: '1px solid #f0ebe4',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 50px rgba(44,31,20,0.1)' },
                  '&::before': {
                    content: '""', position: 'absolute', top: 0, left: 0, right: 0,
                    height: 3, background: 'linear-gradient(to right, #c9a96e, #e8d5b0)',
                  },
                }}>
                  <Typography sx={{ color: '#c9a96e', fontSize: '0.65rem', letterSpacing: '0.3em', mb: 2 }}>
                    {card.label}
                  </Typography>
                  <Icon sx={{ color: '#2c1f14', fontSize: 32, mb: 2 }} />
                  <Typography variant="h5" sx={{ fontSize: '1.1rem', color: '#2c1f14', mb: 2, lineHeight: 1.3 }}>
                    {card.title}
                  </Typography>
                  {card.details.map((d, j) => (
                    <Typography key={j} sx={{ color: '#6b5b4e', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.8 }}>
                      {d}
                    </Typography>
                  ))}
                  {card.map && (
                    <Box component="a" href={card.map} target="_blank" rel="noopener"
                      sx={{
                        display: 'inline-flex', alignItems: 'center', gap: 0.5,
                        mt: 3, color: '#c9a96e', fontSize: '0.7rem', letterSpacing: '0.15em',
                        textDecoration: 'none', borderBottom: '1px solid #c9a96e',
                        pb: 0.2, transition: 'opacity 0.2s',
                        '&:hover': { opacity: 0.7 },
                      }}>
                      <LocationOnIcon sx={{ fontSize: 14 }} /> VER NO MAPA
                    </Box>
                  )}
                </Box>
              </Grid>
            );
          })}
        </Grid>

        
      </Box>
    </Box>
  );
}
