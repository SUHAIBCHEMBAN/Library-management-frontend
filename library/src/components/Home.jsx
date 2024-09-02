import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', backgroundColor: '#ffffff' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Our Library
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Join us today and explore our amazing library.
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: 4 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                component={Link} 
                to="/register"
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="outlined" 
                color="primary" 
                fullWidth 
                component={Link} 
                to="/login"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
