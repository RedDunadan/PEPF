import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 5000,
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

export function fetchProducts() {
  return handleResponse(api.get('/'));
}

export function fetchProductById(id) {
  return handleResponse(api.get(`/${id}`));
}

export function deleteProduct(id) {
  return handleResponse(api.delete(`/${id}`));
}