import axios from 'axios';

const token = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 1000,
})

export const instanceAuth = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: `Bearer ${token}`,
  },
})