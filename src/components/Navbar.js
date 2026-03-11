import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemText, useMediaQuery, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { colors } from '../theme';

const navItems = [
  { label: 'Nossa História', href: '#nossa-historia' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'O Evento', href: '#evento' },
  { label: 'Nossa Turma', href: '#turma' },
  { label: 'Confirmar Presença', href: '#rsvp' },
];

export default function Navbar({ scrolled }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navStyle = {
    backgroundColor: scrolled ? 'rgba(250,248,245,0.97)' : 'transparent',
    boxShadow: scrolled ? '0 1px 20px rgba(44,31,20,0.08)' : 'none',
    transition: 'all 0.4s ease',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
  };

  const linkColor = scrolled ? colors.darkBrown : colors.white;

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={navStyle}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 2, md: 6 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FavoriteIcon sx={{ color: colors.gold, fontSize: 16 }} />
            <Box sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              fontWeight: 400,
              color: scrolled ? colors.darkBrown : colors.white,
              letterSpacing: '0.05em',
              transition: 'color 0.4s ease',
            }}>
              Tainah <span style={{ color: colors.gold, fontSize: '0.8em' }}>✦</span> Alecsander
            </Box>
          </Box>

          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: linkColor }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {navItems.map(item => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: linkColor,
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: colors.gold, backgroundColor: 'transparent' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, background: colors.lightBackground } }}>
        <Box sx={{ p: 3 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ mb: 3 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map(item => (
              <ListItem key={item.label} component="a" href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ py: 2, textDecoration: 'none', borderBottom: `1px solid ${colors.border}` }}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 300,
                    letterSpacing: '0.12em',
                    fontSize: '0.85rem',
                    color: colors.darkBrown,
                    textTransform: 'uppercase',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
