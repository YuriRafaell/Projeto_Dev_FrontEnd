import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Contato() {
  const contato1 = '5584987524800'; // Substitua pelo número de telefone real
  const contato2 = '0987654321'; // Substitua pelo número de telefone real

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden',
        backgroundColor: '#4f43cb', // Cor de fundo igual à da Home
        color: 'white', // Cor do texto
      }}
    >
      <Box
        sx={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Entre em Contato
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
          Recebeu o seu visto? Para manter nosso banco de dados sempre atualizado e garantir a
          precisão das informações, entre em contato conosco assim que receber o visto.
          
          Sua colaboração é importante para garantir que todos os dados estejam corretos.
          
          Estamos aqui para ajudar!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            href={`https://wa.me/${contato1}`}
            target="_blank"
            sx={{ mb: 1, width: '100%', backgroundColor: '#ffffff', color: '#4f43cb' }}
          >
            Contato 1 no WhatsApp
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href={`https://wa.me/${contato2}`}
            target="_blank"
            sx={{ width: '100%', backgroundColor: '#ffffff', color: '#4f43cb' }}
          >
            Contato 2 no WhatsApp
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contato;
