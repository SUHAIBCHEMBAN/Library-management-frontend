import { useState } from 'react';
import { registerUser } from '../api';
import { Box, Button, Container, TextField, Typography, Paper, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before new submission
    try {
      await registerUser({ username, password });
      alert('Registration successful! Redirecting to login...');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      // Handle specific error messages from the backend
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Registration failed');
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Register
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
