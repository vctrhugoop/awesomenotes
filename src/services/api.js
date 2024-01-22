import axios from 'axios';

const api = axios.create({
  baseURL: 'https://awesomenotes-api.onrender.com',
});

export default api;
