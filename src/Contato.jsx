import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Contato() {
  const contato1 = '5584987524800';
  const contato2 = '5584988715609'; 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '82vh',
        overflow: 'hidden',
        color: 'white', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 2, 
      }}
    >
      <Box
        sx={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          maxWidth: '600px',
          margin: '2em', 
          textAlign: 'left', 
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Entre em Contato
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 2 }}>
          Recebeu o seu visto? Para manter nosso banco de dados sempre atualizado e garantir a
          precisão das informações, entre em contato conosco assim que receber o visto.
          <br></br>
          <br></br>
          Sua colaboração é importante para garantir que todos os dados estejam corretos.
          <br></br>
          <br></br>
          Estamos aqui para ajudar!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', 
          width: '100%',
          maxWidth: '200px',
          margin: '2em', 
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href={`https://wa.me/${contato1}`}
          target="_blank"
          sx={{ mb: 1, width: '20em', maxWidth: '200px', backgroundColor: '#25D366', color: '#4f43cb', '&:hover': {
              color: '#ffffff', 
            },}}
        >
          Contato de Yuri no WhatsApp
        </Button>
        <Button
          variant="contained"
          color="primary"
          href={`https://wa.me/${contato2}`}
          target="_blank"
          sx={{ width: '20em', maxWidth: '200px', backgroundColor: '#25D366', color: '#4f43cb', '&:hover': {
              color: '#ffffff', 
            }, }}
        >
          Contato de Soraya no WhatsApp
        </Button>
      </Box>
    </Box>
  );
}

export default Contato;
