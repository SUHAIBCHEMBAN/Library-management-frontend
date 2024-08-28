// src/api.js

import axios from 'axios';

// Configure your API base URL
const API_BASE_URL = 'http://localhost:8000'; // Adjust this if your backend URL is different

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to handle registration
export const registerUser = async (userData) => {
  const response = await api.post('/register/', userData);
  return response.data;
};

// Function to handle login
export const loginUser = async (credentials) => {
  const response = await api.post('/login/', credentials);
  return response.data;
};

// Function to refresh JWT tokens
export const refreshToken = async (refreshToken) => {
  const response = await api.post('/token/refresh/', { refresh: refreshToken });
  return response.data;
};
