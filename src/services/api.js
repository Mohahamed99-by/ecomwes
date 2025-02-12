// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export async function fetchProducts() {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchProduct(id) {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}