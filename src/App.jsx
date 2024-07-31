import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import MenuComponent from './Navbar';
import Footer from './footer';
import Form from './form';
import Home from './home';

// Crie um tema com estilos globais
const theme = createTheme({
  palette: {
    text: {
      primary: '#ffffff',
    },
    background: {
      default: 'linear-gradient(90deg, rgba(53, 51, 205, 0.8), rgba(0, 0, 0, 0.8))', // Define o fundo da página
    },
  },
  typography: {
    // Ajuste conforme necessário
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <MenuComponent />
        <Box sx={{ flex: 1 }}>
          <Home />
          <Form />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
