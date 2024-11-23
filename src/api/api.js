import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

export const getProducts = async (params = {}) => {
  try {
    const response = await axios.get(`${apiUrl}/products`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
