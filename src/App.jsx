import React from 'react';
import MenuComponent from './Navbar';
import Footer from './footer';
import Form from './form';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <MenuComponent />
      <Box sx={{ flex: 1 }}>
        <Form />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;