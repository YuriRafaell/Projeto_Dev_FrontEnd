import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';

function MenuComponent() {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    < ScheduleSendIcon  sx={{ fontSize: 40, mr: 2  }} />
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    VISTOS
    </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/sobre">Sobre</Button>
        <Button color="inherit" href="/visto">Visto</Button>
      </Box> 
    </Toolbar>
  </AppBar>
);
}
export default MenuComponent;
