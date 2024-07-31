import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from './imgs/home.png';

function Home() {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Coluna de Texto */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            Emissão do visto para Portugal
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Tempo de espera referente ao vice-consulado de Recife/PE
          </Typography>
          <Typography variant="h6">
          Planeje sua viagem para Portugal com confiança. Use nosso site para obter informações 
          precisas e atualizadas sobre o tempo de obtenção do visto e garanta uma experiência de
          viagem tranquila e bem organizada.
          </Typography>
        </Grid>
        
        {/* Coluna de Imagem */}
        <Grid item xs={12} md={6}>
          <Box component="img" src={Image} alt="Visto portugal" sx={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;