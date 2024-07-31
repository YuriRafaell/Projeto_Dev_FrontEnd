import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Cor semelhante ao Navbar
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="inherit" variant="h6" sx={{ fontSize: '1rem' }}>
              Desenvolvido por
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="inherit" variant="body2" sx={{ fontSize: '0.875rem' }}>
              Soraya Araújo e Yuri Rafael
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
