import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
