import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

async function handleResponse(promise) {
  try {
    const response = await promise;
    return response.data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
}