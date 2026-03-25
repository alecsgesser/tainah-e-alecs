import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '../theme';
import oNossoSim from '../public/FOTOS/o_nosso_sim.jpg';
import oPrimeiroEncontro from '../public/FOTOS/o_primeiro_encontro.jpg';
import oPrimeiroOlhar from '../public/FOTOS/o_primeiro_olhar.jpg';
import pedidoDeNamoro from '../public/FOTOS/pedido_namoro.jpg';
import preWedding from '../public/FOTOS/pre_wedding.jpg';

const events = [
  {
    year: '2022',
    title: '',
    desc: `Cada um vindo de um extremo do país, nos conhecemos em Curitiba quando nenhum dos dois buscava o amor.`,
    image: oPrimeiroOlhar,
    side: 'left',
  },
  {
    year: '2023',
    title: '',
    desc: `E assim, tão de repente, nos tornamos lar um para o outro sem qualquer aviso prévio.`,
    image: oPrimeiroEncontro,
    side: 'right',
  },
  {
    year: '2024',
    title: '',
    desc: `E poderíamos até dizer que nos reconhecemos naquele momento e por isto nossa história evoluiu rapidamente, mas Clarice Lispector diria: “Não me lembro mais qual foi nosso começo. Sei que não começamos pelo começo. Já era amor antes de ser.”` ,
    image: pedidoDeNamoro,
    side: 'left',
  },
  {
    year: '2025',
    title: '',
    desc: `Se o destino nos trouxe até aqui ou não, hoje somos felizes e gratos em estar preparando este momento para celebrar com aqueles que mais amamos e nos apoiaram em cada etapa: a nossa família.`,
    image: oNossoSim,
    side: 'right',
  },
  {
    year: '2026',
    title: '',
    desc: `Estamos ansiosos por este momento com vocês!`,
    image: preWedding,
    side: 'left',
  },
];

export default function OurStory() {
  return (
    <Box id="nossa-historia" sx={{ py: { xs: 8, md: 14 }, position: 'relative', background: colors.lightBackground, overflow: 'hidden' }}>
      <Box sx={{textAlign: 'center',position: 'relative', mb: { xs: 6, md: 10 }, px: 3 }}>

        <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: colors.darkBrown, fontStyle: 'italic' }}>
          Nossa História
        </Typography>
        <Box sx={{ width: 60, height: 1, background: colors.gold, mx: 'auto', mt: 3 }} />
      </Box>

      {/* Timeline */}
      <Box sx={{ position: 'relative', maxWidth: 1100,mx: 'auto', px: { xs: 2, md: 4 } }}>
        {/* Linha central */}
        <Box sx={{
          position: 'relative',
          left: '50%',top: 0, bottom: 0,
          width: 1, 
          background: colors.greenDark,
          display: { xs: 'block', md: 'block' },
        }} />

        {events.map((ev, i) => (
          <Grid container key={ev.year} spacing={0} alignItems="center" direction={ev.side === 'left' ? 'row-reverse' : 'row' }
            sx={{ mb: { xs: 6, md: 12 }}}>
            {/* Texto */}
            <Grid item xs={12} md={5}>
              <Box 
              
                sx={{
                  position: 'relative',
                pr: ev.side === 'right' ? { md: 6 } : 0,
                pl: ev.side === 'left' ? { md:6 } : 0,
                textAlign: { xs: 'center', md: ev.side === 'right' ? 'right' : 'left' },
              }}>
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '4rem', fontWeight: 300, 
                  lineHeight: 1, mb: -1, position: 'relative',
                }}>
                  {ev.year}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: colors.darkBrown, fontStyle: 'italic', mb: 2 }}>
                  {ev.title}
                </Typography>
                <Typography sx={{ color: colors.mediumBrown, lineHeight: 1.8, fontSize: '1.1rem', fontWeight: 300 }}>
                  {ev.desc}
                </Typography>
              </Box>
            </Grid>

            {/* Ícone central */}
            <Grid item md={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Box sx={{
                width: 44, height: 44, borderRadius: '50%',
                background: colors.lightBackground, border: `2px solid ${colors.greenDark}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 2,
              }}>
                <FavoriteIcon sx={{ color: colors.greenDark, fontSize: 18 }} />
              </Box>
            </Grid>

            {/* Imagem */}
            <Grid item xs={12} md={5}>
              <Box sx={{
                aspectRatio: '4/3',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                  content: '""', position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, rgba(201,169,110,0.15), transparent)`,
                  zIndex: 1,
                },
                boxShadow: '0 20px 60px rgba(44,31,20,0.15)',
                mx: { xs: 2, md: 0 },
              }}>
                <Box
                  component="img"
                  src={ev.image}
                  alt={ev.title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #e8d5b0, #c4a89a)';
                    e.target.parentElement.style.minHeight = '250px';
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
