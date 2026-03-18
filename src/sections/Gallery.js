import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors } from '../theme';

import maceio2 from '../public/FOTOS/maceio2.jpg';
import maceio3 from '../public/FOTOS/maceio3.jpg';
import maceio4 from '../public/FOTOS/maceio4.jpg';
import pico from '../public/FOTOS/pico_malwee.jpg';
import salton from '../public/FOTOS/salton.jpg';



const photos = [
 
  { src: maceio4, span: 2 },
  { src: pico, span: 2 },
  { src: salton, span: 1 },
   { src: maceio3, span: 1 },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const prev = () => setSelected(s => (s > 0 ? s - 1 : photos.length - 1));
  const next = () => setSelected(s => (s < photos.length - 1 ? s + 1 : 0));

  return (
    <Box id="galeria" sx={{ py: { xs: 8, md: 14 }, background: colors.white }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, px: 3 }}>
        <Typography variant="h6" sx={{ color: 'text.primary', letterSpacing: '0.35em', fontSize: '0.7rem', mb: 2 }}>
          MEMÓRIAS
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: colors.darkBrown, fontStyle: 'italic' }}>
          Nossa Galeria
        </Typography>
        <Box sx={{ width: 60, height: 1, background: colors.gold, mx: 'auto', mt: 3 }} />
      </Box>

      {/* Grid de fotos */}
      <Box sx={{
        px: { xs: 1, md: 4 }, maxWidth: 1200, mx: 'auto',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
        gap: { xs: 1, md: 2 },
      }}>
        {photos.map((photo, i) => (
          <Box
            key={i}
            onClick={() => setSelected(i)}
            sx={{
              gridColumn: { xs: 'span 1', md: `span ${photo.span}` },
              aspectRatio: photo.span === 2 ? '16/9' : '1',
              overflow: 'hidden', cursor: 'pointer', position: 'relative',
              background: colors.gradientGold,
              '&:hover img': { transform: 'scale(1.06)' },
              '&:hover::after': { opacity: 1 },
              '&::after': {
                content: '""', position: 'absolute', inset: 0,
                background: colors.darkTransparent, opacity: 0,
                transition: 'opacity 0.4s ease', zIndex: 1,
              },
            }}
          >
            <Box component="img" src={photo.src} alt={`Foto ${i + 1}`}
              sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </Box>
        ))}
      </Box>

      {/* Lightbox */}
      <Modal open={selected !== null} onClose={() => setSelected(null)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.95)' }}>
        <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', outline: 'none' }}>
          <IconButton onClick={() => setSelected(null)}
            sx={{ position: 'absolute', top: -50, right: 0, color: '#fff', zIndex: 1 }}>
            <CloseIcon />
          </IconButton>
          {selected !== null && (
            <Box component="img" src={photos[selected].src} alt=""
              sx={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', display: 'block' }} />
          )}
          <IconButton onClick={prev}
            sx={{ position: 'absolute', left: -60, top: '50%', transform: 'translateY(-50%)', color: '#fff' }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={next}
            sx={{ position: 'absolute', right: -60, top: '50%', transform: 'translateY(-50%)', color: '#fff' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
}
