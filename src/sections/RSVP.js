import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Alert, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '../theme';

export default function RSVP() {
  const [form, setForm] = useState({ name: '', email: '', attendance: 'yes', guests: '1', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': { borderColor: '#e8d5b0' },
      '&:hover fieldset': { borderColor: colors.gold },
      '&.Mui-focused fieldset': { borderColor: colors.gold },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: colors.gold },
    '& .MuiInputBase-root': { fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300 },
  };

  return (
    <Box id="rsvp" sx={{
      py: { xs: 8, md: 14 },
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #2c1f14 0%, #3d2b1a 50%, #2c1f14 100%)',
    }}>
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/FOTOS/rsvp-bg.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.12,
      }} />
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)`,
      }} />

      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 700, mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <FavoriteIcon sx={{ color: colors.gold, fontSize: 20, mb: 2 }} />
          <Typography variant="h6" sx={{ color: colors.gold, letterSpacing: '0.35em', fontSize: '0.7rem', mb: 2 }}>
            CONFIRME SUA PRESENÇA
          </Typography>
          <Typography variant="h2" sx={{ color: colors.white, fontSize: { xs: '2.5rem', md: '4rem' }, fontStyle: 'italic', mb: 2 }}>
            RSVP
          </Typography>
          <Typography sx={{ color: colors.whiteTransparent, fontSize: '0.85rem', fontWeight: 300 }}>
            Por favor, confirme sua presença até 14 de Maio de 2025
          </Typography>
        </Box>

        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <CheckCircleOutlineIcon sx={{ color: colors.gold, fontSize: 64, mb: 3 }} />
            <Typography variant="h4" sx={{ color: colors.white, fontStyle: 'italic', mb: 2 }}>
              Obrigado, {form.name}!
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
              Sua confirmação foi recebida. Mal podemos esperar para celebrar com você!
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Seu Nome" name="name" value={form.name}
                  onChange={handleChange} required sx={inputSx}
                  InputLabelProps={{ sx: { fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '0.85rem' } }}
                  inputProps={{ style: { color: colors.darkBrown, background: colors.white } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="E-mail" name="email" type="email" value={form.email}
                  onChange={handleChange} required sx={inputSx}
                  InputLabelProps={{ sx: { fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '0.85rem' } }}
                  inputProps={{ style: { color: '#2c1f14', background: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ background: 'rgba(255,255,255,0.05)', p: 3, border: '1px solid rgba(201,169,110,0.2)' }}>
                  <FormLabel sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.15em', display: 'block', mb: 1.5 }}>
                    VOCÊ VEM?
                  </FormLabel>
                  <RadioGroup row name="attendance" value={form.attendance} onChange={handleChange}>
                    {[['yes', 'Sim, estarei lá! 🎉'], ['no', 'Infelizmente não poderei 😢']].map(([v, l]) => (
                      <FormControlLabel key={v} value={v} label={l}
                        control={<Radio sx={{ color: '#c9a96e', '&.Mui-checked': { color: '#c9a96e' } }} />}
                        sx={{ '& .MuiFormControlLabel-label': { color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 300 } }}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              </Grid>
              {form.attendance === 'yes' && (
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Número de convidados" name="guests" type="number"
                    value={form.guests} onChange={handleChange} inputProps={{ min: 1, max: 5, style: { color: '#2c1f14', background: '#fff' } }}
                    sx={inputSx}
                    InputLabelProps={{ sx: { fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '0.85rem' } }}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Mensagem para os noivos (opcional)"
                  name="message" value={form.message} onChange={handleChange} sx={inputSx}
                  InputLabelProps={{ sx: { fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '0.85rem' } }}
                  inputProps={{ style: { color: '#2c1f14', background: '#fff' } }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button type="submit" disabled={loading}
                  sx={{
                    background: 'linear-gradient(135deg, #c9a96e, #e8d5b0)',
                    color: '#2c1f14', px: 8, py: 2,
                    fontSize: '0.75rem', letterSpacing: '0.2em',
                    fontWeight: 400,
                    '&:hover': { background: 'linear-gradient(135deg, #b8924a, #c9a96e)' },
                    '&:disabled': { opacity: 0.6 },
                  }}>
                  {loading ? 'ENVIANDO...' : 'CONFIRMAR PRESENÇA'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}
