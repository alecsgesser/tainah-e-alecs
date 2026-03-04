import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const photos = [
  { src: '/FOTOS/gallery1.jpg', span: 2 },
  { src: '/FOTOS/gallery2.jpg', span: 1 },
  { src: '/FOTOS/gallery3.jpg', span: 1 },
  { src: '/FOTOS/gallery4.jpg', span: 1 },
  { src: '/FOTOS/gallery5.jpg', span: 1 },
  { src: '/FOTOS/gallery6.jpg', span: 2 },
  { src: '/FOTOS/gallery7.jpg', span: 1 },
  { src: '/FOTOS/gallery8.jpg', span: 1 },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const prev = () => setSelected(s => (s > 0 ? s - 1 : photos.length - 1));
  const next = () => setSelected(s => (s < photos.length - 1 ? s + 1 : 0));

  return (
    <Box id="galeria" sx={{ py: { xs: 8, md: 14 }, background: '#fff' }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, px: 3 }}>
        <Typography variant="h6" sx={{ color: '#c9a96e', letterSpacing: '0.35em', fontSize: '0.7rem', mb: 2 }}>
          MEMÓRIAS
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, color: '#2c1f14', fontStyle: 'italic' }}>
          Nossa Galeria
        </Typography>
        <Box sx={{ width: 60, height: 1, background: '#c9a96e', mx: 'auto', mt: 3 }} />
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
              background: 'linear-gradient(135deg, #e8d5b0, #c4a89a)',
              '&:hover img': { transform: 'scale(1.06)' },
              '&:hover::after': { opacity: 1 },
              '&::after': {
                content: '""', position: 'absolute', inset: 0,
                background: 'rgba(44,31,20,0.3)', opacity: 0,
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
