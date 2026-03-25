import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChurchIcon from '@mui/icons-material/Church';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import FlatwareIcon from '@mui/icons-material/Flatware';
import GavelIcon from '@mui/icons-material/Gavel';
import WineBarIcon from '@mui/icons-material/WineBar';
import { colors } from '../theme';

const cards = [
  {
    icon: GavelIcon, label: 'CERIMÔNIA', title: 'Cartório Cajuru ',
    title2: '*somente pais e testemunhas',    
    details: ['Av. Pres. Affonso Camargo, 763', 'Cristo Rei, Curitiba - PR', '11:00 · 24 Abr 2026'],
    map: 'https://maps.app.goo.gl/1o4C1rpXP1oVGF6Q6',
  },
  {
    icon: WineBarIcon, label: 'CELEBRAÇÃO', title: 'Famiglia Fadaneli',
    title2: ' ',
    details: ['Av. Manoel Ribas, 5667', 'Santa Felicidade, Curitiba - PR', '19:00 · 24 Abr 2026'],
    map: 'https://maps.app.goo.gl/gCb91HLouriZW7KH8',
  },
 
];

export default function EventDetails() {
  return (
    <Box id="evento" sx={{
      py: { xs: 8, md: 14 },
      background: colors.lightBackground,
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
          
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: colors.darkBrown, fontStyle: 'italic' }}>
            O Evento
          </Typography>
          <Box sx={{ width: 60, height: 1, background: colors.gold, mx: 'auto', mt: 3, mb: 2 }} />
          <Typography sx={{ color: colors.mediumBrown, fontSize: '1.1rem', fontWeight: 300 }}>
            Sexta-Feira, 24 de Abril de 2026 · Curitiba, Brasil
          </Typography>
        </Box>

        <Grid  container spacing={3} sx={{justifyContent: "center",alignItems: "center",}}>
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={i} >
                <Box minHeight={'450px'}  sx={{
                  background: colors.white, p: 4, height: '100%',
                  border: `1px solid background.dark`,
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 20px 50px rgba(26, 149, 30, 0.1)' },
                  '&::before': {
                    content: '""', position: 'absolute', top: 0, left: 0, right: 0,
                    height: 4, background: colors.green,
                  },
                }}>
                  <Typography sx={{ color: colors.green, fontSize: '1rem', letterSpacing: '0.3em', mb: 2 }}>
                    {card.label}
                  </Typography>
                  <Icon sx={{ color: colors.darkBrown, fontSize: 32, mb: 2 }} />
                  <Typography variant="h5" sx={{ fontSize: '1.2rem', color: colors.darkBrown, mb: 0, lineHeight: 1.3 }}>
                    {card.title}
                  </Typography>
                  {card.title2 && (
                    <Typography variant="h6" sx={{ fontSize: '1rem', color: colors.mediumBrown, mt: 0, mb:2 }}>
                      {card.title2}
                    </Typography>
                  )}
                  {card.details.map((d, j) => (
                    <Typography key={j} sx={{ color: colors.mediumBrown, fontSize: '1rem', fontWeight: 300, lineHeight: 1.8 }}>
                      {d}
                    </Typography>
                  ))}
                  {card.map && (
                    <Box component="a" href={card.map} target="_blank" rel="noopener"
                      sx={{
                        display: 'inline-flex', alignItems: 'center', gap: 0.5,
                        mt: 3, color: colors.green, fontSize: '0.7rem', letterSpacing: '0.15em',
                        textDecoration: 'none', borderBottom: `1px solid ${colors.gold}`,
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

        {/* Dress code */}
        <Box sx={{
          mt: 8, p: { xs: 4, md: 6 },
          background: `linear-gradient(135deg, ${colors.green}, ${colors.greenDark})`,
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)',
          }} />
          <Box sx={{ position: 'relative' }}>
            <Typography sx={{ color: '#c9a96e', fontSize: '0.65rem', letterSpacing: '0.4em', mb: 2 }}>
              DRESS CODE
            </Typography>
            <Typography variant="h3" sx={{ color: '#fff', fontSize: { xs: '2.5rem', md: '4rem' }, fontStyle: 'italic', mb: 2 }}>
              Esporte Fino
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', fontWeight: 300, maxWidth: 500, mx: 'auto' }}>
              Pedimos gentilmente que os convidados evitem roupas na cor branca ou marfim em respeito à noiva.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
