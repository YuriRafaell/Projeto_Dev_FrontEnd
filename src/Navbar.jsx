import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { FaPaperPlane } from 'react-icons/fa';

function MenuComponent() {
  return (
    <AppBar position="fixed" sx={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FaPaperPlane style={{ fontSize: 30, marginRight: 10 }} />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            VISTOS
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            href="#home"
            sx={{
              '&:hover': {
                backgroundColor: '#4F43CB',
                borderRadius: '15px',
                color: 'white',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#formulario"
            sx={{
              '&:hover': {
                backgroundColor: '#4F43CB',
                borderRadius: '15px',
                color: 'white',
              },
            }}
          >
            Formulário
          </Button>
          <Button
            color="inherit"
            href="/visto"
            sx={{
              '&:hover': {
                backgroundColor: '#4F43CB',
                borderRadius: '15px',
                color: 'white',
              },
            }}
          >
            Tabela
          </Button>
          <Button
            color="inherit"
            href="/dicas"
            sx={{
              '&:hover': {
                backgroundColor: '#4F43CB',
                borderRadius: '15px',
                color: 'white',
              },
            }}
          >
            Dicas
          </Button>
          <Button
            color="inherit"
            href="/contatos"
            sx={{
              '&:hover': {
                backgroundColor: '#4F43CB',
                borderRadius: '15px',
                color: 'white',
              },
            }}
          >
            Contatos
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MenuComponent;