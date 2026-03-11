import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '../theme';

const events = [
  {
    year: '2019',
    title: 'O Primeiro Encontro',
    desc: 'Numa tarde de outono em São Paulo, nossos olhares se cruzaram pela primeira vez numa galeria de arte. Aquele momento simples mudaria nossas vidas para sempre.',
    image: '/FOTOS/story1.jpg',
    side: 'right',
  },
  {
    year: '2021',
    title: 'O Primeiro "Eu te amo"',
    desc: 'Dois anos de amizade e descobertas que floresceram naturalmente em amor. Numa noite estrelada à beira do mar, as palavras finalmente encontraram o caminho.',
    image: '/FOTOS/story2.jpg',
    side: 'left',
  },
  {
    year: '2023',
    title: 'O Pedido',
    desc: 'Com o pôr do sol como cenário e o coração cheio de emoção, Alecs ajoelhou-se com o anel da avó. A resposta de Tainah foi um sim que ecoou pelo horizonte.',
    image: '/FOTOS/story3.jpg',
    side: 'right',
  },
  {
    year: '2025',
    title: 'O Grande Dia',
    desc: 'Agora, convidamos as pessoas que amamos para testemunhar o início da nossa maior aventura: a vida a dois, juntos para sempre.',
    image: '/FOTOS/story4.jpg',
    side: 'left',
  },
];

export default function OurStory() {
  return (
    <Box id="nossa-historia" sx={{ py: { xs: 8, md: 14 }, background: colors.lightBackground, overflow: 'hidden' }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, px: 3 }}>
        <Typography variant="h6" sx={{ color: colors.gold, letterSpacing: '0.35em', fontSize: '0.7rem', mb: 2 }}>
          NOSSA JORNADA
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: colors.darkBrown, fontStyle: 'italic' }}>
          Nossa História
        </Typography>
        <Box sx={{ width: 60, height: 1, background: colors.gold, mx: 'auto', mt: 3 }} />
      </Box>

      {/* Timeline */}
      <Box sx={{ position: 'relative', maxWidth: 1100, mx: 'auto', px: { xs: 2, md: 4 } }}>
        {/* Linha central */}
        <Box sx={{
          position: 'absolute',
          left: '50%', top: 0, bottom: 0,
          width: 1, background: `linear-gradient(to bottom, transparent, ${colors.green} 10%, ${colors.green} 90%, transparent)`,
          display: { xs: 'none', md: 'block' },
        }} />

        {events.map((ev, i) => (
          <Grid container key={ev.year} spacing={0} alignItems="center"
            sx={{ mb: { xs: 6, md: 12 }, direction: ev.side === 'left' ? 'row-reverse' : 'row' }}>
            {/* Texto */}
            <Grid item xs={12} md={5}>
              <Box sx={{
                pr: ev.side === 'right' ? { md: 6 } : 0,
                pl: ev.side === 'left' ? { md: 6 } : 0,
                textAlign: { xs: 'center', md: ev.side === 'right' ? 'right' : 'left' },
              }}>
                <Typography sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '4rem', fontWeight: 300, color: colors.border,
                  lineHeight: 1, mb: -1, position: 'relative',
                }}>
                  {ev.year}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: colors.darkBrown, fontStyle: 'italic', mb: 2 }}>
                  {ev.title}
                </Typography>
                <Typography sx={{ color: colors.mediumBrown, lineHeight: 1.8, fontSize: '0.9rem', fontWeight: 300 }}>
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
                borderRadius: 0,
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
