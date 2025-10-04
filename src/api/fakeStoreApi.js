/*
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
*/

const BASE_URL = 'https://fakestoreapi.com/products';

async function handleResponse(res) {
  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  if (!res.ok) {
    const error = (data && data.message) || res.statusText;
    return Promise.reject(error);
  }
  return data;
}

export async function fetchProducts() {
  const res = await fetch(BASE_URL);
  return handleResponse(res);
}

export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(res);
}

export async function createProduct(product) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return handleResponse(res);
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(res);
}