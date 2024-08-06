import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Contato() {
  const contato1 = '5584987524800'; // Substitua pelo número de telefone real
  const contato2 = '0987654321'; // Substitua pelo número de telefone real

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '82vh',
        overflow: 'hidden',
        color: 'white', // Cor do texto
        alignItems: 'center', // Alinhar itens verticalmente ao centro
        justifyContent: 'center',
        padding: 2, // Adiciona um pouco de padding para espaçamento
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
          margin: '2em', // Ajuste a margem conforme necessário
          textAlign: 'left', // Alinha o texto à esquerda
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Alinha os botões à esquerda
          width: '100%',
          maxWidth: '200px',
          margin: '2em', // Ajuste a margem conforme necessário
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href={`https://wa.me/${contato1}`}
          target="_blank"
          sx={{ mb: 1, width: '20em', maxWidth: '200px', backgroundColor: '#ffffff', color: '#4f43cb', '&:hover': {
              color: '#ffffff', // Muda a cor do texto para branco ao passar o mouse
            },}}
        >
          Contato 1 no WhatsApp
        </Button>
        <Button
          variant="contained"
          color="primary"
          href={`https://wa.me/${contato2}`}
          target="_blank"
          sx={{ width: '20em', maxWidth: '200px', backgroundColor: '#ffffff', color: '#4f43cb', '&:hover': {
              color: '#ffffff', // Muda a cor do texto para branco ao passar o mouse
            }, }}
        >
          Contato 2 no WhatsApp
        </Button>
      </Box>
    </Box>
  );
}

export default Contato;
