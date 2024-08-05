import React from 'react';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';


function Navbar() {
  return (
    <AppBar position="static" sx={{ width: '100%', margin: '0 16px', background: 'linear-gradient(to right, #3533cd, black)', boxShadow: 'none' }}>
      <Container maxWidth="lg"> {/* Definindo um maxWidth */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '-38px' }}>
            <ScheduleSendIcon sx={{ fontSize: 40, mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              VISTO
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" href="/" sx={{
              '&:hover': { backgroundColor: '#4f43cb' },
              '&:active': { backgroundColor: '#4f43cb' },
            }}>Home</Button>
            <Button color="inherit" href="/Form" sx={{
              '&:hover': { backgroundColor: '#4f43cb' },
              '&:active': { backgroundColor: '#4f43cb' },
            }}>Formulário</Button>
            <Button color="inherit" href="/Visto" sx={{
              '&:hover': { backgroundColor: '#4f43cb' },
              '&:active': { backgroundColor: '#4f43cb' },
            }}>Tabela</Button>
            <Button color="inherit" href="/dicas" sx={{
              '&:hover': { backgroundColor: '#4f43cb' },
              '&:active': { backgroundColor: '#4f43cb' },
            }}>Dicas</Button>
            <Button color="inherit" href="/Contatos" sx={{
              '&:hover': { backgroundColor: '#4f43cb' },
              '&:active': { backgroundColor: '#4f43cb' },
            }}>Contatos</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
