import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Grafico from './Grafico';
import homeImage from './imgs/home.png';

function Home() {
  const navigate = useNavigate();

  const handleSaibaMaisClick = () => {
    navigate('/Visto');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >

      {/* Conteúdo principal */}
      <Container
        maxWidth="lg"
        sx={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          textAlign: 'right',
          mt:15,
          mb: 22,
          overflowX: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            maxWidth: '100%',
            overflowX: 'hidden',
          }}
        >
          <Box sx={{ flex: 1, p: 2, color: 'white', textAlign: 'left' }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Emissão do visto para Portugal
            </Typography>
            <Typography variant="h3" component="h3" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '1.5rem' }, marginBottom: '2rem' }}>
              Tempo médio de espera referente ao consulado de Recife/PE
            </Typography>
            <Typography variant="body1" paragraph>
              Planeje sua viagem para Portugal com confiança e tranquilidade. Nosso site fornece
              informações atualizadas sobre o tempo médio de obtenção dos diferentes tipos de vistos
              para Portugal, ajudando você a se preparar de forma eficaz. Com dados precisos sobre
              prazos e requisitos, você pode planejar sua viagem com antecedência, assegurando que
              tudo esteja em ordem para uma experiência de viagem tranquila e bem organizada.
            </Typography>
          </Box>
          <Box 
            sx={{ 
              flex: 1, 
              p: 2,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <img
              src={homeImage}
              alt="Visto bandeira de portugal e nome precisa de visto para portugal?"
              style={{ 
                height: 'auto', 
                display: 'block', 
                borderRadius: '16px',
                opacity: 0.4, 
                maxWidth: '30em',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Gráfico */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          mb: 5,
          ml: 40,
          overflowX: 'hidden',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1200px' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: "white", ml: 12 }}>
            Média de Dias de Espera por Tipo de Visto
          </Typography>
          <Grafico />
        </Box>
        <Button
              variant="contained"
              color="primary"
              onClick={handleSaibaMaisClick}
              sx={{ mt: 2, justifyContent:"center", background:'#4f43cb', width: '20%', ml: '-42vh', mt: 5}}
            >
              Saiba Mais
            </Button>
      </Box>
    </Box>
  );
}

export default Home;
