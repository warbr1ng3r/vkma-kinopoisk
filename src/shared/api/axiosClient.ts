import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `https://www.omdbapi.com/`,
  params: {
    apikey: import.meta.env.VITE_SECRET_KEY
  },
  timeout: 2000
});

export { axiosClient };
